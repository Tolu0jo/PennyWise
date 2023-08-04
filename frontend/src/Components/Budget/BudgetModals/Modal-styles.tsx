import styled from 'styled-components';

export const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 1rem;
  width:384px;
  height:auto;
`;

///////Add Daily Needs /////////////
export const Modal = styled.div`
 background color: white;
 padding: 30px;
`
export const Header = styled.h3`
  margin-top:0.5rem;
  font-size:24px;
`
export const SubHeading = styled.p`
margin-top:1.0rem;
font-size:14px;

`
export const Input = styled.input`
 height:2rem;
 font-size:16px;
 padding: 10px;
 width:19rem;
 border: 1px solid lightgray;
 border-radius: 5px;
`
export const BigInput = styled.textarea`
height:6rem;
font-size:16px;
// padding-left: 10px;
padding-bottom: 10px;
width:100%;
margin-top:10px;
border-radius:5px;
border: 1px solid lightgray;
`
//////Planned Payments ////////
export const StyledSelect = styled.select`
height: 3rem;
font-size: 16px;
padding-left: 10px;
width: 100%;
border: 1px solid lightgray;
border-radius: 5px;
`;