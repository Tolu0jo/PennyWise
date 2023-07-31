import React from "react";
import {
  FiCalendar,
  FiShoppingBag,
  FiDollarSign,
  FiUser,
  FiActivity,
  FiSettings,
  FiLogOut
} from "react-icons/fi";

import {TbCategory} from "react-icons/tb";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
  StyledSidebar,
  StyledSideBarHead,
  SidebarWrapper,
  SidebarContent,
  SidebarMenu,
  MenuHeading,
  MenuList,
  MenuItem,
  CompanyIdI,
} from "./SideBar.styled";

import {
  Logo,
  CompanyName
} from "../LandingPage/styles/Header.styled";
import {Link} from "react-router-dom"
import { useAuth } from "../../context/authContext";
const Sidebar = () => {
  const{logOut}=useAuth()
  
const handleLogOut = ()=>{
logOut();
}
  return (
    <StyledSidebar>   
      <SidebarWrapper>
        <SidebarContent>
        <StyledSideBarHead>  
        <CompanyIdI>
          <Logo
            src="https://res.cloudinary.com/dgny9bffu/image/upload/v1687389282/pennywiseLogo_kne6yl.png"
            alt=""
          />
          <CompanyName>Pennywise</CompanyName>
        </CompanyIdI>
        </StyledSideBarHead>
          <SidebarMenu>
            <MenuHeading>Overview</MenuHeading>
            <MenuList> 
              <Link to={"/dashboard"}>
              <MenuItem>
                <TbCategory className="menu-icon" />
                <span>Dashboard</span>
              </MenuItem>
              </Link> 
              <Link to="/income">
                <MenuItem>
                <FiDollarSign className="menu-icon" />
                <span>Income</span>
              </MenuItem> 
              </Link>
              <Link to="/budget">
               <MenuItem>
                <FiCalendar className="menu-icon" />
                <span>Budget</span>
              </MenuItem>
              </Link>
              <Link to="/expenses">
              <MenuItem>
                <FiShoppingBag className="menu-icon" />
                <span>Expenses</span>
              </MenuItem>
              </Link>
              <Link to="/savings">
             <MenuItem>
                <FaRegMoneyBillAlt className="menu-icon" />
                <span>Savings</span>
              </MenuItem>
              </Link>
              <Link to="/profile">
              <MenuItem>
                <FiUser className="menu-icon" />
                <span>Profile</span>
              </MenuItem>
              </Link>
              <Link to="/history">
              <MenuItem>
                <FiActivity className="menu-icon" />
                <span>History</span>
              </MenuItem>
              </Link>
            </MenuList>
            <MenuHeading>Others</MenuHeading>
            <MenuList>
            <Link to="/settings">
             <MenuItem>
                <FiSettings className="menu-icon" />
                <span>Settings</span>
              </MenuItem>
              </Link>
          
              <MenuItem onClick={()=>{handleLogOut}}>
                <FiLogOut className="menu-icon" />
                <span>Logout</span>
              </MenuItem>
            </MenuList>
          </SidebarMenu>
        </SidebarContent>
      </SidebarWrapper>
    </StyledSidebar>
  );
};

export default Sidebar;