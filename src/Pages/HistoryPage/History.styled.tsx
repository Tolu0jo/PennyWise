import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
`;

export const HistoryPage = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
  margin: 0;
  overflow: hidden;
`;

export const HistoryContentContainer = styled.div`
  width: 100%;
`;

export const HistoryPageBody = styled.div`
  width: 95%;
  height: 99vh;
  margin: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #f2f4f7;
  padding-bottom: 10px;
  // border: 2px solid red;
`;

export const HistoryContainerOuter = styled.div`
  width: 90%;
  height: 90%;
  overflow: hidden;
  margin-left: 30px;
  color: black;
  background-color: #f2f4f7;
  //  border: 2px solid green; 
  margin-right: 90px;
`;

export const HistorySubHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 2px solid yellow;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const HistoryText = styled.h2`
  color: #2d6a4f;
  font-family: "Inter", sans-serif;
  font-size: 30px;
`;

export const HistoryCurrentDate = styled.span`
  font-weight: 300;
  font-size: small;
  margin-right: 90px;
`;

export const SelectYear = styled.select`
  padding: 10px;
  color: green;
  background-color: #f2f4f7;
  align-items: center;
  border: 1px solid #2d6a4f;
  outline: none;
  border-radius: 10px;
`;

export const HeaderTitlesBackground = styled.div`
  background-color: #eaecf0;
  border-radius: 10px;
`;

export const HeaderTitles = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  padding: 15px 0px 15px 0px;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 20px;
  margin-bottom: 5px;
  font-size: small;
  border-radius: 10px;
  font-weight: 600;
`;



export const TableColumn = styled.div`
  display: flex;
  align-items: center;
//   border: 1px solid #98a2b3;
  margin-left: 20px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  padding: 13px 10px 13px 0px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 5px;
  border: 1px solid #98a2b3;
  font-size: small;
  border-radius: 10px;
  font-weight: 300;
`;

export const HistoryContainerInner = styled.div`
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
  padding-top: 5px;
  padding-bottom: 15px;
  border-radius: 10px;
`;

export const OverBudget = styled.p`
  color: #f04438;
  font-weight: 400;
`;

export const WithinBudget = styled.p`
  color: #fac515;
  font-weight: 400;
`;

export const UnderBudget = styled.p`
  color: #12b76a;
  font-weight: 400;
`;

export const Alink = styled.a`
  text-decoration: none;
  color: #004fff;
`;