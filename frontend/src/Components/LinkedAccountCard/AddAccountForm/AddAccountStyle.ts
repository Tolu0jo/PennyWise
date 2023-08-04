import styled from "styled-components";

export const FormContainer = styled.div`
    position: fixed;
    top: 100;
    right: 100;
    background-color: #fff;
    width: 360px;
    height: 580px;
    padding: 40px;
    border-radius: 16px;
    font-family: Inter;

    

`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  margin-bottom: 5px;
  width: 320px;
  height: 20px;
  padding: 12px 16px 12px 16px;
  border-radius: 8px;
  gap: 8px;
`;

export const Button = styled.button`
  background-color: #2D6A4F;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px, 16px, 12px, 16px;
  gap: 8px;
  cursor: pointer;
  width: 350px;
  height: 44px;
`;

export const CustomFileInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const CustomFileInputText = styled.span`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  width: 320px;
  height: 20px;
  padding: 12px 16px 12px 16px;
  border-radius: 8px;
  gap: 8px;
  font-size: 13px;
  color: #98A2B3;
  cursor: pointer;
`;

export const HiddenFileInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
