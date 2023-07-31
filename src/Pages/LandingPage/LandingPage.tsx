import React from "react";
import Header from "../../Components/LandingPage/Header";
import { BodySection1 } from "../../Components/LandingPage/BodySection1";
import { BodySection2 } from "../../Components/LandingPage/BodySection2";
import { BodySection3 } from "../../Components/LandingPage/BodySection3";
import { BodySection4 } from "../../Components/LandingPage/BodySection4";
import { BodySection5 } from "../../Components/LandingPage/BodySection5";
import { BodySection6 } from "../../Components/LandingPage/BodySection6";
import { BodySection7 } from "../../Components/LandingPage/BodySection7";
import { Footer } from "../../Components/LandingPage/Footer";
const LandinPage = () => {
  return (
    <>
      <Header/>
      <BodySection1/>
      <BodySection2/>
      <BodySection3/>
      <BodySection4/>
      <BodySection5/>
      <BodySection6/>
      <BodySection7/>
      <Footer/>
    </>
  );
};

export default LandinPage;
