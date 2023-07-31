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
} from "./budget-styles/Budget-styles";
import OptionModal from "./BudgetModals/OptionModal";
import Button from "../Button/button";
import StatusBar from "./StatusBar";
import { useState,useEffect } from "react";
import AddDailyNeeds from "./BudgetModals/AddDailyNeeds";
import { format } from "date-fns";
import { useAuth } from "../../context/authContext";

const TopSection = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const currentDate = Date.now();
  const formattedDate = format(currentDate, "dd/MM/yyyy");

  const monthAndYear = format(new Date(), "MMMM, yyyy");

  
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
    
    const personalCareSum =categorySums["Personal Care"]
    const entertainmentSum =categorySums["Entertainment"];
    const transportationSum =categorySums["Transportation"];
    const foodSum =categorySums["Food"];
  
    


  return (

    <>
      <div>
        <AddDailyNeeds
          isOpen={ModalOpen}
          onClose={handleCloseModal}
          heading={"Add"}
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
            <Icons>
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
            </Icons>

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
                  <TableData>Personal Care </TableData>
                  <TableData>500</TableData>
                  <TableData>{personalCareSum}</TableData>
                  <TableData>
                    <CellContainer>
                      <StatusBar progress={(personalCareSum/500 *100)} />
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
                <TableBodyRow>
                  <TableData>Transportation </TableData>
                  <TableData>800</TableData>
                  <TableData>{transportationSum}</TableData>
                  <TableData>
                    <CellContainer>
                      <StatusBar progress={((transportationSum/800 *100))} />
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
                <TableBodyRow>
                  <TableData>Entertainment </TableData>
                  <TableData>2000</TableData>
                  <TableData>{entertainmentSum}</TableData>
                  <TableData>
                    <CellContainer>
                      <StatusBar progress={entertainmentSum/2000 * 100} />
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
                <TableBodyRow>
                  <TableData>Food </TableData>
                  <TableData>400</TableData>
                  <TableData>{foodSum}</TableData>
                  <TableData>
                    <CellContainer>
                      <StatusBar progress={foodSum/400 *100} />
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
        </TableWrapper>
      </SectionTop>
    </>
  );
};

export default TopSection;


