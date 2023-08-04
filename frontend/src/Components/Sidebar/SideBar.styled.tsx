import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSidebar = styled.html`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

  font-family: "Inter", sans-serif;
  display: flex;
  position: relative;
`;

export const StyledSideBarHead = styled.header`
  display: flex;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 1000px) {
    &.open {
      .sidebar {
        transform: translateX(0) !important;
      }
    }
  }
`;

export const SidebarContent = styled.div`
  width: 15.6rem;
  background-color: #fff;
  padding: 1.5rem 0 0 1.5rem;
  transition: transform 0.3s;
  transform: translateX(0);

  &.open {
    transform: translateX(-100%);
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const SidebarMenu = styled.div`
  font-size: 16px;
`;

export const MenuHeading = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  color: #98a2b3;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 1rem;

  span {
    font-size: 1rem;
    color: #101828;
    font-weight: 400;
    letter-spacing: 0.15px;
    line-height: 1.4rem;
    margin-left: 10px;

    &:hover {
      color: #2d6a4f;
    }
  }
`;

export const MenuItem = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #2d6a4f;
  }
`;

export const SidebarToggle = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding-top: 0.5rem;
  padding-left: 2rem;

  @media (max-width: 1000px) {
    display: block;
  }
`;

export const CompanyIdI = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eaebec;
`;

export const StyledRouterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
