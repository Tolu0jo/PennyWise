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
          <img src="http://localhost:5173/vite.svg" width={50} />
          </LogoContent>
          <h1>Successful</h1>
          <p style={{ textAlign: "center" }}>
            Your OTP has been accepted and you have successfully added an
            account.
          </p>
          <p style={{ textAlign: "center" }}></p>
          <ButtonForm>
            <Link style={{ color: "#FFFFFF", textDecoration: "none" }} to="/">
              Done
            </Link>
          </ButtonForm>
        </SetupContent>
      </Container>
    </>
  );
}
export default OtpSucessfulModal;
