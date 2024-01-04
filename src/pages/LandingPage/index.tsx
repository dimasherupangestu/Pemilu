import React from "react";

import Navbar from "../../layout/Navbar";
import Hero from "../../layout/Hero";
import LayoutCardCaleg from "../../layout/LayoutCardCaleg";
import Footerr from "../../layout/Footer";
import Section from "../../layout/Section";
interface NavbarProps {
  isUserLoggedIn: boolean;
}

const LandingPage: React.FC<NavbarProps> = ({ isUserLoggedIn }) => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Navbar isUserLoggedIn={isUserLoggedIn} />
        <Hero />
        <LayoutCardCaleg />
        <Section />
        <Footerr></Footerr>
      </div>
    </>
  );
};

export default LandingPage;
