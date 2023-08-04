import React, { ReactNode, useEffect, useContext } from "react";
import { useState } from "react";
// import "./Profile.css";
import { FaLock, FaUnlock } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUpload, FaCamera } from "react-icons/fa";
import profileImage from "../../assets/profile-image.jpeg";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
// import { getAllAccounts } from "../../context/axios";
import {
  ProfilePage,
  ProfileContentContainer,
  ProfilePageBody,
  ProfileContainerOuter,
  SubHeading,
  ProfileText,
  ProfileCurrentDate,
  ProfileContainerInner,
  ExtremeLeft,
  ProfileName,
  Middle,
  PersonalDetailsText,
  ProfileUserDetails,
  ProfileLabel,
  ProfileInputContainer,
  // UserDetailsInput,
  PadlockIconContainer,
  UserDetailsInputForPhone,
  ProfileVidInputContainer,
  UploadIconContainer,
  UserDetailsInputForVid,
  FileInput,
  ProfilePasswordInputContainer,
  ProfilePasswordEyeIcon,
  ExtremeRight,
  LinkedAccountText,
  AccountOne,
  AccountTwo,
  LinkedAccountInput,
  AccountNum,
  CircularContainer,
  CircularImage,
  ChangeIcon,
} from "./StyledProfile";
import { useAuth } from "../../context/authContext";
import { getAllAccounts } from "../../context/axios";

