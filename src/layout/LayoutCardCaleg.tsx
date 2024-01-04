import React from "react";
import { Button, Img, List, Text } from "../components";
import CardCaleg from "../components/CardCaleg";

const LayoutCardCaleg: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start max-w-[1140px] mt-[97px] mx-auto md:px-5 w-full p-2 ">
      <div className="flex flex-col gap-6 items-center justify-start w-full">
        <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
            <div className="h-[422px] relative w-full">
              <Img
                className="h-[421px] m-auto object-cover w-full"
                src="../src/images/bg1.png"
                alt="1699844237water"
              />
              <div className="absolute bg-gradient1  flex flex-col gap-[18px] h-full inset-[0] items-start justify-center m-auto p-[17px] w-full">
                <div className="flex flex-col items-center justify-start mt-[253px] w-[33%] md:w-full">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[232px] text-center text-xl"
                    shape="round"
                  >
                    SENIN, 03 JAN 2023
                  </Button>
                </div>
                <Text
                  className="mb-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                  size="txtInterBold32"
                >
                  <span className="text-white-A700 font-inter text-left font-bold">
                    <p>
                      KPU TETAPKAN 3 MENTOR TERBAIK
                      <br />
                    </p>
                  </span>
                  <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-normal">
                    Super Admin
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-3 items-center justify-start pb-1 w-[33%] md:w-full">
            <Img
              className="h-[203px] md:h-auto object-cover w-full"
              src="../src/images/bg2.png"
              alt="1699844237water_One"
            />
            <div className="flex flex-col gap-3.5 items-start justify-start w-[91%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
                <div className="cursor-pointer font-bold leading-[normal] min-w-[217px] text-center text-xl bg-red-500 py-3 px-4 rounded-lg text-white-A700">
                  <span>SENIN, 03 JAN 2023</span>
                </div>
              </div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtInterBold32Black900"
              >
                <span className="text-black-900 font-inter text-left font-bold">
                  <span>
                    KPU TETAPKAN 3 MENTOR TERBAIK
                    <br />
                  </span>
                </span>
                <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-left text-2xl font-normal">
                  Super Admin
                </span>
              </Text>
            </div>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <CardCaleg />
          <CardCaleg />
          <CardCaleg />
        </List>
      </div>
    </div>
  );
};

export default LayoutCardCaleg;
