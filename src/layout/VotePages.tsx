import React from "react";

import { Img, Text, List } from "../components";
const VotePages: React.FC = () => {
  return (
    <div className="flex md:flex-col flex-row gap-12 items-center justify-start max-w-[1082px] mt-[70px] mx-auto w-full">
      <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start w-[35%] md:w-full">
        <Text
          className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
          size="txtInterBlack40"
        >
          Hasil :
        </Text>
        <div className="h-[368px] relative w-full">
          <Img
            className="h-[368px] m-auto object-cover w-full"
            src="../src/images/diagram.png"
            alt="2954750419767pd"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[81px] justify-start left-[11%] top-[23%] w-[71%]">
            <Text
              className="md:ml-[0] ml-[52px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterBold24Black900"
            >
              45%
            </Text>
            <div className="flex flex-row items-start justify-between w-full">
              <Text
                className="mb-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterBold24Black900"
              >
                25%
              </Text>
              <Text
                className="mt-[15px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtInterBold24Black900"
              >
                78%
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-1 flex-col items-center justify-start w-[61%] md:w-full">
        <List
          className="flex flex-col gap-[19px] items-center w-full"
          orientation="vertical"
        >
          <div className="bg-pink-300 hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:my-0 my-0 p-[17px] rounded-[15px] hover:shadow-bs2 shadow-bs2 w-full">
            <div className="flex flex-row gap-9 items-center justify-start ml-2 md:ml-[0] w-[49%] md:w-full">
              <div className="bg-pink-800 border-[3px] border-solid border-white-A700 flex flex-col items-center justify-center p-[13px] rounded-[10px]">
                <Text
                  className="mt-[5px] text-base text-center text-white-A700"
                  size="txtInterBold16WhiteA700"
                >
                  <>
                    No.
                    <br />
                    Paslon
                  </>
                </Text>
                <Text
                  className="mb-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtInterBold32"
                >
                  3
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-slate-700"
                  size="txtInterBlack40Teal800"
                >
                  CINTARA
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-slate-700"
                  size="txtInterBold36Teal800"
                >
                  25%
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-amber-300 hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:my-0 my-0 p-[17px] rounded-[15px] hover:shadow-bs2 shadow-bs3 w-full">
            <div className="flex sm:flex-col flex-row gap-9 items-center justify-start ml-2 md:ml-[0] w-[66%] md:w-full">
              <div className="bg-light_green-900 border-[3px] border-solid border-white-A700 flex flex-col items-center justify-center p-[13px] rounded-[10px]">
                <Text
                  className="mt-[5px] text-base text-center text-white-A700"
                  size="txtInterBold16WhiteA700"
                >
                  <>
                    No.
                    <br />
                    Paslon
                  </>
                </Text>
                <Text
                  className="mb-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtInterBold32"
                >
                  1
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-light_green-900"
                  size="txtInterBlack40Lightgreen900"
                >
                  SURYA SURYA
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-light_green-900"
                  size="txtInterBold36Lightgreen900"
                >
                  45%
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-pink-300 hover:cursor-pointer flex flex-1 flex-col items-start justify-start hover:my-0 my-0 p-[17px] rounded-[15px] hover:shadow-bs2 shadow-bs2 w-full">
            <div className="flex flex-row gap-9 items-center justify-start ml-2 md:ml-[0] w-[49%] md:w-full">
              <div className="bg-teal-800 border-[3px] border-solid border-white-A700 flex flex-col items-center justify-center p-[13px] rounded-[10px]">
                <Text
                  className="mt-[5px] text-base text-center text-white-A700"
                  size="txtInterBold16WhiteA700"
                >
                  <>
                    No.
                    <br />
                    Paslon
                  </>
                </Text>
                <Text
                  className="mb-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtInterBold32"
                >
                  2
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-teal-800"
                  size="txtInterBlack40Teal800"
                >
                  CINTARA
                </Text>
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-teal-800"
                  size="txtInterBold36Teal800"
                >
                  25%
                </Text>
              </div>
            </div>
          </div>
        </List>
      </div>
    </div>
  );
};
export default VotePages;
