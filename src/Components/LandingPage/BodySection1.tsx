import React from "react";
import {
  ImgContainer,
  ParagraphI,
  StyleBodySectionOne,
} from "./styles/BodySection1.styled";
import { Img } from "./styles/BodySection1.styled";
import { SectionOne, DivSection } from "./styles/BodySection1.styled";
import Button from "../Button/button";
import { useNavigate } from 'react-router-dom';

export const BodySection1 = () => {
  const navigate = useNavigate();
  function handleClick(): void {
    navigate("/register");
  }

  return (
    <StyleBodySectionOne>
      <SectionOne
        m="0rem  2rem 2rem 0rem"
        p="0rem  0rem 2rem 0rem"
        w=""
        h=""
        dp=""
        jc="space-between"
      >
        <DivSection c="#101828" p="0rem 0rem 0rem 0rem" m="">
          Financial freedom starts when you
          <span> Track expenses</span>,<span> Budget</span>, and
          <span> Save</span>, to make every penny count.
        </DivSection>
        <ParagraphI w="" h="" c="#4F4F4F">
          We are here to help you manage your finances more effectively and make
          informed decisions about your spending and savings habits.
        </ParagraphI>

        <Button
          onClick={handleClick}
          margin=""
          width="11.25rem"
          height="2.875rem"
          text="Register Here"
        />
      </SectionOne>
      <ImgContainer>
        <Img
          w="32.81rem"
          h="31.25rem"
          src="https://res.cloudinary.com/dgny9bffu/image/upload/v1687635167/pennyimg0_e7lgvq.png"
          alt=""
        />
      </ImgContainer>
    </StyleBodySectionOne>
  );
};
