// import LinkAcctCard from "../../assets/LinkedAcctCard.png";
import { Chart } from "./Chart";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  LinkedAccountCardContainer,
  Title,
  Content,
  Item,
  LinkButton,
  Image,
  IconSide,
  RoleIconTop,
  NoActivityWrapper,
} from "./LinkedAcctStyle";
import { NoActivityContainer, NoActivityContent } from "./NoActivityStyle";
import "./Card.css";
import zenith from "./images/zenith.png";
import standard from "./images/standard.png";
import { FaEye, FaEyeSlash, FaFilter } from "react-icons/fa";
import { useAuth } from "../../../context/authContext";
const LinkedAccountCardValue = () => {
  const element1 = [[100, 50, 30], "Salary", "Bussiness", "Others"];
  const element2 = [[55, 35, 10], "Planed Payments", "Daily Need", "Others"];
  const element3 = [
    [30, 25, 20, 15],
    "Investment",
    "Car",
    "Vacation",
    "Emergency",
  ];


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
    <ScroLL>
        <NoActivityContainer style={{ height:"100%",paddingBottom:"2rem"}}>
          <NoActivityContent
            style={{
              padding: "10px",
              width: "98%",
              height: "auto",
            }}
          >
            <Frames>
              <h2>
              August  2023 <SpanText>Summary </SpanText>
              </h2>
        
            </Frames>
            <Range>
              <RangeDiv>
                <ProgressBar>
                  <Progress></Progress>
                </ProgressBar>
                <p>
                  You have stayed within your set budget range.
                  <span>Good job.</span>{" "}
                </p>
              </RangeDiv>
              <RangeDiv>
                <ProgressBar>
                  <Progress style={{ background: "red" }}></Progress>
                </ProgressBar>
                <p>
                  You haven’t met your savings target. Save more.
                  <span style={{ color: "red" }}>Good job.</span>
                </p>
              </RangeDiv>
            </Range>
            <Charts>
              <ChartDiv>
                <Income>
                  <p>Income</p>
                  <p>
                    <Strike>N</Strike> {totalIncome.toLocaleString('en-US')}
                  </p>
                </Income>
                <Chart
                  data={{
                    labels: [],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: element1[0],
                        backgroundColor: ["#3538CD", "#F04438", "#FAC515"],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  pie={[{ Bussiness: 30, Salary: 60, Others: 10 }]}
                />
                <Div>
                  <BoxChart style={{ background: "#3538CD" }}></BoxChart>
                  <p>
                    {element1[1]} {element1[0][0]}%
                  </p>
                </Div>
                <Div>
                  <BoxChart style={{ background: "#F04438" }}></BoxChart>
                  <p>
                    {element1[2]} {element1[0][1]}%
                  </p>
                </Div>
                <Div>
                  <BoxChart style={{ background: "#FAC515" }}></BoxChart>
                  <p>
                    {element1[3]} {element1[0][2]}%
                  </p>
                </Div>
              </ChartDiv>
              <ChartDiv>
                <Income>
                  <p>Expenditure</p>
                  <p>
                    <Strike>N</Strike> {totalExpenditure.toLocaleString('en-US')}
                  </p>
                </Income>
                <Chart
                  data={{
                    labels: [],
                    datasets: [
                      {
                        label:"",
                        data: element2[0],
                        backgroundColor: ["#3538CD", "#F04438", "#FAC515"],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  pie={[{ Bussiness: 30, Salary: 60, Others: 10 }]}
                />
                <Div>
                  <BoxChart style={{ background: "#3538CD" }}></BoxChart>
                  <p>
                    {element2[1]} {element2[0][0]}%
                  </p>
                </Div>
                <Div>
                  <BoxChart style={{ background: "#F04438" }}></BoxChart>
                  <p>
                    {element2[2]} {element2[0][1]}%
                  </p>
                </Div>
                <Div>
                  <BoxChart style={{ background: "#FAC515" }}></BoxChart>
                  <p>
                    {element2[3]} {element2[0][2]}%
                  </p>
                </Div>
              </ChartDiv>
              <ChartDiv>
                <Income>
                  <p>Savings</p>
                  <p>
                    <Strike>N</Strike> {totalSavings.toLocaleString('en-US')}
                  </p>
                </Income>
                <Chart
                  data={{
                    labels: [],
                    datasets: [
                      {
                        label: "",
                        data: element3[0],
                        backgroundColor: [
                          "red",
                          "#22CCEE",
                          "#FAC515",
                          "#3538CD",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(54, 162, 235, 1)",
                          "rgba(255, 206, 86, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  pie={[{ Bussiness: 30, Salary: 60, Others: 10 }]}
                />
                <Div>
                  <BoxChart style={{ background: "#3538CD" }}></BoxChart>
                  <p>
                    {element3[1]} {element3[0][0]}%
                  </p>
                </Div>
                <Div>
                  <BoxChart style={{ background: "#F04438" }}></BoxChart>
                  <p>
                    {element3[2]} {element3[0][1]}%
                  </p>
                </Div>
                <Div>
                  <BoxChart style={{ background: "#FAC515" }}></BoxChart>
                  <p>
                    {element3[3]} {element3[0][2]}%
                  </p>
                </Div>
                <Div>
                  <BoxChart style={{ background: "#22CCEE" }}></BoxChart>
                  <p>
                    {element3[4]} {element3[0][3]}%
                  </p>
                </Div>
              </ChartDiv>
            </Charts>
            {/* ANOTHER DIV  SPACE BETWEEN */}
          </NoActivityContent>
        </NoActivityContainer>
   
    </ScroLL>
  );
};

export default LinkedAccountCardValue;
export const ScroLL = styled.div`
  width: 100%;
  height: 95%;
  margin-top:2rem;
  overflow: hidden;
  overflow-y: scroll;
  border-radius:2rem;
`;
const ImageDiv = styled.img`
  width: 30px;
  height: 30px;
`;
const Bank = styled.p`
  color: #fff;
  font-size: 14px;
  padding-left: 10px;
`;

const Unlink = styled.div`
  display: flex;
  width: 70px;
  height: 32px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--green-2, #40916c);
  background: var(--green-2, #40916c);
  mix-blend-mode: luminosity;
  color: white;
`;

const Center = styled.p`
  color: white;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Balance = styled.div`
  width: 85%;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
`;

const Strike = styled.span`
  text-decoration: line-through;
`;

const Spamm = styled.p`
  color: red;
`;

const Frames = styled.div`
  width: 100%;
  height: auth;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SpanText = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.15px;
`;

const Botton = styled.button`
  padding: 10px;
  border-radius: 10px;
  background: #f8f8f8;
  border: 1px solid #ccc;
`;

const Range = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-right:3rem;
`;

const RangeDiv = styled.div`
  width: 40%;
  height: 100px;
  display: flex;


  flex-direction: column;
  justify-content: center;
  p {
    font-size: 12px;
    text-align: left;
    padding-top: 5px;
  }
  span {
    color: #12b76a;
    padding-left: 10px;
  }
`;
const Charts = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;


  background: var(--light-green-3, #d8f3dc);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ChartDiv = styled.div`
  width: 30%;
  height: 440px;
  padding: 10px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Div = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  align-items: center;

  p {
    font-size: 12px;
    color: #222;
  }
`;

const BoxChart = styled.div`
  width: 24px;
  height: 24px;
  background: pink;
  margin-right: 20px;
`;

const Income = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  width: 370px;
  height: 10px;
  border-radius: 10px;
  background: #d8f3dc;
  div {
    width: 70%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Progress = styled.div`
  background: #12b76a;
`;

const RoleText = styled.div`
  width: 90%;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  color: #222;
`;
