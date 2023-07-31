import { Link } from "react-router-dom";
import { Container, SetupContent } from "../Styled/Styled";
import React from "react";
function Message() {
  return (
    <>
      <Container>
        <SetupContent style={{ width: "30%", padding: "20px" }}>
          <h1>Check your mail</h1>
          <p style={{ textAlign: "center" }}>
            We sent a password reset link to your email. Please click the link
            to reset your password.
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
export default Message;
