import React, { useState } from "react";
import {
  StyleAnswer,
  StyleBodySectionFive,
  StyleFAQCard,
  StyleFAQContainer,
  StyleQuestion,
  Step1,
  ArrowIcon
} from "./styles/BodySection5.styled";
import { Paragraph } from "./styles/BodySection2.styled";
import { DivSection } from "./styles/BodySection1.styled";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface FAQCardProps {
    active: boolean;
    children: React.ReactNode;
  }
  
  const FAQCard: React.FC<FAQCardProps> = ({ active, children }) => (
    <StyleFAQCard active={active}>{children}</StyleFAQCard>
  );

export const BodySection5 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeContainer, setActiveContainer] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setActiveContainer(null);
    } else {
      setActiveIndex(index);
      setActiveContainer(index); 
    }
  };

  return (
    <StyleBodySectionFive>
      <DivSection c="#101828" p="4rem 0rem 0rem 0rem" m="">
        Frequently Asked Questions
      </DivSection>
      <Paragraph w="" h="" c="#828282">
        Here are some frequently asked questions from our customers and potential
        customers.
      </Paragraph>

      <StyleFAQContainer>
        <StyleFAQCard active={activeContainer === 0}>
          <StyleQuestion onClick={() => handleQuestionClick(0)}>
            <Step1>What is Pennywise?</Step1>
            {activeIndex === 0 ? (
              <ArrowIcon>
              <RiArrowDropUpLine />
              </ArrowIcon>
              
            ) : (
              <ArrowIcon>
              <RiArrowDropDownLine />
              </ArrowIcon>
              )}
          </StyleQuestion>
          <StyleAnswer
            style={{ display: activeIndex === 0 ? "block" : "none" }}
          >
            <p>
              Pennywise is a financial management platform that helps
              individuals and businesses track their income, expenses, savings,
              and budget effectively.
            </p>
          </StyleAnswer>
        </StyleFAQCard>

        <StyleFAQCard active={activeContainer === 1}>
          <StyleQuestion onClick={() => handleQuestionClick(1)}>
            <Step1>How do I register?</Step1>
            {activeIndex === 1 ? (
              <ArrowIcon>
              <RiArrowDropUpLine />
              </ArrowIcon>
              
            ) : (
              <ArrowIcon>
              <RiArrowDropDownLine />
              </ArrowIcon>
              )}
          </StyleQuestion>
          <StyleAnswer
            style={{ display: activeIndex === 1 ? "block" : "none" }}
          >
            <p>
              To register for Pennywise, visit our website and click on the
              "Register" button. Fill out the required information and follow
              the instructions to create your account.
            </p>
          </StyleAnswer>
        </StyleFAQCard>

        <StyleFAQCard active={activeContainer === 2}>
          <StyleQuestion onClick={() => handleQuestionClick(2)}>
            <Step1>Can Businesses use Pennywise or is it strictly for personal use?</Step1>
            {activeIndex === 2 ? (
             <ArrowIcon>
             <RiArrowDropUpLine />
             </ArrowIcon>
             
           ) : (
             <ArrowIcon>
             <RiArrowDropDownLine />
             </ArrowIcon>
             )}
          </StyleQuestion>
          <StyleAnswer
            style={{ display: activeIndex === 2 ? "block" : "none" }}
          >
            <p>
              Pennywise is suitable for both personal and business use. It
              offers features and tools that cater to the needs of individuals as well as businesses of all sizes.
            </p>
          </StyleAnswer>
        </StyleFAQCard>

        <StyleFAQCard active={activeContainer === 3}>
          <StyleQuestion onClick={() => handleQuestionClick(3)}>
            <Step1>What is the major challenge of Pennywise?</Step1>
            {activeIndex === 3 ? (
             <ArrowIcon>
             <RiArrowDropUpLine />
             </ArrowIcon>
             
           ) : (
             <ArrowIcon>
             <RiArrowDropDownLine />
             </ArrowIcon>
             )}
          </StyleQuestion>
          <StyleAnswer
            style={{ display: activeIndex === 3 ? "block" : "none" }}
          >
            <p>
              Pennywise is suitable for both personal and business use. It
              offers features and tools that cater to the needs of individuals
              as well as businesses of all sizes.
            </p>
          </StyleAnswer>
        </StyleFAQCard>

        <StyleFAQCard active={activeContainer === 4}>
          <StyleQuestion onClick={() => handleQuestionClick(4)}>
            <Step1>Are there any hidden charges?</Step1>
            {activeIndex === 4 ? (
              <ArrowIcon>
              <RiArrowDropUpLine />
              </ArrowIcon>
              
            ) : (
              <ArrowIcon>
              <RiArrowDropDownLine />
              </ArrowIcon>
              )}
          </StyleQuestion>
          <StyleAnswer
            style={{ display: activeIndex === 4 ? "block" : "none" }}
          >
            <p>
              Pennywise is suitable for both personal and business use. It
              offers features and tools that cater to the needs of individuals
              as well as businesses of all sizes.
            </p>
          </StyleAnswer>
        </StyleFAQCard>
      </StyleFAQContainer>
    </StyleBodySectionFive>
  );
};
