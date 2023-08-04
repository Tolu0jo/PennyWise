import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkedAccountCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  margin-left: 2rem;
  border-radius: 8px;
  padding: 16px;
  width: auto;
  margin-right: 5rem;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.15px;
  text-align: left;
  color: #081C15;
  margin-left: 2.5rem;
`;

export const  TitleHead = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-right: 5rem;
 margin-top: 2rem;
 margin-left: 2rem;
 margin-bottom: 1rem;
`
export const  TitleHead1 = styled.h1`
 color:green;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 4px;
`;

export const Item = styled.div`
  position: relative;
  height: 180px;
  width: 300px;
  margin: 10px;
`;

export const LinkButton = styled(Link)`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 2px 4px;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
  color: #3182CE;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const NoActivityWrapper = styled.div`
  margin-top: 1rem;
`;

export const ModalOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
z-index: 100; /* Ensure the overlay appears above other elements */
display: flex;
align-items: center;
justify-content: center;
overflow-y: scroll;
`;