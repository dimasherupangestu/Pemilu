import React from "react";
import data from "../../services/paslon.json";
import Navbar from "../../layout/Navbar";
import TabelPartai from "../../layout/TablePartai";
interface PropsLogin {
  isUserLoggedIn: boolean;
}
const ListPartaiPage: React.FC<PropsLogin> = ({ isUserLoggedIn }) => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[619px] w-full">
        <Navbar isUserLoggedIn={isUserLoggedIn} />
        <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[619px] w-full">
          <div className="mt-[70px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-900 font-bold">
            <h1> LIST PARTAI</h1>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1095px] mt-[58px] mx-auto md:px-5 w-full ">
            <TabelPartai data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPartaiPage;
