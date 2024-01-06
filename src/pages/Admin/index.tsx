import React from "react";

import { Text } from "../../components";
import Navbar from "../../layout/Navbar";
import CardAdmin from "../../layout/CardAdmin";
interface PropsLogin {
  isUserLoggedIn: boolean;
}
const AdminPage: React.FC<PropsLogin> = ({ isUserLoggedIn }) => {
  return (
    <>
      <Navbar isUserLoggedIn={isUserLoggedIn} />
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Text
          className="mt-[70px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
          size="txtInterBlack48"
        >
          DASHBOARD
        </Text>
        <div className="mx-auto w-5/6 h-full flex flex-wrap mt-4 ">
          <CardAdmin />
        </div>

        <footer className="bg-blue_gray-100_01 flex items-center justify-center mt-[126px] md:px-5 w-full">
          <div className="flex flex-col gap-[38px] items-center justify-center mb-48 mt-[140px] mx-auto w-[61%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[53px] items-center justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
                  size="txtInterBlack48"
                >
                  LIST VOTER
                </Text>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-md  rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border border-slate-300 bg-white-A700 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-slate-300 border-separate"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-slate-300 border-separate"
                        >
                          Nama
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-slate-300 border-separate"
                        >
                          Alamat
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-slate-300 border-separate"
                        >
                          Jenis Kelamin
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 border border-slate-300 border-separate"
                        >
                          Paslon
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-slate-800">
                        <th
                          scope="col"
                          className=" font-medium text-lg whitespace-nowrap dark:text-white border border-slate-300 border-separate"
                        >
                          1
                        </th>

                        <td className="px-6 py-4 border border-slate-300 border-separate">
                          Cintara surya paloh
                        </td>
                        <td className="px-6 py-4 border border-slate-300 border-separate">
                          Cilingsi
                        </td>
                        <td className="px-6 py-4 border border-slate-300 border-separate">
                          Laki laki
                        </td>
                        <td className="px-6 py-4 border border-slate-300 border-separate">
                          Paloh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl text-start"
              size="txtInterBold24Black900"
            >
              TOTAL SUARA TERKUMPUL : 1000 Voters
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdminPage;
