import LinkAcctCard from "../../assets/LinkedAcctCard.png";
import NoActivity from "./NoActivity";

import {
  LinkedAccountCardContainer,
  Title,
  Content,
  Item,
  LinkButton,
  Image,
  NoActivityWrapper,
} from "./LinkedAcctStyle";

const LinkedAccountCard = () => {
  return (
    <>
      <LinkedAccountCardContainer>
        <Title>Linked Accounts</Title>
        <Content>
          <Item>
            <LinkButton to="">+ Add Account</LinkButton>
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
