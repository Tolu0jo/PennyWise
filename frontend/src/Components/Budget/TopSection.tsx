import React from "react";
import {
  SectionTop,
  Aside,
  TopRightH2,
  TopLeftH1,
  TopStep2,
  WideColumn,
  NarrowColumn,
  SelectOptions,
  Options,
  OptionSelector,
  TableWrapper,
  TableTitle,
  Table,
  TableSection,
  TableData,
  TableBodyRow,
  TableData2,
  TableDataSpan,
  IconBg,
  Icon,
  CarIcon,
  VideoIcon,
  FoodIcon,
  Icons,
  CellContainer,
  Desc,
  DescRow,
  OtherIcon,
} from "./budget-styles/Budget-styles";
import OptionModal from "./BudgetModals/OptionModal";
import Button from "../Button/button";
import StatusBar from "./StatusBar";
import { useState, useEffect } from "react";
import AddDailyNeeds from "./BudgetModals/AddDailyNeeds";
import { format } from "date-fns";
import { useAuth } from "../../context/authContext";
import { DeleteIcon, Edit, EditIcon } from "./BudgetModals/optionmodal-style";

const TopSection = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const {getAllDailyNeeds,dailyNeeds,getExpense,deleteDailyNeeds, expenditure} = useAuth()
 
  const[heading,setHeading] =useState("")
  const handleButtonClick = () => {
    setModalOpen(true);
    setHeading('Add')
  };


  const handleReloadPage = ()=>{
    setReloadPage(true);
  }

  const [editDailyNeed,setDailyNeed]=useState({})

  const handleEditButtonClick = (id:string)=>{
    setModalOpen(true);
    setHeading('Edit')
    const editDailyneed = dailyNeeds.find((dailyneed:any)=> dailyneed.id === id)
    setDailyNeed(editDailyneed)
  }
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const currentDate = Date.now();
  const formattedDate = format(currentDate, "dd/MM/yyyy");

  const monthAndYear = format(new Date(), "MMMM, yyyy");



  
  const [reloadPage, setReloadPage] = useState(false);
   useEffect(()=>{
     getAllDailyNeeds()
     getExpense();
   },[])
 
  const categorySums: any = {};

  expenditure.forEach((expense: any) => {
    const { category, amount } = expense;
    // eslint-disable-next-line no-prototype-builtins
    if (categorySums.hasOwnProperty(category)) {
      categorySums[category] += parseFloat(amount);
    } else {
      categorySums[category] = parseFloat(amount);
    }
  });
  useEffect(() => {
    if (reloadPage) {
          getExpense();
          getAllDailyNeeds()
    setReloadPage(false);
    }

  }, [reloadPage]);


  const handleDelete = async (id:string)=>{
   await deleteDailyNeeds(id)
   setReloadPage(true);
  }
 
  console.log(dailyNeeds)
  const personalCareSum = categorySums["Personal Care"];
  const entertainmentSum = categorySums["Entertainment"];
  const transportationSum = categorySums["Transportation"];
  const foodSum = categorySums["Food"];


  return (
    <>
      <div>
        <AddDailyNeeds
          isOpen={ModalOpen}
          onClose={handleCloseModal}
          heading={heading}
         editDailyNeed={editDailyNeed}
         onReload ={handleReloadPage}

        />
      </div>
      <SectionTop>
        <Aside>
          <TopLeftH1>Budget</TopLeftH1>
          <TopRightH2>{formattedDate}</TopRightH2>
        </Aside>
        <TopStep2>
          <h1>{monthAndYear}</h1>
          <OptionSelector>
            <p>Set Budget:</p>   
            <SelectOptions>
              <Options value="option1">Daily</Options>
              <Options value="option2">Montly</Options>
              <Options value="option3">Yearly</Options>
            </SelectOptions>
          </OptionSelector>
        </TopStep2>
        <TableWrapper>
          <TableTitle>
            <h2>Daily Needs</h2>
            <div>
              <Button
                onClick={handleButtonClick}
                width="rem"
                height="2.75rem"
                fontSize="1rem"
                backgroundColor="white"
                color="green"
                border="solid 1px green"
                text="+ New Category"
              />
            </div>
          </TableTitle>
          <hr />
          <TableSection>
            {/* <Icons>
              <IconBg>
                <Icon />
              </IconBg>
              <IconBg>
                <CarIcon />
              </IconBg>
              <IconBg>
                <VideoIcon />
              </IconBg>
              <IconBg>
                <FoodIcon />
              </IconBg>
              <IconBg>
              <OtherIcon />
              </IconBg>
            </Icons> */}
  
            <Table>
              <thead>
                <TableBodyRow>
                  <NarrowColumn>Category</NarrowColumn>
                  <NarrowColumn>Set Limit (#)</NarrowColumn>
                  <NarrowColumn>Amount Spent</NarrowColumn>
                  <WideColumn>Status</WideColumn>
                </TableBodyRow>
              </thead>
              
              <tbody>
    {dailyNeeds.map((dailyNeed:any)=>
  <>
     <TableBodyRow key={dailyNeed?.id}>
     <TableData>{dailyNeed.category}</TableData>
     <TableData>{dailyNeed.setLimit}</TableData>
     <TableData>{dailyNeed.amountSpent}</TableData>
     <TableData>
       <CellContainer>
         <StatusBar progress={ Math.floor((dailyNeed.amountSpent / dailyNeed.setLimit) * 100) } />
         <span>
         <Edit>
             <EditIcon onClick={()=> handleEditButtonClick(dailyNeed.id)} />
             <DeleteIcon  onClick={()=>handleDelete(dailyNeed.id)} />
           </Edit>
         </span>
       </CellContainer>
     </TableData>
   </TableBodyRow>              
                <TableBodyRow>
                  <TableData2 colSpan={4}>
                    <DescRow>
                      <Desc>Description:&nbsp;</Desc>
                      <TableDataSpan>
                      &nbsp;{dailyNeed.description}
                      </TableDataSpan>
                    </DescRow>
                  </TableData2>
                </TableBodyRow>
                </>

)              
}
               

              </tbody>
            </Table>
          </TableSection>
        </TableWrapper>
      </SectionTop>
    </>
  );
};

export default TopSection;
