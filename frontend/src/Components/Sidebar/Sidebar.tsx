import React from "react";
import {
  FiCalendar,
  FiShoppingBag,
  FiDollarSign,
  FiUser,
  FiActivity,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import { TbCategory } from "react-icons/tb";
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
  StyledRouterLink,
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
              <MenuItem>
                <TbCategory className="menu-icon" />
                <span>
                  <StyledRouterLink to="/dashboard">Dashboard</StyledRouterLink>
                </span>
              </MenuItem>
               
                <MenuItem>
                <FiDollarSign className="menu-icon" />
                <span>
                  <StyledRouterLink to="/income">Income</StyledRouterLink>
                </span>
              </MenuItem>
              <MenuItem>
                <FiCalendar className="menu-icon" />
                <span>
                  <StyledRouterLink to="/budget">Budget</StyledRouterLink>
                </span>
              </MenuItem>
              <MenuItem>
                <FaRegMoneyBillAlt className="menu-icon" />
                <span>
                  <StyledRouterLink to="/savings">Savings</StyledRouterLink>
                </span>
              </MenuItem>
              <MenuItem>
                <FiShoppingBag className="menu-icon" />
                <span>
                  <StyledRouterLink to="/expenses">Expenses</StyledRouterLink>
                </span>
              </MenuItem>
            

              <MenuItem>
                <FiUser className="menu-icon" />
                <span>
                  <StyledRouterLink to="/profile">Profile</StyledRouterLink>
                </span>
              </MenuItem>
              <MenuItem>
                <FiActivity className="menu-icon" />
                <span>
                  <StyledRouterLink to="/history">History</StyledRouterLink>
                </span>
              </MenuItem>
              
            </MenuList>
            <MenuHeading>Others</MenuHeading>
            <MenuList>
             <MenuItem>
                <FiSettings className="menu-icon" />
                <span>
                  <StyledRouterLink to="/settings">Settings</StyledRouterLink>
                </span>
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
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
