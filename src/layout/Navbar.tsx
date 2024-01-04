import React from "react";
import { Img, Text } from "../components";
interface NavbarProps {
  isUserLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isUserLoggedIn }) => {
  return (
    <nav className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5  w-full">
      <Img
        className="h-[41px] md:h-auto md:ml-[0] ml-[150px] md:mt-0 my-[11px] object-cover rounded-[5px] w-[41px]"
        src="../../src/images/logo.png"
        alt="344647901"
      />
      <Text
        className="md:ml-[0] ml-[17px] md:mt-0 my-4 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
        size="txtInterBold24"
      >
        PEMILU PRESIDEN DUMBWAYS.ID
      </Text>
      <Text
        className="md:ml-[0] ml-[243px] md:mt-0 my-[19px] text-white-A700 text-xl"
        size="txtInterRegular20"
      >
        Partai | Paslon | Voting
      </Text>
      <div className="w-20 ms-4 text-md  flex justify-center items-center">
        {isUserLoggedIn ? (
          <div className="bg-blue_gray-100_01 flex h-[45px] items-center justify-center md:ml-[0] ml-[39px] rounded-[22px] div-black-900 text-center text-xl w-[45px]">
            <span>D</span>
          </div>
        ) : (
          <button className="py-2 px-3 bg-white-A700 rounded-lg font-bold">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
