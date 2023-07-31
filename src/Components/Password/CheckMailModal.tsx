import React from "react";
import { Container, LogoContent, SetupContent } from "../Styled/Styled";
import { Link } from "react-router-dom";
import logo from "../Password/Success.png";
function CheckMail() {
  return (
    <>
      <Container>
        <SetupContent style={{ width: "30%", padding: "20px" }}>
        <LogoContent>
            <img src={logo} />
          </LogoContent>
          <h1>Check your mail</h1>
          <p style={{ textAlign: "center" }}>
            A Verification link has been sent to your email. Please check your mail
            to continue your verification.
          </p>
          <p style={{ textAlign: "center" }}>
            Didn’t received an email?{" "}
            <Link style={{ color: "#1570EF", textDecoration: "none" }} to="/">
              Click to Resend
            </Link>
          </p>
        </SetupContent>
      </Container>
    </>
  );
}

export default CheckMail;
