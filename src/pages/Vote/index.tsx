import React from "react";

import { Text } from "../../components";

import Navbar from "../../layout/Navbar";
import VotePages from "../../layout/VotePages";
import CardInfo from "../../layout/CardInfo";
import ContentInfo from "../../layout/ContentInfo";
import Footerr from "../../layout/Footer";
import Submit from "../../components/Submit";
interface PropsLogin {
  isUserLoggedIn: boolean;
}
const VotePage: React.FC<PropsLogin> = ({ isUserLoggedIn }) => {
  return (
    <>
      <Navbar isUserLoggedIn={isUserLoggedIn} />
      <div className="bg-blue_gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col justify-start p-[69px] md:px-10 sm:px-5 w-full">
          <Text
            className=" text-5xl sm:text-[38px] md:text-[44px] text-light_green-900 flex justify-center items-center mx-auto"
            size="txtInterBlack48"
          >
            INFO PEMILU TERUPDATE
          </Text>
          <VotePages />
          <div className="mb-[72px]  mt-[43px] md:text-3xl sm:text-[28px] text-[32px] font-bold capitalize text-red-A700 flex justify-center items-center mx-auto ">
            {isUserLoggedIn ? (
              <Submit
                name="Masukan Suara Kamu"
                type="button"
                className="px-5"
              />
            ) : (
              <span>Anda Harus login dulu</span>
            )}
          </div>
          <div className=""></div>
        </div>
        <CardInfo />

        <ContentInfo />
        <Footerr />
      </div>
    </>
  );
};

export default VotePage;
