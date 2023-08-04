import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FiEdit } from "react-icons/fi";
import {
  Container,
  Content,
  TableContainer,
  THead,
  TableHead1,
  TableHead2,
  TableHead3,
  TableHead4,
  TableHead5,
  SearchIcon,
  TopSection,
  Header,
  Title,
  DateArea,
  ExpenseTableTwo,
  VerifyButton,
  Heading,
  HeadingTwo,
  ParagraphDate,
  ParagraphSearch,
  ParagraphComfirm,
  TableHeadBottom,
  TableRow,
  Select,
  Input,
  TableCell,
  DateTableHeadRow,
  AddTableHeadRow,
  WaitingTableHeadColumn,
  ConfirmedTableHeadColumn,
  TableCellWrapper,
  RedTableHeadColumn,
  TableHeadTwo,
  TableHeadColumn,
  BottomSection,
  BottomColumn,
  IconContainer,
  IconContainer2,
  SubmitButton,
  DeleteIcon2,
  DeleteIcon,
  TotalDiv,
  TotalRow,
  TotalAmount,
 
} from "./expense.styled";
import "react-datepicker/dist/react-datepicker.css";
import "./custom-datepicker.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";
import searchIcon from "../../assets/search-icon.png";
import addPlus from "../../assets/add-icon.png";
import OptionModal from "./optionModal";
import { useAuth } from "../../context/authContext";
import DateTime from "../DateTime/DateTime";
import AddExpenseModal from "./AddExpenseModal";
import EditExpenseModal from "./EditExpenseModal";
import { format } from "date-fns";
const AddDiv = styled.div`
  display: flex;
  cursor: pointer;
`;
const AddIcon = styled.img``;

