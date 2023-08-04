import React from "react";
import ToggleOn from "../../assets/toggleOn.svg";
import ToggleOff from "../../assets/toggleOff.svg";
import {
  WideColumn,
  NarrowColumn,
  TableData,
  TableData2,
  TableDataSpan,
  TableWrapper2,
  TableTitle,
  TableHeader,
  Table,
  TableSection,
  TableDataBottom,
  TableBodyRow,
  BottomIconBg,
  RentIcon,
  InternetIcon,
  SavingIcon,
  HealthIcon,
  BottomIcons,
  OtherIcon,
  ToggleOffIcon,
  ToggleOnIcon,
  Paid,
  CellContainer,
  OptionModalContainer,
  SectionBottom,
  Desc,
  DescRow,
} from "./budget-styles";
import Button from "../Button/button";
import OptionModal from "./BudgetModals/OptionModal";
import { useState,useEffect} from "react";
import PlannedPayment from "./BudgetModals/PlannedPayment";
import StatusBar from "./StatusBar";
import { useAuth } from "../../context/authContext";
import { DeleteIcon, Edit, EditIcon } from "./BudgetModals/optionmodal-style";
const BottomSection = () => {

  const{getAllPlannedPayment,plannedPayments}=useAuth()

  useEffect(()=>{
    getAllPlannedPayment();
  },[])


  console.log(plannedPayments)
//  const categorySums:any ={}

//   expenditure.forEach((expense:any) => {
//     const { category, amount } = expense;
//     if (categorySums.hasOwnProperty(category)) {
//       categorySums[category] += parseFloat(amount);
//     } else {
//       categorySums[category] = parseFloat(amount);
//     }
//   });
  

  // const othersSum = categorySums["Others"];
  const [toggle, SetToggle] = useState(false);
  const [toggle1, SetToggle1] = useState(false);
  const [toggle2, SetToggle2] = useState(false);
  const [toggle3, SetToggle3] = useState(false);

  const handleToggle = () => {
    SetToggle(!toggle);
  };
  const handleToggle2 = () => {
    SetToggle2(!toggle2);
  };
  const handleToggle1 = () => {
    SetToggle1(!toggle1);
  };
  const handleToggle3 = () => {
    SetToggle3(!toggle3);
  };
  const [ModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div>
        <PlannedPayment
          isOpen={ModalOpen}
          onClose={handleCloseModal}
          heading={"Add"}
        />
      </div>

      <SectionBottom>
        <TableWrapper2>
          <TableTitle>
            <h2>Planned Payments</h2>
            <div>
              <Button
                // onClick={handleSuccesButtonClick}
                width="rem"
                height="2.75rem"
                fontSize="1rem"
                backgroundColor="white"
                color="green"
                border="solid 1px green"
                text="+ New Category"
                onClick={handleButtonClick}
              />
            </div>
          </TableTitle>
          <hr />
          <TableSection>
        
            <Table>
              <thead>
                <TableBodyRow>
                  <TableHeader>Category</TableHeader>
                  <TableHeader>Amount (#)</TableHeader>
                  <TableHeader>Frequency</TableHeader>
                  <TableHeader>Status</TableHeader>
                </TableBodyRow>
              </thead>
              <tbody>
              {plannedPayments.map((pay)=><TableBodyRow>
                  
            
                 <TableDataBottom>{pay.category}</TableDataBottom>
                  <TableDataBottom>{pay.amount}</TableDataBottom>
                  <TableDataBottom>{pay.frequency}</TableDataBottom>
                  <TableDataBottom>
                    <CellContainer>
                      
                      {(pay.amount <= pay.amountSpent) ? (
                        <img src={ToggleOn}  onClick={handleToggle} />
                      ) : (
                        <img src={ToggleOff} onClick={handleToggle} />
                      )}
                      <Paid>Paid</Paid>
                      <OptionModalContainer>
                      <span>
                       <Edit>
                      <EditIcon  />
                      <DeleteIcon   />
           </Edit>
         </span>
                      </OptionModalContainer>
                    </CellContainer>
                  </TableDataBottom>
                </TableBodyRow>
                )}
          
              </tbody>
            </Table>
          </TableSection>
        </TableWrapper2>
      
      </SectionBottom>
    </>
  );
};

export default BottomSection;
