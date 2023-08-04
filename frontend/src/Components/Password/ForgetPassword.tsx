import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import swal from "sweetalert";
import {
  Container,
  LinkDiv,
  SetupContent,
  LogoContent,
  Label,
  ButtonForm,
  InputDiv,
} from "../Styled/Styled";
import { useAuth } from "../../context/authContext";
// import { useAuth } from "../../context/authContext";

function ForgetPassword() {
  const { sendEmail } = useAuth();
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData = {
      email,
    };
    sendEmail(emailData);
  };
  //   try {
  //     await fetch("http://localhost:4040/user/send_otp", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email: emailData.email }),
  //     })
  //       .then((res) => res.json())
  //       .then((data: Datas) => {
  //         console.log(data.Message);
  //         console.log(data);

  //         if (data.Message == "OTP sent successfully") {
  //           swal("ALERT!", data.Message, "success");
  //           localStorage.setItem("email", emailData.email);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   } catch (e: any) {
  //     console.log(e);
  //   }
  // };

  return (
    <>
      <Container>
        <SetupContent onSubmit={handleSubmit}>
          <LogoContent>
            <img src="http://localhost:5173/vite.svg" width={50} />
            <h3> Pennywise</h3>
          </LogoContent>
          <h2>ForgetPassword</h2>
          <p style={{ textAlign: "center" }}>
            Enter your email below and we’ll send you instructions on how to
            reset your password.
          </p>
          <Label>
            <h4>Email Address</h4>

            <InputDiv
              type="text"
              placeholder="Enter your Email"
              name="email"
              onChange={handleInputChange}
            ></InputDiv>

            <ButtonForm>Send reset instructions</ButtonForm>
          </Label>
          <LinkDiv>
            Go Back to <Link to="/reset">Sign in</Link>
          </LinkDiv>
        </SetupContent>
      </Container>
    </>
  );
}

export default ForgetPassword;
