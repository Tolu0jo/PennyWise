import React from "react";
import {
  StyleHeader,
  Navbar,
  CompanyId,
  Logo,
  CompanyName,
  UList,
  NavbarLinks,
  List,
} from "./styles/Header.styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../index";

const Header = () => {
  const navigate = useNavigate();

  function handleClick(): void {
    navigate("/register");
  }

  return (
    <StyleHeader>
      <Navbar>
        <CompanyId>
          <Logo
            src="https://res.cloudinary.com/dgny9bffu/image/upload/v1687389282/pennywiseLogo_kne6yl.png"
            alt=""
          />
          <CompanyName>Pennywise</CompanyName>
        </CompanyId>
        <NavbarLinks>
          <UList>
            <List>
              <a href="/">How it Works</a>
            </List>
            <List>
              <a href="/">Benefits</a>
            </List>
            <List>
              <a href="/">Features</a>
            </List>
            <List>
              <a href="/">FAQ</a>
            </List>
            <Button
              onClick={handleClick}
              margin="0rem"
              width="6.125rem"
              height="2.75rem"
              text="Register"
            />
          </UList>
        </NavbarLinks>
      </Navbar>
    </StyleHeader>
  );
};

export default Header;
