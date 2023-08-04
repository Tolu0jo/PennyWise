import styled from 'styled-components'
import {BiEdit} from "react-icons/bi"
import{MdDeleteOutline} from "react-icons/md"

export const ThreeDot =styled.div`
background: white;

display:flex;
cursor: pointer;
`
export const Modal =styled.div`
  position: absolute;
  width: 74px;
  height: 74px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius:8px;
  padding: 10px;
 cursor: pointer;
`
export const Edit =styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:1rem;
`

export const Span = styled.span`
margin-left: 0.3rem;
`
export const DeleteSpan = styled.span`
 margin-left: 0.3rem;
 color: red;

`
export const EditIcon = styled(BiEdit)`
font-size: 30px;
`
export const DeleteIcon = styled(MdDeleteOutline)`
font-size: 30px;
color: red;
`


