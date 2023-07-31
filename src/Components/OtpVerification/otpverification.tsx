import React, { useState, useRef } from "react";
import axios from "axios";
import {
  Container,
  SetupContent,
  LogoContent,
  Label,
  ButtonForm,
  OTP,
} from "../Styled/Styled";

function OTPVerification() {
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);
  const fourthRef = useRef<HTMLInputElement>(null);
  const fifthRef = useRef<HTMLInputElement>(null);
  const sixRef = useRef<HTMLInputElement>(null);
  const [otp, setOtp] = useState<string[]>([]);

  const Input = ({
    innerRef,
    name,
  }: {
    innerRef: React.RefObject<HTMLInputElement>;
    name: string;
  }) => {
    const handleFocus = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (name) {
        case "first":
          if (event.key === "Backspace") {
            return;
          }
          if (event.key === "ArrowRight") {
            secondRef.current?.focus();
          }
          break;
        case "second":
          if (event.key === "Backspace") {
            firstRef.current?.focus();
          } else if (event.key === "ArrowRight") {
            thirdRef.current?.focus();
          }
          break;
        case "third":
          if (event.key === "Backspace") {
            secondRef.current?.focus();
          } else if (event.key === "ArrowRight") {
            fourthRef.current?.focus();
          }
          break;
        case "fourth":
          if (event.key === "Backspace") {
            thirdRef.current?.focus();
          } else if (event.key === "ArrowRight") {
            fifthRef.current?.focus();
          }
          break;
        case "fifth":
          if (event.key === "Backspace") {
            fourthRef.current?.focus();
          } else if (event.key === "ArrowRight") {
            sixRef.current?.focus();
          }
          break;
        case "six":
          if (event.key === "Backspace") {
            fifthRef.current?.focus();
          }
          break;
        default:
          break;
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      if (inputValue !== "") {
        let index = 0;
        switch (name) {
          case "first":
            index = 0;
            break;
          case "second":
            index = 1;
            break;
          case "third":
            index = 2;
            break;
          case "fourth":
            index = 3;
            break;
          case "fifth":
            index = 4;
            break;
          case "six":
            index = 5;
            break;
          default:
            break;
        }
        setOtp((prevOtp) => {
          const updatedOtp = [...prevOtp];
          updatedOtp[index] = inputValue;
          console.log(updatedOtp);
          return updatedOtp;
        });
      }
    };

    return (
      <input
        ref={innerRef}
        onKeyUp={handleFocus}
        onChange={handleChange}
        className="otpContent"
        type="text"
        maxLength={1}
      />
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpCode = otp.join("");
  };

  return (
    <>
      <Container>
        <SetupContent>
          <LogoContent>
            <img src="http://localhost:5173/vite.svg" width={50} alt="Logo" />
            <h3> Pennywise</h3>
          </LogoContent>
          <h2>Enter Your OTP Code</h2>
          <p style={{ textAlign: "center" }}>
            We’ve sent an OTP code to your email/phone number. Enter the OTP
            code below.
          </p>
          <form onSubmit={handleSubmit}>
            <Label>
              <OTP>
                <Input innerRef={firstRef} name="first" />
                <Input innerRef={secondRef} name="second" />
                <Input innerRef={thirdRef} name="third" />
                <Input innerRef={fourthRef} name="fourth" />
                <Input innerRef={fifthRef} name="fifth" />
                <Input innerRef={sixRef} name="six" />
              </OTP>
              <ButtonForm type="submit">Send</ButtonForm>
            </Label>
          </form>
        </SetupContent>
      </Container>
    </>
  );
}

export default OTPVerification;