const Expenses: React.FC = () => {
  const {
    addExpense,
    getExpense,
    expenditure,
    getWaitingExpenses,
    waitingExpenses,
    deleteExpense,
    getCategories,
    categories
  } = useAuth();
  const currentDate = Date.now();

  const formattedDate = format(currentDate, "dd/MM/yyyy");

  const monthAndYear = format(new Date(), "MMMM, yyyy");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [reloadPage, setReloadPage] = useState(false);
  interface AccountInfoItem {
    id: number;
    amount: number;
    transaction_date: string;
    narration: string;
  }

  const [description, setDescription] = useState("");

  const [selectedAccount, setSelectedAccount] = useState<string>("");

  
  const handlePageReload = () => {
    setReloadPage(true);
  };

// const [selectData, se]


  const [tableData, setTableData] = useState([{
    id:"",
    category:""
}])
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>,id:string) => {
    const selectedValue = event.target.value;
    //setTableData({...tableData,id:id,transaction_date:"transacy",category:selectedValue})
  
    setTableData((prevData) =>
    prevData.map((row) => (row.id === id ? { ...row, category: selectedValue } : row))
  );  
  setSelectedAccount(selectedValue);
  };
  
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);

  

 
  const handleAddExpenseClick = () => {
    setIsAddExpenseModalOpen(true);
  };

  const [isEditExpenseModal, setEditExpenseModalOpen] = useState(false);

  const[selectedExpense,setSelectedExpense]=useState()

  
  const closeEditExpense=()=>{
    setEditExpenseModalOpen(false)
  }

  const closeAddExpenseModal = () => {
    setIsAddExpenseModalOpen(false);
  };

  const handleDeleteExpense= async(id: string)=>{
     await deleteExpense(id);
     handlePageReload()
  
  }

  useEffect(() => {
    getWaitingExpenses();
    getExpense();
    getCategories();
  }, []);

  useEffect(() => {
    if (reloadPage) {
      getWaitingExpenses();
      getExpense();
      getCategories();
      setReloadPage(false);
    }
  }, [reloadPage]);





  const expense = waitingExpenses ? waitingExpenses : [];
  const waitingExpenditure = expense.sort(
    (
      a: { transaction_date: string | number | Date },
      b: { transaction_date: string | number | Date }
    ) => +new Date(b.transaction_date) - +new Date(a.transaction_date)
  );

  const waitingExpenditures = expense.sort(
    (
      a: { transaction_date: string | number | Date },
      b: { transaction_date: string | number | Date }
    ) => +new Date(b.transaction_date) - +new Date(a.transaction_date)
  );

  const expenses = expenditure.sort(
    (
      a: { transaction_date: string | number | Date },
      b: { transaction_date: string | number | Date }
    ) => +new Date(b.transaction_date) - +new Date(a.transaction_date)
  );
  const handleEditExpense=(id:string)=>{
    const incomeToEdit = expenses.find((item:any) => item.id === id);
    setSelectedExpense(incomeToEdit);
    setEditExpenseModalOpen(true)
  }
  console.log(expenses)
  const totalExpenses = expense.reduce(
  (total: any, expense: { amount: any; }) => total + expense.amount, 0
  );
  const totalWaitingExpenses = waitingExpenditures.reduce(
    (total: any, data: { amount: any; }) => total + data.amount, 0
  )
  const totalAmount = totalExpenses + totalWaitingExpenses;
  return (
    
    <Container>
      <Content>
        <TopSection>
          <Header>
            <Heading>Expenses</Heading>
            <ParagraphDate>{formattedDate}</ParagraphDate>
          </Header>

          <Title>
            <HeadingTwo>{monthAndYear} Expenses Tracking</HeadingTwo>
            {/* <VerifyButton>View Summary</VerifyButton> */}
          </Title>

          <div>
            <ParagraphSearch>Search Transaction</ParagraphSearch>
          </div>

          <DateArea>
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              placeholderText="From"
              dateFormat="MM/dd/yyyy"
            />
            <DatePicker
              selected={toDate}
              onChange={(date) => setToDate(date)}
              placeholderText="To"
              dateFormat="MM/dd/yyyy"
            />
            <SearchIcon src={searchIcon} />
          </DateArea>

          <ParagraphComfirm>Confirmation required</ParagraphComfirm>
        </TopSection>
        <TableContainer>
          <THead>
        
            <TableHead1>Transaction</TableHead1>
            <TableHead2>Date | Time</TableHead2>
            <TableHead3>Narration</TableHead3>
            <TableHead4>Category</TableHead4>
            <TableHead5>Description</TableHead5>
     
          </THead>
          {waitingExpenditure.map((data: any) => (
            <TableRow key={data.id}>
              <TableCell isFirstCell>
                <TableCellWrapper>{data?.amount}</TableCellWrapper>
              </TableCell>
              <TableCell>
                <TableCellWrapper>
                  {DateTime(data?.transaction_date)}
                </TableCellWrapper>
              </TableCell>
              <TableCell>
                <TableCellWrapper>{data?.narration}</TableCellWrapper>
              </TableCell>
              <TableCell>
                <Select onChange={()=>{handleSelectChange(event,data?.id)}} value={tableData?.category}>
                <option disabled selected >
                Select
              </option>
                  {categories.map((category:any)=><option key={category} value={category}>{category}</option>)}
         
                </Select>
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  name="description"
                  placeholder="Add note (optional)"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <SubmitButton
                  type="submit"
                  onClick={async(e) => {
                    e.preventDefault();
                    const form: any = {};
                    form.narration = data?.narration;
                    form.transaction_date = data?.transaction_date;
                    form.amount = data?.amount;
                    form.id = data?.id;
                    form.category = selectedAccount.replace(/^Savings-/, '');
                    form.description = description;
                    await addExpense(form);
                    handlePageReload()
                  }}
                 
                >
                  Submit
                </SubmitButton>
              </TableCell>
            </TableRow>

          ))}
        </TableContainer>

        <ExpenseTableTwo>
          <TableHeadTwo>Category</TableHeadTwo>
          <TableHeadTwo>Narration</TableHeadTwo>
          <TableHeadTwo>Time</TableHeadTwo>
          <TableHeadTwo>Amount</TableHeadTwo>
          <TableHeadTwo>Status</TableHeadTwo>
        </ExpenseTableTwo>

        <BottomSection>
          <TableHeadBottom>
            <DateTableHeadRow>{formattedDate}</DateTableHeadRow>
            <AddDiv onClick={handleAddExpenseClick}>
              <AddIcon src={addPlus} />
              <AddTableHeadRow>Add</AddTableHeadRow>
            </AddDiv>
          </TableHeadBottom>

          {expenses.map((expense: any) => (
            <BottomColumn key={expense.id}>
              <TableHeadColumn>{expense.category}</TableHeadColumn>
              <TableHeadColumn>{expense.narration}</TableHeadColumn>
              <TableHeadColumn>
                {DateTime(expense.transaction_date)}
              </TableHeadColumn>
              <RedTableHeadColumn>-₦{expense.amount}</RedTableHeadColumn>
              <ConfirmedTableHeadColumn>Confirmed</ConfirmedTableHeadColumn>
              {isEditExpenseModal && (
        <EditExpenseModal
          isOpen={isEditExpenseModal}
          onClose={closeEditExpense}
          onPageReload={handlePageReload}
          expense={selectedExpense}
        />
            )}
              <TableHeadColumn>
                {expense.id.length > 5 ? (
                 
                  <IconContainer>
                    <FiEdit size={25} onClick={()=> handleEditExpense(expense.id)}/>
                    <DeleteIcon>
                      <MdDeleteOutline size={27} onClick={()=>handleDeleteExpense(expense.id)} />
                    </DeleteIcon>
                  </IconContainer>
                ) : (
                  <IconContainer2>
                    <FiEdit size={25} />
                    <DeleteIcon2>
                      <MdDeleteOutline size={25} />
                    </DeleteIcon2>
                  </IconContainer2>
                )}
              </TableHeadColumn>
            </BottomColumn>
          ))}

          {waitingExpenditures.map((data: any) => (
            <>
              <BottomColumn key={data.id}>
                <TableHeadColumn>Others</TableHeadColumn>
                <TableHeadColumn>{data.narration}</TableHeadColumn>
                <TableHeadColumn>
                  {DateTime(data.transaction_date)}
                </TableHeadColumn>
                <RedTableHeadColumn>{"-₦" + data.amount}</RedTableHeadColumn>
                <WaitingTableHeadColumn>Waiting</WaitingTableHeadColumn>
                <TableHeadColumn>
                  <IconContainer2>
                    <FiEdit size={25} />
                    <DeleteIcon2>
                      <MdDeleteOutline size={25} />
                    </DeleteIcon2>
                  </IconContainer2>
                </TableHeadColumn>
              </BottomColumn>
            </>
          ))}
          <TotalDiv>
                <TotalRow>
                  TOTAL <TotalAmount>-₦{totalAmount}</TotalAmount>
                </TotalRow>
              </TotalDiv>
        </BottomSection>
       
      </Content>
      {isAddExpenseModalOpen && (
        <AddExpenseModal
          isOpen={isAddExpenseModalOpen}
          onClose={closeAddExpenseModal}
          onPageReload={handlePageReload}
        />
      )}
    </Container>
  );
};

export default Expenses;
