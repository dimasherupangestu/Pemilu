import React from "react";

import { Button, Img, List, Text } from "../../components";
import Navbar from "../../layout/Navbar";

const AdminPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Text
          className="mt-[70px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
          size="txtInterBlack48"
        >
          DASHBOARD
        </Text>
        <List
          className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1140px] mt-12 mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[29px] justify-start w-full">
              <div className="h-[76px] md:ml-[0] ml-[154px] relative w-1/5">
                <div className="bg-amber-300 h-[76px] m-auto outline outline-[5px] outline-light_green-900 rounded-[38px] w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-light_green-900 w-max"
                  size="txtInterBold40Lightgreen900"
                >
                  1
                </Text>
              </div>
              <div className="bg-amber-300 flex flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs6 w-full">
                <div className="flex flex-col items-start justify-start my-[13px] w-full">
                  <Img
                    className="h-[262px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="../../src/images/moyet.png"
                    alt="imageOne"
                  />
                  <Text
                    className="mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-light_green-900"
                    size="txtInterBlack40Lightgreen900"
                  >
                    SURYA SURYA
                  </Text>
                  <Text
                    className="text-light_green-900 text-shadow-ts text-xl"
                    size="txtInterMedium20"
                  >
                    <>
                      Akumulasi :45%
                      <br />
                      Jumlah Vote : 117 Voters
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[29px] justify-start w-full">
              <div className="h-[76px] md:ml-[0] ml-[155px] relative w-1/5">
                <div className="bg-teal-A200 h-[76px] m-auto outline outline-[5px] outline-cyan-900 rounded-[38px] w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-cyan-900 w-max"
                  size="txtInterBold40Cyan900"
                >
                  2
                </Text>
              </div>
              <div className="bg-teal-A200 flex flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs7 w-full">
                <div className="flex flex-col items-start justify-start my-[13px] w-full">
                  <Img
                    className="h-[262px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="../../src/images/moyet.png"
                    alt="imageOne"
                  />
                  <Text
                    className="mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-cyan-900"
                    size="txtInterBlack40Cyan900"
                  >
                    SURYA SURYA
                  </Text>
                  <Text
                    className="text-cyan-900 text-shadow-ts text-xl"
                    size="txtInterMedium20Cyan900"
                  >
                    <>
                      Akumulasi :75%
                      <br />
                      Jumlah Vote : 300 Voters
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[29px] justify-start w-full">
              <div className="h-[76px] md:ml-[0] ml-[155px] relative w-1/5">
                <div className="bg-red-A200 h-[76px] m-auto outline outline-[5px] outline-gray-900_01 rounded-[38px] w-full"></div>
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01 w-max"
                  size="txtInterBold40Gray90001"
                >
                  3
                </Text>
              </div>
              <div className="bg-red-A200 flex flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs8 w-full">
                <div className="flex flex-col items-start justify-start my-[13px] w-full">
                  <Img
                    className="h-[262px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="../../src/images/moyet.png"
                    alt="imageOne"
                  />
                  <Text
                    className="mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-gray-900_01"
                    size="txtInterBlack40Gray90001"
                  >
                    SURYA SURYA
                  </Text>
                  <Text
                    className="text-gray-900_01 text-shadow-ts text-xl"
                    size="txtInterMedium20Gray90001"
                  >
                    <>
                      Akumulasi :45%
                      <br />
                      Jumlah Vote : 117 Voters
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </List>
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
