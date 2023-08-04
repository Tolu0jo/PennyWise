import React from "react";
import { Card, Details, SectionFour, Step, StyleBodySectionFour, Title } from "./styles/BodySection4.styled";
import { DivSection } from "./styles/BodySection1.styled";
import { Paragraph1 } from "./styles/BodySection3.styled";

export const BodySection4 = () => {
  return (
    <StyleBodySectionFour>
        <DivSection
        c="#101828"
        p="4rem 0rem 0rem 0rem"
        m="">
          How To Set Up </DivSection>
          <Paragraph1 w="" h="" c="#828282">
            We don't like to brag, but we don't mind letting our customers do it
            for us.
          </Paragraph1>
        
        <SectionFour m="" p="" w='60.5rem' h='' dp='flex' jc='space-between'>
          <Card> 
              <Step>Step One</Step>
              <Title>Register</Title>
              <Details>and link bank account/s</Details>   
            <Paragraph1 w="" h="" c="#828282">
              We provide you with a comprehensive set of tools to help
              administrators, educators, and students manage the exam process,
              including creating and
            </Paragraph1>
          </Card>

          <Card> 
              <Step>Step Two</Step>
              <Title>Set Up</Title>
              <Details>Budget and Saving targets</Details>   
            <Paragraph1 w="" h="" c="#828282">
              We provide you with a comprehensive set of tools to help
              administrators, educators, and students manage the exam process,
              including creating and
            </Paragraph1>
          </Card>

          <Card> 
              <Step>Step Three</Step>
              <Title>Enjoy</Title>
              <Details>the benefits of pennywise app</Details>   
            <Paragraph1 w="" h="" c="#828282">
              We provide you with a comprehensive set of tools to help
              administrators, educators, and students manage the exam process,
              including creating and
            </Paragraph1>
          </Card>
        </SectionFour>
    </StyleBodySectionFour>
  );
};
