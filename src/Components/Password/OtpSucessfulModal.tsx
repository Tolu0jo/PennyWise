import {
  ButtonForm,
  Container,
  LogoContent,
  SetupContent,
} from "../Styled/Styled";
import logo from "../Password/Success.png";
import { Link } from "react-router-dom";
import React from "react";

function OtpSucessfulModal() {
  return (
    <>
      <Container>
        <SetupContent style={{ width: "30%", padding: "20px" }}>
          <LogoContent>
            <img src={logo} alt="Logo" />{" "}
          </LogoContent>
          <h1>Successful</h1>
          <p style={{ textAlign: "center" }}>
            Your OTP has been accepted and you have successfully added an
            account.
          </p>
          <p style={{ textAlign: "center" }}></p>
          <Link to="/dashboard" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            <ButtonForm>Done</ButtonForm>
          </Link>
        </SetupContent>
      </Container>
    </>
  );
}

export default OtpSucessfulModal;
