import React from "react";
import { Img, Text } from "..";

const CardCaleg: React.FC = () => {
  return (
    <div className="bg-white-A700 bg- flex flex-1 flex-col gap-3 items-center justify-start pb-5 w-full">
      <Img
        className="h-[223px] md:h-auto object-cover w-full"
        src="../src/images/bg2.png"
        alt="1699844237water"
      />
      <div className="flex flex-col gap-3.5 items-start justify-start w-[91%] md:w-full">
        <div className="cursor-pointer font-bold leading-[normal] min-w-[217px] text-center text-xl bg-red-500 py-3 px-4 rounded-lg text-white-A700">
          <span>SENIN, 03 JAN 2023</span>
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
  );
};
export default CardCaleg;
