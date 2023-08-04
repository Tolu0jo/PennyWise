import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useRef } from "react";
import { useAuth } from "../../context/authContext";

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
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const { verifyAccount } = useAuth();

  const Input = ({
    innerRef,
    index,
  }: {
    innerRef: React.RefObject<HTMLInputElement>;
    index: number;
  }) => {
    const inputRefs = [firstRef, secondRef, thirdRef, fourthRef, fifthRef, sixRef];

    const handleFocus = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      if (key === "ArrowLeft" && index > 0) {
        // Move focus to the left input box
        const prevRef = inputRefs[index - 1];
        prevRef.current?.focus();
      } else if (key === "ArrowRight" && index < 5) {
        // Move focus to the right input box
        const nextRef = inputRefs[index + 1];
        nextRef.current?.focus();
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = inputValue;
        return updatedOtp;
      });
    };

    return (
      <input
        ref={innerRef}
        onKeyUp={handleFocus}
        onChange={handleChange}
        className="otpContent"
        type="text"
        maxLength={1}
        style={{
          width: "40px",
          height: "40px",
          fontSize: "20px",
          textAlign: "center",
          margin: "5px",
        }}
        value={otp[index]}
      />
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpCode = parseInt(otp.join(""), 10);

    console.log("Form submitted!"); 
    console.log("OTP Code:", otpCode); 

    if (!otpCode) {
      toast.error("Please enter the OTP before submitting.");
      return;
    }
    try {
      console.log("Calling verifyAccount...");
      await verifyAccount({ otp: otpCode });
      toast.success("OTP verified successfully!");  
    } catch (error) {
      console.error("Error in verifyAccount:", error);
      toast.error("Failed to verify OTP. Please try again.");
    }
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
            We've sent an OTP code to your email/phone number. Enter the OTP
            code below.
          </p>
          <div>
            <OTP>
              <Input innerRef={firstRef} index={0} />
              <Input innerRef={secondRef} index={1} />
              <Input innerRef={thirdRef} index={2} />
              <Input innerRef={fourthRef} index={3} />
              <Input innerRef={fifthRef} index={4} />
              <Input innerRef={sixRef} index={5} />
            </OTP>
            <ButtonForm type="button" onClick={handleSubmit}>
              Send
            </ButtonForm>
          </div>
        </SetupContent>
        <ToastContainer />
      </Container>
    </>
  );
}

export default OTPVerification;
