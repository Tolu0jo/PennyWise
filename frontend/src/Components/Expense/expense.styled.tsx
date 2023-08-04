import styled from "styled-components";

export const TableContainer = styled.div`
  flex-grow: 1;
  padding: 1.25rem;
`;

export const TopSection = styled.div`
  flex-grow: 1;
  padding: 1.25rem;
`;

export const TableHead1 = styled.div`
  display: flex;
  
`;
export const TableHead2= styled.div`
  margin-left: 1rem

`;
export const TableHead3= styled.div`
  display: flex;
  margin-left: 1rem
`;
export const TableHead4= styled.div`
margin-left: 1rem
`;
export const TableHead5= styled.div`
  display: flex;

  margin-left: 1rem
`;

  


export const AddDiv = styled.div`
  display: flex;
  cursor: pointer;
`;

export const AddIcon = styled.img``;

export const TableRow = styled.tr`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 7rem 10em 14rem 10rem 18rem 8rem;
  border-radius: 1.5rem;
  margin-top: 1rem;
  justify-content: space-between;
  text-align: left;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
`;

export const TableCell = styled.td<{ isFirstCell?: boolean }>`
  padding: 0.5rem;
  border-left: ${({ isFirstCell }) =>
    isFirstCell ? "none" : "0.1rem solid #ddd"};
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
`;

export const TableCellWrapper = styled.div`
  text-align: left;
  border: none;
`;

export const Select = styled.select`
  padding: 1rem;
  border: none;
  option {
    background-color: white;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  flex: flex-start;
  border: none;
`;

export const SubmitButton = styled.button`
  color: var(--basic-white, #fff);
  font-size: 0.8rem;
  display: flex;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  height: 1rem;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: var(--green-1, #2d6a4f);
`;

export const THead = styled.th`

display: grid;
grid-template-columns: 7rem 10em 14rem 10rem 18rem 8rem;
padding-bottom: 0.5rem;
justify-content: space-between;
text-align: left;
border-bottom: 1px solid #ddd;
  
`;

export const BottomSection = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-color: #fff;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
`;

export const SearchIcon = styled.img`
  height: 2.60rem;
  border: none;
  cursor: pointer;
`;
export const TableHeadRow = styled.tr`

`;

export const TableBodyRow = styled.tr`

`;
export const TableHeadColumn = styled.tr`
paddding: 0.5rem;
display: flex;
align-items: center;
`;
export const DateTableHeadRow = styled(TableHeadRow)`
  color: var(--green-1, #2d6a4f);
  font-size: 1rem;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: 0.00938rem;
`;

export const AddTableHeadRow = styled(TableHeadRow)`
  color: var(--primary-500, #004fff);
  font-size: 0.875rem;
  font-family: Heebo;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`;

export const RedTableHeadColumn = styled(TableHeadColumn)`
  color: red;
`;

export const WaitingTableHeadColumn = styled(TableHeadColumn)`
  color: var(--yellow-400, #fac515);
`;

export const ConfirmedTableHeadColumn = styled(TableHeadColumn)`
  color: var(--main-primary-color, #34a853);
`;

export const Container = styled.div`
  display: flex;
  background: var(--grey-50, #F9FAFB);
  
`;

export const Content = styled.div`
flex-grow: 1;
padding: 1.25rem;
background-color: #f6f6f6;
`;
export const Header = styled.div`
display: flex;
align-items: center;
`;
export const Title = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1.25rem;
`;

export const DateArea = styled.div`
    display: flex;
    flex-direction: space-between;
`;
export const ExpenseTable = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: 1.25rem;
    margin-right: 5rem;
    padding: 0.5rem;
    border-bottom: 1px solid #ddd;

`;
export const Heading = styled.h1`
    color: var(--green-1, #2D6A4F);;
    font-size: 1.5rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    margin-right: auto;
`;
export const VerifyButton = styled.button`
    display: flex;
    height: 2.75rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    color: var(--green-1, #2D6A4F);
    border: 1px solid var(--green-1, #2D6A4F);
    cursor: pointer;
`; 
export const HeadingTwo = styled.h2`
    color: var(--dark-green, #081C15);
    font-size: 1.5rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;

`
export const ExpenseTableTwo = styled.table`
    border-radius: 0.5rem;
    background: var(--green-1, #2D6A4F);
    padding: 1rem 0.75rem;
    color: #fff;
    display: grid;
    grid-template-columns: 1fr 2.0fr 1.5fr 1fr 1fr 0.3fr; 
    margin-top: 1.25rem;
    padding-left: 0.4rem;
    padding: 0.5rem;
    margin-bottom: 2rem;
`;
export const BodyColumn = styled.div`
    border-right: 1px solid #ddd;
    padding: 0.4rem;

`;
export const TableHeadBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #ddd;
    padding-bottom: 0.5rem;
`;


export const TableHeadTwo = styled.table`

`;
export const ParagraphDate = styled.p`

`;
export const ParagraphComfirm = styled.p`
    display: flex;
    color: var(--green-1, #2D6A4F);
    font-size: 1rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    letter-spacing: 0.00938rem;
`;
export const ParagraphSearch = styled.p`
    color: var(--gray-900, #212121);
    font-size: 0.875rem;
    font-family: ;
    font-style: normal;
    font-weight: 500;
`;
export const TableColumn = styled.div`

`;
export const BottomColumn = styled.div`
    border-radius: 0.5rem;
    padding: 1rem  1rem ;
    display: grid;
    grid-template-columns: 1fr 2.0fr 1.5fr 1fr 1fr 0.3fr; 
    margin-top: 1rem;
    padding: 0.5rem;
    margin-bottom: 2rem;
    align-items: flex-start;
    
`;
export const IconContainer = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    padding-left: 0.4rem;
    gap: 1.5rem;
    `;
export const DeleteIcon=styled.div`
color: red;

`
export const DeleteIcon2=styled.div`
color: #ffb3b3;
`
    export const IconContainer2 = styled.div`
    display: flex;
    position: relative;
    cursor: pointer;
    padding-left: 0.4rem;
    color: lightgrey;
    gap: 1.5rem;
    `;
    export const TotalDiv = styled.div`
      display: flex;
      padding: 0rem 1.5rem;
      justify-content: flex-end;
      gap: 0.5rem;
    `;
    export const TotalRow = styled.tr`
      color: #081C15;
      font-family: Inter;
      font-weigth: 600;
      line-heigh: 1.4rem;
      letter-spacing: 0.00938rem;
    `;
    export const TotalAmount = styled.span`
      color: #F04438;
    `;
