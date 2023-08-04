import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import React, {ReactNode } from "react"

export const ThreeDot = styled.div`

  display: flex;
  cursor: pointer;
  margin-left: 20px;
`;

export const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-left:5px;
`;

export const Span = styled.span`
  margin-left: 0.3rem;
`;
export const DeleteSpan = styled.span`
  margin-left: 0.3rem;
  color: red;
`;
export const EditIcon = styled(BiEdit)`
  font-size: 20px;
  margin-right: 5px;
`;
export const DeleteIcon = styled(MdDeleteOutline)`
  font-size: 20px;
  color: red;
  margin-left: 20px;
`;

export const EditOptionModalContainer = styled.div`
  margin-left: auto;
`;