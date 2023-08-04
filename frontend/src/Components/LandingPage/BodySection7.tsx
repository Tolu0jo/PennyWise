import React from "react";
import { Head1, StyleBodySectionSeven } from "./styles/BodySection7.styled";
import Button from "../Button/button";
import { Paragraph1 } from "./styles/BodySection3.styled";
import { useNavigate } from 'react-router-dom';

export const BodySection7 = () => {
  const navigate = useNavigate();

function handleClick(): void {
  navigate('/register');
}

  return (
    <StyleBodySectionSeven>
       <Head1>
        Smart budgeting for a better tomorrow.
       </Head1>
        <Paragraph1 w='' h='' c='#fff'>
            Make better money choices to attain financial freedom with Pennywise.
        </Paragraph1>

        <Button onClick={handleClick} margin='2rem 0rem' width='8.31rem' height='2.75rem'text="Sign Up Now"
        border="1px solid"
        backgroundColor="#2D6A4F"
        />
        
               
    </StyleBodySectionSeven>
  );
};
