import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

export const StyledNavbar = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

  padding: 0;
  margin-right: 0;
  box-sizing: border-box;
  height: 4.5rem;
  border-bottom: 1px solid #f2f4f7;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background-color: white;
  @media (max-width: 950px) {
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLeft = styled.div`
  position: relative;
  display: flex;
`;

export const SearchIcon = styled(RiSearchLine)`
  position: absolute;
  top: 33%;
  left: 11.9rem;
  bottom: 15px;
  transform: translate(-50%);
  color: #98a2b3;
  font-size: 1.3rem;
`;

export const SearchInput = styled.input`
  padding: 0.625rem 2.5rem;
  width: 27.44rem;
  margin-left: 10rem;
  height: 1.5rem;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 0.5rem;
  font-family: "Inter", sans-serif;
  color: #98a2b3;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 140%;
  letter-spacing: 0.15px;

  @media (max-width: 950px) {
    width: 10rem;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  width: 12rem;
  margin-left: 1rem;
  padding: 1rem;
  gap:1rem;
  @media (max-width: 950px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Notification = styled.div`
  display: flex;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfile = styled.img`
  margin-right: 5px;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const DashboardIndicator = styled.span`
  font-family: "Inter", sans-serif;
  color: #081c15;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.15px;
  height: 1.4rem;
`;
