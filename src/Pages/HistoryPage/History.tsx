import { useEffect } from "react";
import { Sidebar, Navbar } from "../../Components";
import { useAuth } from "../../context/authContext";
import {
  GlobalStyle,
  HistoryPage,
  HistoryContentContainer,
  HistoryPageBody,
  HistoryContainerOuter,
  HistorySubHeading,
  HistoryText,
  HistoryCurrentDate,
  SelectYear,
  HeaderTitlesBackground,
  HeaderTitles,
  HistoryContainerInner,
  TableColumn,
  TableRow,
  OverBudget,
  WithinBudget,
  UnderBudget,
  Alink,
} from "./History.styled";
import { format } from "date-fns";

function History() {
  const month = format(new Date(), "MMMM");
  const currentDate = new Date().toLocaleDateString("en-GB");
  const {
  
    getExpense,
    expenditure,
    getWaitingExpenses,
    waitingExpenses,
    getAllIncome,allIncome,
    getSavings, savings

  } = useAuth();

  useEffect(()=>{
    getExpense()
    getWaitingExpenses()
    getAllIncome()
    getSavings()
  },[])

  const totalIncome = allIncome.reduce(
    (total: any, expense: { amount: any; }) => total + Number( expense.amount), 0
    )
 
  const totalSavings=savings.reduce(
    (total: any, expense: { amountSpent: any; }) => total + Number( expense.amountSpent), 0
    )

  const totalExpenses = expenditure.reduce(
    (total: any, expense: { amount: any; }) => total + Number(expense.amount), 0
    );
    const totalWaitingExpenses = waitingExpenses.reduce(
      (total: any, data: { amount: any; }) => total + Number(data.amount), 0
    )
    const totalExpenditure = (totalExpenses + totalWaitingExpenses)
    console.log(expenditure)
  return (
    <HistoryPage>
      <Sidebar />
      <HistoryContentContainer>
        <Navbar />
        <HistoryPageBody>
          <HistoryContainerOuter>
            <HistorySubHeading>
              <HistoryText>History</HistoryText>
              <HistoryCurrentDate>{currentDate}</HistoryCurrentDate>
            </HistorySubHeading>
            <SelectYear name="years" id="years">
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </SelectYear>

            <HeaderTitlesBackground>
              <HeaderTitles>
                <TableColumn>Month</TableColumn>
                <TableColumn>Total Income (#)</TableColumn>
                <TableColumn>Total expenditure</TableColumn>
                <TableColumn>Total Savings</TableColumn>
                <TableColumn>Remark</TableColumn>
              </HeaderTitles>
            </HeaderTitlesBackground>
            <HistoryContainerInner>
              <TableRow>
                <TableColumn>{month}</TableColumn>
                <TableColumn>{totalIncome.toLocaleString('en-US')}</TableColumn>
                <TableColumn>-{totalExpenditure.toLocaleString('en-US')}</TableColumn>
                <TableColumn>{totalSavings.toLocaleString('en-US')}</TableColumn>
                <TableColumn>
                 {(totalIncome > totalExpenditure ?<UnderBudget>Under budget</UnderBudget>:(totalIncome < totalExpenditure)?<OverBudget>Overbudget</OverBudget>:<WithinBudget>Within budget</WithinBudget>)}
                </TableColumn>
                <TableColumn>
                  <Alink href="/expenses">View Expenses</Alink>
                </TableColumn>
              </TableRow>
            
           
         
            </HistoryContainerInner>
          </HistoryContainerOuter>
        </HistoryPageBody>
      </HistoryContentContainer>
    </HistoryPage>
  );
}

export default History;
