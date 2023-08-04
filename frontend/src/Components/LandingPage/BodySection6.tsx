import React from "react";
import { Input, StyleBodySectionSix } from "./styles/BodySection6.styled";
import { DivSection, Span } from "./styles/BodySection1.styled";
import Button from "../Button/button";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { HeadSec } from "./styles/BodySection7.styled";
import { Paragraph1 } from "./styles/BodySection3.styled";
import { SectionFive } from "./styles/BodySection6.styled";
import { ListDiv1 } from "./styles/BodySection6.styled";

export const    BodySection6 = () => {
  function handleClick(): void {
    console.log("Button");
  }

  return (
    <StyleBodySectionSix>
      <DivSection c="#101828" p="2rem 0rem 1rem 0rem" m="">
        Contact us
      </DivSection>

      <SectionFive
        m=""
        p=""
        w=""
        h=""
        dp="flex"
        jc="space-between"
      >
        <SectionFive m="" p="0rem 2rem" w="27.44rem" h="auto" dp="" jc="">
          <Paragraph1 w="" h="" c="#828282">
            We know you have lots of questions. Don't lose your time figuring
            everything out by yourself. Schedule a 1 on 1 meeting and have all
            your questions answered.
          </Paragraph1>

          <SectionFive m="" p="" w="" h="" dp="" jc="">
            <ListDiv1>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Listen to you and your goals
                    </Span> 
                </ListDiv1>
                <ListDiv1>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Answer your questions
                    </Span> 
                </ListDiv1>
            <ListDiv1>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Evaluate your needs
                    </Span> 
                </ListDiv1>
                <ListDiv1>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Suggest your plan
                    </Span> 
                </ListDiv1>
          </SectionFive>
        </SectionFive>
        <SectionFive m="" p="0rem 2rem" w="auto" h="auto" dp="" jc="">
          
            <HeadSec>Let's Schedule a meeting</HeadSec>
            <Paragraph1 w="" h="" c="#828282">
              Fill in the form below and we will get back to you within 24 hours
            </Paragraph1>

            <SectionFive m="" p="" w="auto" h="auto" dp="" jc="">
              <Paragraph1 w="" h="" c="#828282">
                Your Full Name
              </Paragraph1>
              
              <ListDiv1>
              <Input placeholder="Your Full name" className="input" />
              </ListDiv1>
              <ListDiv1>
              <Input placeholder="Email" className="input" />
              </ListDiv1>
              <ListDiv1>
              <Input placeholder="Phone Number" className="input" />
              </ListDiv1>

              <ListDiv1>
              <Button
                onClick={handleClick}
                margin=""
                width="5rem"
                height="2.375rem"
                text="Send"
                border="1px solid"
                backgroundColor="#2D6A4F"
              />
              </ListDiv1>
            </SectionFive>
        
        </SectionFive>
      </SectionFive>
    </StyleBodySectionSix>
  );
};
