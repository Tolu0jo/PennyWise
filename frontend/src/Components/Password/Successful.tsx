import {
  ButtonForm,
  Container,
  LogoContent,
  SetupContent,
} from "../Styled/Styled";
import logo from "../Password/Success.png";
import React from "react";

function Successful() {
  return (
    <>
      <Container>
        <SetupContent style={{ width: "30%", padding: "20px" }}>
          <LogoContent>
            <img src={logo} />{" "}
          </LogoContent>
          <h1>Successful</h1>
          <p style={{ textAlign: "center" }}>
            Your password has been changed successfully. Login to access your
            account
          </p>
          <p style={{ textAlign: "center" }}></p>
          <ButtonForm>Continue to Login</ButtonForm>
        </SetupContent>
      </Container>
    </>
  );
}
export default Successful;

// // const ButtonForm = styled.button``;
