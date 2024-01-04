import React from "react";
import { Img, Line, Text } from "../components";

const Footerr: React.FC = () => {
  return (
    <div className="bg-black-900 flex flex-col items-center justify-end py-6 w-full">
      <div className="flex flex-col justify-start mt-[11px] w-full">
        <div className="flex sm:flex-col flex-row gap-[42px] items-center justify-start md:ml-[0] ml-[145px] md:px-5 w-[37%] md:w-full">
          <Img
            className="h-[110px] md:h-auto object-cover w-[110px]"
            src="../../src/images/logo.png"
            alt="344647901_One"
          />
          <Text
            className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtInterBold24"
          >
            <span className="text-white-A700 font-inter text-left font-bold">
              <span>
                DUMBWAYS.ID
                <br />
              </span>
            </span>
            <span className="text-gray-400 font-inter text-left text-base font-light">
              Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
              Banten 15413
            </span>
          </Text>
        </div>
        <Line className="bg-white-A700 h-0.5 mt-[67px] w-full" />
        <Text
          className="md:ml-[0] ml-[45px] mt-[26px] text-center text-white-A700 text-xl flex justify-center items-center"
          size="txtInterMedium20"
        >
          Komisi Pemilihan Umum DumbWays.ID | yourname 2023
        </Text>
      </div>
    </div>
  );
};
export default Footerr;
