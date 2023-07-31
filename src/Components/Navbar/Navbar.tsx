import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import { FaBell } from "react-icons/fa";
import {
  StyledNavbar,
  Nav,
  NavbarLeft,
  SearchIcon,
  SearchInput,
  NavbarRight,
  Notification,
  UserDetails,
  UserProfile,
  DashboardIndicator,
} from "./Navbar.styled";
import { useAuth } from "../../context/authContext";

const Navbar = () => {

  const{getProfile,profile}=useAuth()
  useEffect(()=>{
      getProfile()
  },[])
  
  return (

    
    <StyledNavbar>
      <Nav>
        <NavbarLeft>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search" />
        </NavbarLeft>
        <NavbarRight>
          <Notification>
            <Link to ={"/notification"}>
            <FaBell size={20} color="grey" />
            </Link>
          </Notification>
          <UserDetails>
            <UserProfile src={profile.avatar} alt="dp" />
            <DashboardIndicator>{profile.firstName}</DashboardIndicator>
          </UserDetails>
        </NavbarRight>
      </Nav>
    </StyledNavbar>
  );
};

export default Navbar;
