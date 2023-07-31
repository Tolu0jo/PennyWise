import styled from "styled-components";

export const Body = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Noto+Serif&display=swap");
  width: 100%;
  height: 99vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const FormContainer = styled.div`
  width: 40%;
  padding: 20px;
  overflow: hidden;
  margin-top: 5px;
`;

export const Form = styled.form`
  padding-top: 2em;
  margin: 0 auto;
  width: 340px;
  min-width: 300px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  // border: 2px solid green;
`;

export const FormHeading = styled.div`
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  margin-top: 5px;
  margin-bottom:25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  padding-right: 10px;
  width: 45px;
  height: auto;
`;

export const HeadingTwo = styled.h2`
  color: #081c15;
  font-size: large;
`;

export const RegisterFirstParagraph = styled.p`
  font-weight: 600;
  color: #101828;
  padding: 0 15px;
  font-size: 13px;
  margin: 15px;
`;

export const FieldSet = styled.fieldset`
  border: none;
  padding: 0.5rem 0;
  width: 90%;
  padding-left: 25px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
`;

export const Input = styled.input`
  width: 90%;
  margin: 10px 0 0 0;
  min-height: 2em;
  border-radius: 5px;
  border: 1px solid #d0d5dd;
  padding-left: 10px;
  min-height: 2rem;
  padding-left: 10px;
  min-height: 2rem;

  &::placeholder {
    font-size: 11px;
    color: #d0d5dd;
    font-weight: 20px;
  }
`;


export const PasswordInputContainer = styled.div`
  position: relative;
`;

export const EyeIcon = styled.span`
  position: absolute;
  top: 65%;
  right: 30px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #98a2b3;
  font-size: 15px;

`;

export const SubmitButton = styled.button`
  display: block;
  width: 95%;
  margin: 15px 0;
  min-height: 2.5rem;
  background-color: #2d6a4f;
  color: #ffffff;
  min-width: 100px;
  border: none;
  border-radius: 8px;
`;

export const RegisterFooter = styled.p`
  font-size: x-small;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  color: #98a2b3;
  font-weight: 400;
`;

export const ImageContainer = styled.div`
  width: 53%;
  height: fit-content;
`;

export const StyledLink = styled.a`
  color: #2d6a4f;
`;
