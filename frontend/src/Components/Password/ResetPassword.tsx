import { Link, useLocation } from "react-router-dom";
import {
  Container,
  SetupContent,
  LogoContent,
  Label,
  ButtonForm,
  InputDiv,
} from "../Styled/Styled";
import { useAuth } from "../../context/authContext";
import React, { useState } from "react";

function ResetPassword() {
  const { resetPassword } = useAuth();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const [passwordData, setPasswordData] = useState({
    new_password: "",
    confirm_password: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setPasswordData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const resetPasswordData = {
      token,
      ...passwordData,
    };
    resetPassword(resetPasswordData);
  };

  return (
    <>
      <Container>
        <SetupContent>
          <LogoContent>
            <img src="http://localhost:5173/vite.svg" width={50} />
            <h3> Pennywise</h3>
          </LogoContent>
          <h2>Reset your password</h2>
          <p style={{ textAlign: "center" }}>
            Enter your email below and we’ll send you instructions on how to
            reset your password.
          </p>
          <Label>
            <h4>Password</h4>

            <InputDiv
              type="password"
              name="new_password"
              placeholder="*****************"
              onChange={handleChange}
            ></InputDiv>
            <h4>Confirm Password</h4>

            <InputDiv
              type="password"
              name="confirm_password"
              placeholder="*****************"
              onChange={handleChange}
            ></InputDiv>

            <ButtonForm onClick={handleSubmit}>
              <Link style={{ color: "#FFFFFF", textDecoration: "none" }} to="/">
                Reset Password
              </Link>
            </ButtonForm>
          </Label>
        </SetupContent>
      </Container>
    </>
  );
}

export default ResetPassword;
