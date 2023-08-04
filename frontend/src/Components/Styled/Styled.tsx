import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SetupContent = styled.form`
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.14);
  padding-top: 40px;
  padding-bottom: 40px;
  h3 {
    margin-left: 10px;
  }
  p {
    font-size: 14px;
    width: 80%;
    color: #98a2b3;
  }
`;
export const LogoContent = styled.div`
  width: auto;
  height: auto;
  display: flex;
`;

export const Label = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h4 {
    width: 100%;
    margin: 0px;
  }
`;

export const InputDiv = styled.input`
  width: 94%;
  height: 33px;
  border: 1px solid #ccc;
  outline: none;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
`;

export const ButtonForm = styled.button`
  width: 100%;
  height: 52px;
  background: #2d6a4f;
  border: 0px;
  color: white;
  margin: 10px;
  border-radius: 8px;
`;

export const LinkDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  color: #98a2b3;
  a {
    text-decoration: column;
    padding-left: 10px;
    color: #2d6a4f;
  }
`;

export const OTP = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const Form = styled.div`
width: 100%;
display: flex
justify-content: center;
align-items: center;
height: 100%px;
`;
