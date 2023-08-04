import backgroundImage from "../../assets/backgroundImage.jpg";
import logo from "../../assets/logo.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import {
  Body,
  FormContainer,
  Form,
  FormHeading,
  Title,
  LogoImage,
  HeadingTwo,
  RegisterFirstParagraph,
  FieldSet,
  Label,
  Input,
  PasswordInputContainer,
  EyeIcon,
  RegisterFooter,
  ImageContainer,
  StyledLink,
  SubmitButton,
} from "./styled";

interface userDetails {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirm_password: string;
}

const Test = () => {
  const {register} = useAuth();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [userDetails, setUserDetails] = useState<userDetails>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      phone: userDetails.phone,
      email: userDetails.email,
      password: userDetails.password,
      confirm_password: userDetails.confirm_password
    };
    await register(data);
  };

  return (
    <Body>
      <FormContainer>
        <Form onSubmit={handleFormSubmit}>
          <FormHeading>
            <Title>
              <LogoImage src={logo} alt="pennywise-logo" />
              <HeadingTwo>Pennywise</HeadingTwo>
            </Title>
            <RegisterFirstParagraph>
              Register to begin Pennywise account set up
            </RegisterFirstParagraph>
          </FormHeading>
          <FieldSet>
            <Label htmlFor="firstName">
              First Name
              <Input
                onChange={handleInputChange}
                type="text"
                id="firstName"
                name="firstName"
                className="input-field"
                placeholder="Enter your first name"
                required
              />
            </Label>
            <Label htmlFor="lastName">
              Last Name
              <Input
                onChange={handleInputChange}
                type="text"
                id="lastName"
                className="input-field"
                name="lastName"
                placeholder="Enter your last name"
                required
              />
            </Label>
            <Label htmlFor="email">
              Email Address
              <Input
                onChange={handleInputChange}
                type="email"
                id="email"
                name="email"
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </Label>
            <Label htmlFor="phone">
              Mobile Number
              <Input
                onChange={handleInputChange}
                type="number"
                pattern="[0-9]*"
                inputMode="numeric"
                id="phone"
                name="phone"
                className="input-field"
                placeholder="+234800 000 0000"
                required
              />
            </Label>
            <Label htmlFor="password">
              Password
              <PasswordInputContainer>
                <Input
                  onChange={handleInputChange}
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  className="input-field"
                  placeholder="****************"
                  required
                />
                <EyeIcon onClick={togglePasswordVisibility}>
                  {passwordVisible ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </EyeIcon>
              </PasswordInputContainer>
            </Label>
            <Label htmlFor="confirm-password">
              Confirm Password
              <PasswordInputContainer>
                <Input
                  type={passwordVisible ? "text" : "password"}
                  id="confirm-password"
                  name="confirm_password"
                  className="input-field"
                  onChange={handleInputChange}
                  placeholder="****************"
                  required
                />
                <EyeIcon onClick={togglePasswordVisibility}>
                  {passwordVisible ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </EyeIcon>
              </PasswordInputContainer>
            </Label>
            <SubmitButton type="submit" value={"Sign Up"}>
              Sign Up
            </SubmitButton>
            <RegisterFooter>
              Already have an account ?
              <StyledLink href="/login"> Sign in here</StyledLink>
            </RegisterFooter>
          </FieldSet>
        </Form>
      </FormContainer>
      <ImageContainer>
        <img
          src={backgroundImage}
          alt="background-image"
          className="large-image"
        />
      </ImageContainer>
    </Body>
  );
};

export default Test;
