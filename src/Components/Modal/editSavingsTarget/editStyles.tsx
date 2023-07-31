import styled from "styled-components";

export const EditSavingsBody = styled.div`
  background-color: white;
  border-radius: 24px;
  margin-bottom: 10px;
  padding: 15px;
`;

export const EditModelHeader = styled.h2`
  font-weight: 600;
  font-size: 20px;
  margin-left: 10px;
`;

export const EditModelForm = styled.form`
  margin: 0 auto;
  width: 340px;
  height: 420px;
  border-radius: 20px;
`;

export const EditModelFieldSet = styled.fieldset`
  border: none;
  width: 90%;
`;

export const EditModelLabel = styled.label`
  display: block;
  font-family: "Inter";
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  margin: 10px 0 5px 0;
`;

export const EditModelInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #d0d5dd;
  padding-left: 10px;
  min-height: 2rem;
  padding-left: 10px;
  margin-bottom: 5px;

  &::placeholder {
    font-size: 12px;
    color: #d0d5dd;
    font-weight: 20px;
  }
`;

export const EditModelSelect = styled.select`
  width: 104%;
  border-radius: 5px;
  border: 1px solid #d0d5dd;
  padding-left: 10px;
  min-height: 2.5rem;
  padding-left: 10px;
  margin-bottom: 5px;
`;
