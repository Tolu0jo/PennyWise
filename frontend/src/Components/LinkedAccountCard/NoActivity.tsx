
import Illustrate from "../../assets/Illustration.png";

import {
    NoActivityContainer,
    NoActivityContent,
    NoActivityImage,
    NoActivityText
} from './NoActivityStyle'

const NoActivity = () => {
  return (
    <NoActivityContainer>
      <NoActivityContent>
        <NoActivityImage src={Illustrate} alt="" />
        <NoActivityText>
          You have no recorded activity on your dashboard.<br /> Add account to start.
        </NoActivityText>
      </NoActivityContent>
    </NoActivityContainer>
  );
};

export default NoActivity;
