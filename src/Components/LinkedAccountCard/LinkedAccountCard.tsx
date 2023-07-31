
import LinkAcctCard from "../../assets/LinkedAcctCard.png";
import NoActivity from "./NoActivity";
import {useState, useEffect} from "react"
import axios from "axios"
import {
  LinkedAccountCardContainer,
  Title,
  TitleHead,
  TitleHead1,
  Content,
  Item,
  LinkButton,
  Image,
  NoActivityWrapper,
} from "./LinkedAcctStyle";
import {format} from "date-fns"
import AddAccountModal from "./AddAccountModal";
const currentDate = Date.now();
const formattedDate = format(currentDate, 'dd/MM/yyyy');
const LinkedAccountCard = () => {
 

  return (
    <>
    <TitleHead>
    <TitleHead1>Dashboard</TitleHead1>
    <p>{formattedDate}</p>
    </TitleHead>
      <LinkedAccountCardContainer>
        <Title>Linked Accounts</Title>
        <Content>
          <Item>
            <LinkButton to="" >+ Add Account</LinkButton>
            <Image src={LinkAcctCard} alt="Account 1" />
          </Item>
          <Item>
            <LinkButton to="">+ Add Account</LinkButton>
            <Image src={LinkAcctCard} alt="Account 2" />
          </Item>
          <Item>
            <LinkButton to="">+ Add Account</LinkButton>
            <Image src={LinkAcctCard} alt="Account 3" />
          </Item>
        </Content>
      </LinkedAccountCardContainer>
      <NoActivityWrapper>
        <NoActivity />
      </NoActivityWrapper>
    </>
  );
};

export default LinkedAccountCard;
