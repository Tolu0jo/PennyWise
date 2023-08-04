import styled from 'styled-components';
import { BiPlus } from 'react-icons/bi';


export const ModalLayout = styled.div`
  position: fixed;
  z-index:2;
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
  width:350px;
  height:380px;
`;

///////Add Cash Income /////////////
export const Modal = styled.div`
 background color: white;
 padding: 2rem;
`;
export const Header = styled.h3`
  margin-top:0.5rem;
  font-size:24px;
`;
export const SubHeading = styled.p`
margin-top:1.0rem;
font-size:14px;
`;
export const Input = styled.input`
 height:2rem;
 font-size:16px;
 padding: 10px;
 width:16rem;
 border: 1px solid lightgray;
 border-radius: 5px;
`
export const InputContainer = styled.div`
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
  top: 55%;
  right: 10px;
  transform: translateY(-50%);
  color: #98a2b3;
  font-size: 15px;

`;

export const Time = styled.div`
   width: 100%;
`