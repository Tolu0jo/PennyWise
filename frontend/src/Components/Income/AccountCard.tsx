import React from 'react'
import { ImageDiv , Div} from './incomeStyles/income.styled'
import Cash from "../../assets/incomeImages/cash.svg"
import {PiBankBold} from "react-icons/pi";

interface Props{
    cash?: string
    amount?: string
    bankName?: string
}
const AccountCard = ({cash,amount,bankName}:Props) => {
    return (
      <> 
      {cash ? (
          <ImageDiv>
            <Div>
              <img src={Cash} alt="" />
              <p>{cash}</p>
            </Div>
            <h2>{amount}</h2>
          </ImageDiv>
        ) : (
      
          <ImageDiv>
            <Div>
              <PiBankBold size={25}/>
              <p>{bankName}</p>   
            </Div>
           
            <h2>{amount}</h2>
          </ImageDiv>
       
        )}
      </>
    );
  };
  
  export default AccountCard;
  