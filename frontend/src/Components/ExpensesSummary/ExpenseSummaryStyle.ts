import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  background-color: #f9fafb;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 997px;

  h3 {
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0.25px;
    text-align: left;
    color: #2d6a4f;
  }
  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: #081c15;
    margin-top: 37px;
  }
`;

export const ExpensesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 997px;

  div:nth-child(2) {
    display: flex;
    align-items: right;
  }
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: pink;

  svg {
    margin-right: 5px;
  }
  .link {
    text-decoration: none;
    color:#000;
  }
`;

export const SelectYear = styled.select`
  border-radius: 8px;
  padding: 8px;
  background-color: #f9fafb;
`;

export const Ex = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0px;
  text-align: left;
  color: #081c15;
  margin-left: 4px;
`;

export const ExpenseTable = styled.table`
  border-spacing: 0 10px;
  width: 991px;
  margin-top: 2rem;

  td {
    padding: 16px;
    background-color: #fff;

  }

  td:first-child {
    border-radius: 8px 0 0 8px;
  }

  td:last-child {
    border-radius: 0 8px 8px 0;
  }

  th {
    background-color: #eaecf0;
    padding: 16px;
    gap: 32px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: #081c15;
    border-collapse: separate;
    border-spacing: 0 5px;
  
  }

  th:first-child {
    border-radius: 8px 0 0 8px;
  }

  th:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

export const Vw = styled.td`
  color: blue;
  cursor: pointer;
  .link {
    color: blue;
    text-decoration: none;
  }
`;
export const Red = styled.td`
  color: red;
`;

export const TableRow = styled.tr`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;