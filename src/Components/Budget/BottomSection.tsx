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
const BottomSection = () => {

  const{getExpense,expenditure}=useAuth()

  useEffect(()=>{
     getExpense()
  },[])

 const categorySums:any ={}

  expenditure.forEach((expense:any) => {
    const { category, amount } = expense;
    if (categorySums.hasOwnProperty(category)) {
      categorySums[category] += parseFloat(amount);
    } else {
      categorySums[category] = parseFloat(amount);
    }
  });
  

  const othersSum = categorySums["Others"];
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
            <BottomIcons>
              <BottomIconBg>
                <RentIcon />
              </BottomIconBg>
              <BottomIconBg>
                <InternetIcon />
              </BottomIconBg>
              <BottomIconBg>
                <HealthIcon />
              </BottomIconBg>
              <BottomIconBg>
                <SavingIcon />
              </BottomIconBg>
            </BottomIcons>
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
                <TableBodyRow>
                  <TableDataBottom>Rent</TableDataBottom>
                  <TableDataBottom>150,000</TableDataBottom>
                  <TableDataBottom>Monthly</TableDataBottom>
                  <TableDataBottom>
                    <CellContainer>
                      
                      {toggle ? (
                        <img src={ToggleOn}  onClick={handleToggle} />
                      ) : (
                        <img src={ToggleOff} onClick={handleToggle} />
                      )}
                      <Paid>Paid</Paid>
                      <OptionModalContainer>
                        <OptionModal type={"payment"} />
                      </OptionModalContainer>
                    </CellContainer>
                  </TableDataBottom>
                </TableBodyRow>
                <TableBodyRow></TableBodyRow>
                <TableBodyRow>
                  <TableDataBottom>Transportation </TableDataBottom>
                  <TableDataBottom>150,000</TableDataBottom>
                  <TableDataBottom>Monthly</TableDataBottom>
                  <TableDataBottom>
                    <CellContainer>
                      {toggle1 ? (
                        <img src={ToggleOn}  onClick={handleToggle1} />
                      ) : (
                        <img src={ToggleOff} onClick={handleToggle1} />
                      )}
                      <Paid>Paid</Paid>
                      <OptionModalContainer>
                        <OptionModal />
                      </OptionModalContainer>
                    </CellContainer>
                  </TableDataBottom>
                </TableBodyRow>
                <TableBodyRow></TableBodyRow>
                <TableBodyRow>
                  <TableDataBottom>Health Insurance</TableDataBottom>
                  <TableDataBottom>150,000</TableDataBottom>
                  <TableDataBottom>Monthly</TableDataBottom>
                  <TableDataBottom>
                    <CellContainer>
                      {toggle2 ? (
                        <img src={ToggleOn}  onClick={handleToggle2} />
                      ) : (
                        <img src={ToggleOff} onClick={handleToggle2} />
                      )}
                      <Paid>Paid</Paid>
                      <OptionModalContainer>
                        <OptionModal />
                      </OptionModalContainer>
                    </CellContainer>
                  </TableDataBottom>
                </TableBodyRow>
                <TableBodyRow></TableBodyRow>
                <TableBodyRow>
                  <TableDataBottom>Savings</TableDataBottom>
                  <TableDataBottom>150,000</TableDataBottom>
                  <TableDataBottom>Monthly</TableDataBottom>
                  <TableDataBottom>
                    <CellContainer>
                      {toggle3 ? (
                        <img src={ToggleOn}  onClick={handleToggle3} />
                      ) : (
                        <img src={ToggleOff} onClick={handleToggle3} />
                      )}
                      <Paid>Paid</Paid>
                      <OptionModalContainer>
                        <OptionModal />
                      </OptionModalContainer>
                    </CellContainer>
                  </TableDataBottom>
                </TableBodyRow>
                <TableBodyRow></TableBodyRow>
              </tbody>
            </Table>
          </TableSection>
        </TableWrapper2>
        <TableWrapper2>
          <TableTitle>
            <h2>Others</h2>
          </TableTitle>
          <hr />
          <TableSection>
            <BottomIcons>
              <BottomIconBg>
                <OtherIcon />
              </BottomIconBg>
            </BottomIcons>
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
                <TableBodyRow>
                  <TableData>Others </TableData>
                  <TableData>2500</TableData>
                  <TableData>{othersSum}</TableData>
                  <TableData>
                    <CellContainer>
                      <StatusBar progress={othersSum/2500 * 100} />
                      <span>
                        <OptionModal />
                      </span>
                    </CellContainer>
                  </TableData>
                </TableBodyRow>
                <TableBodyRow>
                  <TableData2 colSpan={4}>
                    <DescRow>
                      <Desc>Description:</Desc>
                      <TableDataSpan>
                        Includes items such as toiletries,skin care, cravings,
                        sanitary items etc.
                      </TableDataSpan>
                    </DescRow>
                  </TableData2>
                </TableBodyRow>
              </tbody>
            </Table>
          </TableSection>
        </TableWrapper2>
      </SectionBottom>
    </>
  );
};

export default BottomSection;
