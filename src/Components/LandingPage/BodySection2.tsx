import React from "react";
import {
  StyleBodySectionTwo,
  Head5,
  Icon,
  Paragraph,
  SectionTwo,
  SectionTwob,
} from "./styles/BodySection2.styled";
import { DivSection } from "./styles/BodySection1.styled";
import { BsShieldCheck, BsBuildings } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";

export const BodySection2 = () => {
  return (
    <StyleBodySectionTwo>
        <DivSection
        c="#101828"
        p="4rem 0rem 0rem 0rem"
        m="">
        What We Offer
      </DivSection>
      <SectionTwo m="2rem 5rem" p="" w="" h="" dp="flex" jc="space-between">
      <SectionTwob
        >
          <Icon>
            <BsShieldCheck size={22} color="#081C15" />
          </Icon>
          <SectionTwo m="" p="" w="" h="" dp="" jc="">
            <Head5>Financial Stability</Head5>
            <Paragraph w="16.19rem" h="6.5rem" c="#4F4F4F">
              We are here to help you manage your finances more effectively and
              make informed decisions.
            </Paragraph>
          </SectionTwo>
          </SectionTwob>

        <SectionTwob
        >
          <Icon>
            <BsBuildings size={22} color="#081C15" />
          </Icon>
          <SectionTwo m="" p="" w="16.19rem" h="8.125rem" dp="" jc="">
            <Head5>Smart Budgeting</Head5>
            <Paragraph w="16.19rem" h="6.5rem" c="#4F4F4F">
              We are here to help you manage your finances more effectively and
              make informed decisions.
            </Paragraph>
          </SectionTwo>
        </SectionTwob>

        <SectionTwob
        >
          <Icon>
            <MdOutlineAnalytics size={22} color="#4F4F4F" />
          </Icon>

          <SectionTwo m="" p="" w="16.19rem" h="8.125rem" dp="" jc="">
            <Head5>Insightful analytics</Head5>
            <Paragraph w="16.19rem" h="6.5rem" c="#4F4F4F">
              We are here to help you manage your finances more effectively and
              make informed decisions.
            </Paragraph>
          </SectionTwo>
        </SectionTwob>
      </SectionTwo>
    </StyleBodySectionTwo>
  );
};
