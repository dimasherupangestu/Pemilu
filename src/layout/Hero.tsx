import React from "react";

import { Img, Text } from "../components";
const Hero: React.FC = () => {
  return (
    <div className="h-[516px] md:h-[561px] sm:h-[705px] max-w-[1141px] mt-[45px] mx-auto md:px-5 relative w-full">
      <Img
        className="absolute h-52 left-[0] object-cover rounded-tl-[30px] top-[0] md:h-40 "
        src="../../src/images/bener.png"
        alt="brandredOne"
      />
      <div className="absolute bg-gradient  flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-end justify-between m-auto pb-[25px] sm:px-5 px-[25px] rounded-[20px] w-full  ">
        <Text
          className="mb-[18px] sm:mt-60 mt-[20px] text-3xl text-white-A700 sm:text-md md:text-xl"
          size="txtInterBold24"
        >
          <span className="">
            SELAMAT DATANG
            <br />
            PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR <br />
            DIPILIH MELALUI SEBUAH ARTI NAMA
          </span>
        </Text>
        <Img
          className="h-[473px] md:h-auto mb-[18px] mr-[73px] object-cover md:w-6/12  "
          src="../../src/images/kotak.png"
          alt="kotakSuara"
        />
      </div>
    </div>
  );
};
export default Hero;
