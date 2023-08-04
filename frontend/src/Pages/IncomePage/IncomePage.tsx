import React from "react";
import { PageContainer, Sidebar, PageWrapper, Navbar } from "../../Components";
import IncomeComp from "../../Components/Income/IncomeComp"; 

const IncomePage = () => {
  return (
    <>
      <PageContainer>
        <Sidebar />
        <PageWrapper>
          <Navbar />
          <IncomeComp />
        </PageWrapper>
      </PageContainer>
    </>
  );
};

export default IncomePage;
