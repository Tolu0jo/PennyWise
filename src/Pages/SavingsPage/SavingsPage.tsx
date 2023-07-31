import React from "react";
import styled from "styled-components";
import {Navbar, Sidebar, Savings } from "../../Components/index";


const SavingsPage: React.FC = () => {
  return (
    <PageContainer >
      <Sidebar />
      <ContentContainer>
        <Navbar />
        <Savings />
      </ContentContainer>
    </PageContainer>
  );
};


const PageContainer = styled.div`
  display: flex;

  height: 100vh;
  background-color: #F5F5F5;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

export default SavingsPage;
