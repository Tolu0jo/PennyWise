import styled from "styled-components";

export const SettingRapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: flex-start;
`;
export const SettingContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Setting = styled.div`
  width: 100%;
  height: 85vh;

  background: var(--grey-50, #f9fafb);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingDiv = styled.div`
  width: 90%;
  height: auto;
`;

export const Div = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: space-between;

  align-items: center;
  h2 {
    color: var(--green-1, #2d6a4f);

    /* Headline Bold - 32 */
    font-family: Inter;
    font-style: normal;
    line-height: 140%;
    letter-spacing: 0.25px;
  }
  p {
    color: var(--dark-green, #081c15);
    /* Body Text Normal -16 */
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.15px;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  width: 5%;
  height: 50px;

  align-items: center;
  justify-content: flex-start;
  div {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: var(--light-green-3, #d8f3dc);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SettingDetails = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  margin-top: 30px;
  background: var(--white, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingDetailsContainer = styled.div`
  width: 90%;
  height: auto;
`;

export const SettingDetails1 = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SettingDetailsDiv1 = styled.div`
  width: 65%;
  height: auto;
  h3{
    margin-bottom:10px;
  }
  p {
    font-size: 10px;
    padding-top; -10px;
  }
`;

export const SettingDetailsDiv2 = styled.div`
  width: 15%;
  height: 50px;
  background: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  color: green;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  border: 1px solid green;
  padding-left: 2rem;
  padding-right: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  color: green;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  border: 1px solid green;
  padding-left: 2rem;
  padding-right: 1rem;
`;

export const ButtonDefault = styled.button`
  width: 100%;
  height: 50px;
  color: green;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  border: 1px solid green;
  padding-left: 2rem;
  padding-right: 1rem;
`;