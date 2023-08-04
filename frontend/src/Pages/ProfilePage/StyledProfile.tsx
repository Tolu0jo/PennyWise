import styled from "styled-components";

export const ProfilePage = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #F5F5F5;
  margin: 0;
  overflow: hidden;
`
export const ProfileContentContainer = styled.div`
  width: 100%;
`
export const ProfilePageBody = styled.div`
  width: 100%;
  height: 99vh;
  margin: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #F2F4F7;
  padding-bottom: 20px;
`
export const ProfileContainerOuter = styled.div`
  width: 90%;
  height: 90%;
  padding: 20px;
  overflow: hidden;
  margin-left: 30px;
  color: black;
  background-color: #F2F4F7;
  margin-right: 90px;
`

export const SubHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 10px;
`;

export const ProfileText = styled.div`
  color: #2d6a4f;
  font-family: "Inter", sans-serif;
  font-size: 27px;
  font-weight: 600;
`;

export const ProfileCurrentDate = styled.span`
  font-weight: 300;
  font-size: small;
  margin-right: 60px;
`;

export const ProfileContainerInner = styled.div`
  height: 80%;
  display: flex;
`;

export const ExtremeLeft = styled.div`
  width: 24.32%;
  height: 100%;
  background-color: white;
  padding: 5px;
  margin: 0px 1px 0px 1px;
  
`;

export const ProfileName = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const Middle = styled.div`
  width: 35.44%;
  height: 100%;
  background-color: white;
  padding: 5px;
`;

export const ExtremeRight = styled.div`
  width: 33.44%;
  height: 100%;
  background-color: white;
  padding: 5px;
  margin: 0px 1px 0px 1px;
`;


export const PersonalDetailsText = styled.p`
  font-size: medium;
  font-weight: 600;
  margin-left: 25px;
`;

export const ProfileUserDetails = styled.div`
  margin-left: 15px;
  padding: 15px;
  font-weight: 300;
  font-size: 12px;
`;

//Come back to this
export const ProfileLabel = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500&display=swap");
  display: block;
  font-family: "Heebo";
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
`;

export const ProfileInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 8px 0 8px 0; 
  input {
    min-height: 2.5em;
    background-color: #f2f4f7;
    padding-right: 2.5rem;
    width: 250px;
    border-radius: 4px;
    border: 1px solid #BDBDBD;
  }
  &::placeholder {
    font-size: 12px;
    font-weight: 200;
    color: black;
  }
`;


export const PadlockIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #131a29;
  margin-right: 25px;
`;

export const UserDetailsInputForPhone = styled.input`
  min-height: 2.5em;
  padding-right: 2.5rem;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  margin: 8px 0 8px 0;
`;

export const ProfileVidInputContainer = styled.div`
  position: relative;
`;

export const UploadIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 35%;
  transform: translateY(-50%);
  color: #98a2b3;
  margin-right: 25px;
  margin-top: 10px;
`;

export const UserDetailsInputForVid = styled.input`
  display: inline-block;
  overflow: hidden;
  min-height: 2.5em;
  padding-right: 2.5rem;
  font-size: 12px;
  font-weight: 300;
  background-color: #f2f4f7;
  width: 250px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  margin: 8px 0 8px 0;
`;

export const FileInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const ProfilePasswordInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 8px 0 8px 0;
  input {
    min-height: 2.5em;
    background-color: #f2f4f7;
    padding-right: 2.5rem;
    width: 250px;
    border-radius: 4px;
    border: 1px solid #bdbdbd;
  }
  &::placeholder {
    font-size: 12px;
    font-weight: 300;
    color: black;
  }
`;

export const ProfilePasswordEyeIcon = styled.span`
  position: absolute;
  top: 60%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
  color: #999;
  font-size: 15px;
  margin-right: 25px;
`;



export const LinkedAccountText = styled.p`
  font-size: medium;
  font-weight: 600;
  margin-left: 15px;
`;

export const AccountOne = styled.div`
  margin-top: 5px;
  margin-left: 15px;
`;

export const AccountNum = styled.h5`
  font-size: small;
  font-weight: 600;
`;

export const AccountTwo = styled.div`
  margin-top: 5px;
  margin-left: 15px;
`;

export const LinkedAccountInput = styled.input`
  min-height: 2.5em;
  padding-right: 2.5rem;
  width: 250px;
  margin: 3px 0 3px 0;
  border-radius: 8px;
  border: 1px solid #bdbdbd;

  &::placeholder {
    font-size: 12px;
    font-weight: 300;
    color: black;
  }
`;


export const CircularContainer = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin: 10px 0 0 30px;
 
`;

export const CircularImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ChangeIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
`;