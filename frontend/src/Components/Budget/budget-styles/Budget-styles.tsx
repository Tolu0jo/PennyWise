import styled from "styled-components";
import {FiSmile} from "react-icons/fi";
import{LiaCarSideSolid,LiaUtensilsSolid}from "react-icons/lia";
import{TbVideoPlus}from "react-icons/tb";
import {BiFirstAid}from "react-icons/bi";
import {HiWifi}from "react-icons/hi";
import {HiOutlineHome}from "react-icons/hi";
import {MdOutlineAddCard} from "react-icons/md";
import {FaRegListAlt} from "react-icons/fa"
import {BsToggle2On}from "react-icons/bs";
import {BsToggle2Off} from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const PageContainer= styled.main`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    
  
`
export const PageWrapper = styled.div`
    background-color: #f5f5f5;
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const SectionTop  = styled.section`
    background-color: #f5f5f5; 
    padding: 2rem 6rem 0rem 3rem 
`


export const Aside = styled.div`
 display: flex;
 align-items: center;
 justify-content:space-between;

`

export const TopLeftH1 = styled.h2`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

color: #2D6A4F;
font-family:Inter;
`
export const TopRightH2 =styled.p`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
 flex-direction:flex-end;
 color: #081C15;
 
`

export const TopStep2=styled.div`
display: flex;
align-items: center;
justify-content:space-between;
margin-top:2rem;
`

export const OptionSelector=styled.div`
display: flex;
align-items: center;
`

export const SelectOptions=styled.select`
margin-left:0.5rem;
background-color: white;
color: green;
width: 6rem;
height: 2rem;
padding-left:1.5rem;
border: 1px solid ;
border-radius: 6px;
align-items: center;
`
export const Options= styled.option`
background-color: white;
color: green;
`
export const TableWrapper = styled.div`
background-color: white;
width:auto;
border-radius: 0.5rem;
margin-top:3rem;
padding:3rem 2rem 2rem 2rem ;
`
export const TableTitle = styled.div`
display: flex;
justify-content:space-between;
align-items: center;
padding-bottom: 0.5rem;
`
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const TableSection = styled.div`
display: flex;
marin-right: 1rem;
`

export const TableHeader = styled.th`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  padding-top: 2rem;
  text-align: left;
  color:#1B4332;
`;
export const WideColumn = styled(TableHeader)`
  width: 40%;
`;

export const NarrowColumn = styled(TableHeader)`
  width: 20%;
`;

export const TableData = styled.td`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
text-align: left;
font-family: 'Inter';
font-size: medium;
padding:1rem  0 1rem 0
display: flex;
align-items: center;
`;
export const TableData2 = styled.td`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  border-bottom: 1px solid lightgray;
  font-family: 'Inter';
  font-size:small;
  padding-bottom: 1rem;
  text-align: left;
`;
export const TableDataSpan = styled.span`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  margin-right: 1px;
  font-family: 'Inter';
  color:#081C15;
`;
export const TableBodyRow = styled.tr`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
 background-color: white; 
 
`;
export const IconBg= styled.div`
 width:48px;
 height:48px;
 background-color:#1B4332 ;
 border-radius:50%;
 margin-bottom:50px;
 `;
 export const BottomIconBg= styled.div`
 width:48px;
 height:48px;
 background-color:#1B4332 ;
 border-radius:50%;
 margin-bottom:10px;
 `;
 export const Icons = styled.div`
  padding-top: 6rem;
  margin-right: 0.5rem;
 `
 export const BottomIcons = styled.div`
 padding-top: 4rem;
 margin-right: 0.5rem;
`
 export const Icon = styled(FiSmile)`
  font-size: 24px;
  color: white;
  margin-top: 12px ;
  margin-left: 12px
`;
export const CarIcon = styled(LiaCarSideSolid)`
font-size: 24px;
color: white;
margin-top: 12px ;
margin-left: 12px;

`;
export const ToggleIconOn = styled(FontAwesomeIcon)`
font-size: 24px;
margin-top: 12px ;
margin-left: 12px;

`;
export const  VideoIcon = styled(TbVideoPlus)`
font-size: 24px;
color: white;
margin-top: 12px ;
margin-left: 12px
`;
export const  FoodIcon = styled(LiaUtensilsSolid)`
font-size: 24px;
color: white;
margin-top: 12px ;
margin-left: 12px
`;
export const  RentIcon = styled(BiFirstAid)`
font-size: 24px;
color: white;
margin-top: 12px ;
margin-left: 12px
`;
export const  InternetIcon = styled(HiWifi)`
font-size: 24px;
color: white;
margin-top: 12px ;
margin-left: 12px
`;
export const  ToggleOnIcon = styled(BsToggle2On)`
font-size: 30px;
color: green;
`;
export const  ToggleOffIcon = styled(BsToggle2Off)`
font-size: 30px;
color: gray;
`;
export const  HealthIcon = styled(HiOutlineHome)`
font-size: 24px;
color: white;
margin-top: 12px ;
margin-left: 12px
`;
export const  SavingIcon = styled(MdOutlineAddCard)`
font-size: 24px;
color: white;
margin-top: 12px ;
margin-left: 12px
`;

export const  OtherIcon = styled(FaRegListAlt)`
font-size: 24px;
color: white;
margin-top: 12px ;
margin-left: 12px
`;

export const SectionBottom  = styled.section`
    background-color: #f5f5f5; 
    padding: 0.1rem 6rem 2rem 3rem 
`
export const TableWrapper2 = styled.div`
background-color: white;
width:auto;
border-radius: 0.5rem;
margin-top:1rem;
padding:2rem 2rem 2rem 2rem ;
`
export const TableDataBottom = styled.td`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
  border-bottom: 1px solid lightgray;
  font-family: 'Inter';
  font-size:small;
  text-align: left;
  color:#081C15;
  font-size:1rem;
`;
export const Paid= styled.span`
color: #12B76A;
font-size: 16px;
margin-left: 10px;
font-weight: 400;
line-height:24px;
`
export const CellContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const OptionModalContainer = styled.div`
  margin-left: auto;
`;
export const Desc = styled.p`
font-size:i6px;
color:#52B788;
`
export const DescRow = styled.div`
display: flex;
align-items: center;
font-size:1rem;
`
