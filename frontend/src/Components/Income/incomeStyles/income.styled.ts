import styled from "styled-components";
import Rectangle4 from '../../../assets/incomeImages/Rectangle4.png';
import { BiPlus } from "react-icons/bi";

export const IncomeContainer = styled.div`
  display: flex;
  padding: 1.7rem 8rem 0rem 2.2rem;

  
`;
export const IncomeContent = styled.div`
  flex-grow: 1;
  padding: 2rem 6rem 0rem 2rem 
  background-color: #f5f5f5;
`;
export const IncomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IncomeHead = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
  color: #2d6a4f;
  font-family: Inter;
  
`;
export const IncomeDate = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
  flex-direction: flex-end;
  color: #081c15;
`;

export const AccountDiv = styled.div`
  display: flex;
  background-color: #d8f3dc;
  padding: 1.5rem 2rem;
  gap: 1rem;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
`;

export const ImageDiv = styled.div`
  background-image: url(${Rectangle4});
  width: 12.77rem;
  height: 6.5rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding:0.5rem 0.5rem;
  color: white;
`;

export const Div = styled.div`
display:flex;
gap: 0.5rem;
justify-content:center;
align-items:center;
`


export const MonthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  height: 2.5rem;
  width: 100%;
`;

export const MonthTitle = styled.h2`
  font-size: 1.5rem;
  word-wrap: break-word;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const AddIncomeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #40916C';
  width: 12rem;
  height: 3rem;
  font-size: 1rem;
  color: #2d6a4f;
  border: 0.1rem solid #2d6a4f;
  padding-left: 0.5rem;
  padding-left: 0.5rem;
  border-radius: 0.5rem;
`;

export const PlusIcon = styled(BiPlus)`
  font-size: 20px;
  margin-right: 0.5rem;
`;

export const SelectOptions = styled.select`
  background-color: #1B4332;
  color: white;
  width: 8rem;
  height: 3rem;
  padding: 0 1rem;
  border: 1px solid;
  border-radius: 0.5rem;
`;

export const Option = styled.option`
  background-color: white;
  color: green;
`;


export const TableContainer = styled.div`
  background-color: #ffffff;
  color: #081c15;
  border-radius: 0.5rem;
  gap: 1.5rem;
`;

export const TableHeading = styled.div`
  background-color: #eaecf0;
  color: #081c15;
  display: flex;
  padding: 1rem 4rem;
  margin: 1.3rem 0px;
  gap: 1rem;
  border-radius: 0.5rem;
`;
export const TableInputs = styled.div`
  margin-bottom: 2rem;
  height:4.5rem;
  border-radius: 0.5rem;
  margin: 0px 2rem 1rem 2rem;
  color: #081c15;
  padding:0;
  box-shadow: 0px 10px 5px -5px rgba(0, 0, 0, 0.03);
`;

export const TableRow = styled.div`
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  justify-content: center;
  padding-top: 0.9rem;
`;

export const TableCell = styled.div`
  flex: 2;  
  font-size:0.9rem;

`;

export const EditButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  color: #081c15;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: red;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;

export const EditButton2= styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  color: lightgrey;
  cursor: pointer;
`;

export const DeleteButton2 = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #ffb3b3;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;
export const Paginate = styled.div`
margin-left:27rem;
z-index:1;
`
export const ButtonWrapper = styled.div`
gap:10rem;
`
