import React, { FC, useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import {
  IncomeContainer,
  IncomeHead,
  IncomeDate,
  IncomeContent,
  IncomeHeader,
  AccountDiv,
  ImageDiv,
  MonthHeader,
  MonthTitle,
  AddIncomeButton,
  SelectOptions,
  PlusIcon,
  ButtonContainer,
  Option,
  TableContainer,
  TableHeading,
  TableRow,
  TableCell,
  EditButton2,
  DeleteButton2,
  EditButton,
  DeleteButton,
  TableInputs,
  Paginate,
  ButtonWrapper
} from "./incomeStyles/income.styled";
import { format } from "date-fns";
import AddCashIncome from "./IncomeModals/AddCashIncome";
import { useAuth } from "../../context/authContext";
import DateTime from "../DateTime/DateTime";
import EditCashIncome from "./IncomeModals/EditCashIncome";
import AccountCard from "./AccountCard";
import Button from "../Button/button";


const IncomeComp: FC = () => {
  const { getAllIncome,allIncome,getAccounts,accountDetails,deleteIncome} = useAuth();
  const currentDate = new Date().toLocaleDateString("en-GB");
  const monthOfYear = format(new Date(), "MMMM, yyyy");
  const [ModalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [reloadIncomeComp, setReloadIncomeComp] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePageReload = () => {
    setReloadIncomeComp(true);
  };

  useEffect(() => {
    getAllIncome()
    getAccounts() 
  }, []);

  
  const cash = allIncome.filter((income:any)=> income.account === "Cash")
  
  const [selectedIncome, setSelectedIncome] = useState({});
  
  useEffect(() => {
    if (reloadIncomeComp) {
      getAllIncome()
      setReloadIncomeComp(false); 
    }
  }, [reloadIncomeComp]);



console.log(allIncome)
const handleEditCloseModal=()=>{
  setEditModalOpen(false);
}

  let totalCash = 0;
  if (cash.length > 0) {
    cash.forEach((element: any) => {
      totalCash += +element?.amount;
    });
  }
  const formattedTotalCash = totalCash && totalCash.toLocaleString('en-US')

  const displayIncome = allIncome.sort(
    (a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) => +new Date(b.createdAt) - +new Date(a.createdAt)
  );
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(displayIncome.length / itemsPerPage);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  const handleDelete = async (id:string) => {
    await deleteIncome(id);
     setReloadIncomeComp(true);
  };

 

  const handleNextPage = () => {
    if (currentPage === totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const incomeToShow = displayIncome.slice(indexOfFirstItem, indexOfLastItem);

  const handleEditModal=(id:string)=>{
    
    const incomeToEdit = incomeToShow.find((item:any) => item.id === id);
    setSelectedIncome(incomeToEdit);
    setEditModalOpen(true);
  }

  return (
    <>
      <div>
        <AddCashIncome isOpen={ModalOpen} onClose={handleCloseModal} onPageReload={handlePageReload}/>
       
      </div>
      <IncomeContainer>
        <IncomeContent>
          <IncomeHeader>
            <IncomeHead>Income</IncomeHead>
            <IncomeDate>{currentDate}</IncomeDate>
          </IncomeHeader>
          <AccountDiv>
            { accountDetails.map((account:any)=><AccountCard
              bankName={account.bank_name}
              // eslint-disable-next-line no-unsafe-optional-chaining
              amount={ account?.account_balance && "₦ " + (account?.account_balance).toLocaleString('en-US')}
            />)}

            {cash.length > 0 && (
              <AccountCard cash={"Cash"} amount={String(totalCash) && ("₦ " + (formattedTotalCash))} />
            )}
          </AccountDiv>
          <IncomeHeader>
            <MonthHeader>
              <MonthTitle>{monthOfYear}</MonthTitle>
              <ButtonContainer>
                <AddIncomeButton onClick={handleButtonClick}>
                  <PlusIcon />
                  Add Cash Income
                </AddIncomeButton>
                {/* <SelectOptions>
                  <Option value="option3">All</Option>
                  { accountDetails.map((account:any)=><Option value="option1">{account?.bank_name}</Option>
                  )}
                  <Option value="option4">Cash</Option>
                </SelectOptions> */}
              </ButtonContainer>
            </MonthHeader>
          </IncomeHeader>

          <TableHeading>
            <TableCell>Date | Time</TableCell>
            <TableCell>Narration</TableCell>
            <TableCell>Account</TableCell>
            <TableCell>Amount (#)</TableCell>
            <TableCell>Balance (#)</TableCell>
            <TableCell></TableCell>
          </TableHeading>
          <TableContainer>
            {incomeToShow.map((item: any) => (
              <TableInputs key={item?.id}>
                <TableRow>
                  <TableCell>{DateTime(item?.createdAt)}</TableCell>
                  <TableCell>{item?.narration}</TableCell>
                  <TableCell>
                    {item?.sender_account_number || item?.account}
                  </TableCell>
                  <TableCell>{item?.amount}</TableCell>
                  <TableCell>{item?.amount}</TableCell>
                  <TableCell>
                    {item?.account === "Cash" ?
                    (<>  
                     <EditCashIncome isOpen={editModalOpen} onClose={handleEditCloseModal} onPageReload={handlePageReload} income={selectedIncome}/>
                     <EditButton>
                      <FiEdit size={25} onClick={()=>{handleEditModal(item?.id)}}/>
                      </EditButton>
                      <DeleteButton>
                      <MdDeleteOutline size={25} onClick={()=>handleDelete(item.id)} />
                      </DeleteButton>
                    </>):(
                      <>  
                      <EditButton2>
                       <FiEdit size={25} />
                       </EditButton2>
                       <DeleteButton2>
                       <MdDeleteOutline size={25} />
                       </DeleteButton2>
                     </>
                    )
                    }
                    
                  </TableCell>
                </TableRow>
              </TableInputs>
            ))}
          </TableContainer>
          {displayIncome.length > itemsPerPage && (
            <Paginate>
              
              <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                text={currentPage === 1 ? "First" : "Prev"}
                backgroundColor={currentPage === 1 && "#D8F3DC"}
                color={currentPage === 1 && "green"}
                margin="0 0.5rem 0 0"
              />
              <Button
                text={`Page ${currentPage}`}
                backgroundColor="inherit"
                color="green"
                margin="0 0.5rem 0 0"
              />
              <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                text={currentPage === totalPages ? "Last" : "Next"}
                backgroundColor={currentPage === totalPages && "#D8F3DC"}
                color={currentPage === totalPages && "green"}
                
              />
            </Paginate>
          )}
        </IncomeContent>
      </IncomeContainer>
    </>
  );
};

export default IncomeComp;
