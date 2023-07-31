import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import LoginImage from "../../assets/LoginImage.png";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/logo.jpg";
import {
  BodyContainer,
  FormContainer,
  Title,
  TitleHeading,
  FormHeading,
  FirstParagraph,
  LogoImage,
  StyledForm,
  FormHeadingParagraph,
  Label,
  Fieldset,
  Input,
  SubmitInput,
  ALink,
  PasswordInputContainer,
  EyeIcon,
  Footer,
  FooterLink,
  ForgotPasswordLink,
  ImageContainer,
  LargeImage,
} from "./Login.styled";

const Login = () => {
  // Existing code...
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(formData); // Pass the form data to the login function
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <BodyContainer>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <div className="form-content">
            <FormHeading>
              <Title>
                <LogoImage src={logo} alt="pennywise-logo" />
                <TitleHeading>Pennywise</TitleHeading>
              </Title>
              <FormHeadingParagraph>
                Welcome back to Pennywise
              </FormHeadingParagraph>
            </FormHeading>
            <Fieldset>
              <Label htmlFor="email">
                Email Address
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  className="input-field"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label htmlFor="password">
                Password
                <PasswordInputContainer>
                  <Input
                    type={passwordVisible ? "text" : "password"}
                    value={formData.password}
                    id="password"
                    name="password"
                    className="input-field"
                    placeholder="****************"
                    onChange={handleChange}
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
              <ForgotPasswordLink>
                <ALink href="/forget-password">Forgot Password</ALink>
              </ForgotPasswordLink>
              <SubmitInput type="submit" value={"Login"}>
                Login
              </SubmitInput>
              <Footer>
                Don't have an account ?
                <FooterLink href="/register"> Sign up here</FooterLink>
              </Footer>
            </Fieldset>
          </div>
        </StyledForm>
      </FormContainer>
      <ImageContainer>
        <LargeImage src={LoginImage} alt="background-image" />
      </ImageContainer>
    </BodyContainer>
  );
};

export default Login;
