import React from "react";
import { Img, Text } from "../components";
const CardInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start max-w-[1140px] mt-[75px] mx-auto md:px-5 w-full">
      <div className="flex flex-col gap-10 items-center justify-start w-full">
        <Text
          className="text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
          size="txtInterBlack48"
        >
          INFO PASLON
        </Text>
        <div className="flex md:flex-col flex-row font-jua md:gap-10 items-center justify-between w-full">
          <Text
            className="bg-white-A700 flex h-12 items-center justify-center mb-[215px]  md:mb-2 md:mt-0 mt-[231px] rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100 text-center w-12"
            size="txtJuaRegular32"
          >
            <>&lt;</>
          </Text>
          <div className="bg-white-A700 flex md:flex-col flex-row font-inter gap-[42px] items-start justify-end p-16 md:px-10 sm:px-5 rounded-[10px] shadow-bs5">
            <Img
              className="h-[328px] sm:h-auto md:mt-0 mt-[7px] object-cover rounded-[10px] w-[31%] md:w-full"
              src="../src/images/moyet.png"
              alt="imageOne"
            />
            <div className="flex flex-col gap-4 items-start justify-start md:mt-0 my-1.5 w-[65%] md:w-full">
              <div className="h-[73px] relative w-[90%] sm:w-full">
                <Text
                  className="mb-[-5.53px] text-2xl md:text-[22px] text-black-900 sm:text-xl z-[1]"
                  size="txtInterBold24Black900"
                >
                  Nomor Urut : 1
                </Text>
                <Text
                  className="mx-auto mt-3 sm:text-xl md:text-2xl text-2xl text-gray-900_01"
                  size="txtInterBold40Gray90001"
                >
                  CINTARA SURYA PALOH
                </Text>
              </div>
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterRegular24"
              >
                <div className=" text-xl mt-4">
                  Visi & Misi :<br />
                  Memindahkan Indonesia ke Isekai.
                  <br />
                  Nonton anime 3x sehari.
                  <br />
                  Melakukan peresapan pada budaya jepang.
                  <br />
                  <br />
                  Koalisi :<br />
                  Partai Persatuan Wiboo.
                  <br />
                  Partai Redbull.
                  <br />
                  Partai Black Magic.
                </div>
              </Text>
            </div>
          </div>
          <Text
            className="bg-white-A700 flex h-12 items-center justify-center mb-[219px] md:mt-0 mt-[227px] rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-100 text-center w-12 md:mb-[10px]"
            size="txtJuaRegular32"
          >
            <>&gt;</>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