function Profile() {
  const currentDate = new Date().toLocaleDateString("en-GB");

  const [isEditable, setIsEditable] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [linkedAcct, setLinkedAcct] = useState([]);
  const [imageUrl, setImageUrl] = useState<string>(
    "src/assets/profile-image.jpeg"
  );
  const fileInputRef = React.createRef<HTMLInputElement>();

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];

    if (file) {
      const render = new FileReader();
      render.onload = () => {
        setImageUrl(render.result as string);
      };
      render.readAsDataURL(file);
    }
  };

  const handleCameraClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePadlockIconClick = () => {
    setIsEditable(!isEditable);
  };

  const { getProfile, profile, getUserAccount, account } = useAuth();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    getProfile();
    getUserAccount();
  }, []);

  return (
    <ProfilePage>
      <Sidebar />
      <ProfileContentContainer>
        <Navbar />
        <ProfilePageBody>
          <ProfileContainerOuter>
            <SubHeading>
              <ProfileText>Profile</ProfileText>
              <ProfileCurrentDate>{currentDate}</ProfileCurrentDate>
            </SubHeading>
            <ProfileContainerInner>
              <ExtremeLeft>
                <CircularContainer>
                  <CircularImage src={profile.avatar} alt="Profile" />
                  <ChangeIcon onClick={handleCameraClick}>
                    <FaCamera style={{ color: "#2D6A4F" }} /> CHA
                  </ChangeIcon>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </CircularContainer>

                {/* <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      backgroundColor: "lightgray",
                      margin: "0 auto",
                    }}
                  >
                    <img
                      src={profileImage}
                      alt="profle-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <ProfileName>John Doe</ProfileName>
                </div> */}
              </ExtremeLeft>
              <Middle>
                <PersonalDetailsText>Personal Details</PersonalDetailsText>
                <ProfileUserDetails>
                  <ProfileLabel>
                    <label htmlFor="first-name">First Name</label>
                  </ProfileLabel>
                  <ProfileInputContainer>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      value={profile?.firstName}
                      placeholder="   Desmond"
                      readOnly={isEditable}
                    />
                    <PadlockIconContainer onClick={handlePadlockIconClick}>
                      {isEditable ? <FaLock /> : <FaUnlock />}
                    </PadlockIconContainer>
                  </ProfileInputContainer>

                  <ProfileLabel>
                    <label htmlFor="last-name">Last Name</label>
                  </ProfileLabel>
                  <ProfileInputContainer>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      value={profile.lastName}
                      placeholder="  Dean"
                      readOnly={isEditable}
                    />
                    <PadlockIconContainer onClick={handlePadlockIconClick}>
                      {isEditable ? <FaLock /> : <FaUnlock />}
                    </PadlockIconContainer>
                  </ProfileInputContainer>

                  <ProfileLabel>
                    <label htmlFor="email">Email</label>
                  </ProfileLabel>
                  <ProfileInputContainer>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profile.email}
                      placeholder="  desdean@email.com"
                      readOnly={isEditable}
                    />
                    <PadlockIconContainer onClick={handlePadlockIconClick}>
                      {isEditable ? <FaLock /> : <FaUnlock />}
                    </PadlockIconContainer>
                  </ProfileInputContainer>

                  <ProfileLabel>
                    <label htmlFor="phone">Mobile Number</label>
                  </ProfileLabel>
                  <UserDetailsInputForPhone
                    type="text"
                    id="phone"
                    value={profile.phone}
                    name="phone"
                    placeholder="  +2348000000000"
                  />

                  <ProfileLabel>
                    <label htmlFor="BVN">BVN</label>
                  </ProfileLabel>
                  <ProfileInputContainer>
                    <input
                      type="text"
                      id="BVN"
                      name="BVN"
                      value={profile.bvn}
                      placeholder="******"
                      readOnly={isEditable}
                    />
                    <PadlockIconContainer onClick={handlePadlockIconClick}>
                      {isEditable ? <FaLock /> : <FaUnlock />}
                    </PadlockIconContainer>
                  </ProfileInputContainer>
                  <ProfileLabel>
                    <label htmlFor="VID">Valid Means of Identification</label>
                  </ProfileLabel>
                  <ProfileVidInputContainer>
                    <UploadIconContainer>
                      <FaUpload />
                    </UploadIconContainer>
                    <UserDetailsInputForVid
                      type="text"
                      id="VID"
                      name="VID"
                      readOnly
                      placeholder="  Driver's license"
                    />
                    <FileInput
                      type="file"
                      id="VID"
                      name="VID"
                      accept="file/*"
                    />
                  </ProfileVidInputContainer>
               

                  {/* <ProfilePasswordInputContainer>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="  destin7$"
                    />
                    <ProfilePasswordEyeIcon onClick={togglePasswordVisibility}>
                      {passwordVisible ? (
                        <AiOutlineEyeInvisible />
                      ) : (
                        <AiOutlineEye />
                      )}
                    </ProfilePasswordEyeIcon>
                  </ProfilePasswordInputContainer> */}
                </ProfileUserDetails>
              </Middle>
              <ExtremeRight>
                <LinkedAccountText>Linked accounts</LinkedAccountText>
                {account?.map((acct: any, index: number) => (
                  <div key={index}>
                    <p>Account {index + 1}</p>
                    <LinkedAccountInput
                      type="text"
                      placeholder={acct.bank_name}
                      style={{
                        paddingLeft: "20px",
                        width: "230px",
                      }}
                    />
                    <LinkedAccountInput
                      type="text"
                      placeholder={acct?.account_name}
                      style={{
                        paddingLeft: "20px",
                        width: "230px",
                      }}
                    />
                    <LinkedAccountInput
                      type="text"
                      placeholder={acct?.account_number}
                      style={{
                        paddingLeft: "20px",
                        width: "230px",
                      }}
                    />
                  </div>
                ))}

                {/* <AccountOne>
                  <AccountNum>Account 1</AccountNum>

                  <LinkedAccountInput
                    type="text"
                    placeholder="   Zenith Bank"
                  />

                  <LinkedAccountInput type="text" placeholder="   0088667722" />
                  <LinkedAccountInput
                    type="text"
                    placeholder="   Desmond Okoli Dean"
                  />
                </AccountOne>
                <AccountTwo>
                  <AccountNum>Account 2</AccountNum>
                  <LinkedAccountInput
                    type="text"
                    placeholder="   Stanbic IBTC Bank"
                  />
                  <LinkedAccountInput type="text" placeholder="   0066227755" />
                  <LinkedAccountInput
                    type="text"
                    placeholder="   Desmond Okoli Dean"
                  />
                </AccountTwo> */}
              </ExtremeRight>
            </ProfileContainerInner>
          </ProfileContainerOuter>
        </ProfilePageBody>
      </ProfileContentContainer>
    </ProfilePage>
  );
}

export default Profile;
