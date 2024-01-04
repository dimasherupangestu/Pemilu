import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const LandingPageAfterLoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-black-900 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[9px] w-full">
          <Img
            className="h-[41px] md:h-auto md:ml-[0] ml-[141px] object-cover w-[41px]"
            src="images/img_344647901_110x110.png"
            alt="344647901"
          />
          <Text
            className="md:ml-[0] ml-[17px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtInterBold24WhiteA700"
          >
            PEMILU PRESIDEN DUMBWAYS.ID
          </Text>
          <Text
            className="ml-80 md:ml-[0] text-white-A700 text-xl"
            size="txtInterRegular20"
          >
            Partai | Paslon | Voting
          </Text>
          <Text
            className="bg-blue_gray-100_01 flex h-[45px] items-center justify-center md:ml-[0] ml-[39px] rounded-[22px] text-black-900 text-center text-xl w-[45px]"
            size="txtInterBold20"
          >
            D
          </Text>
        </div>
        <div className="h-[516px] md:h-[561px] sm:h-[705px] max-w-[1141px] mt-[45px] mx-auto md:px-5 relative w-full">
          <Img
            className="absolute h-[237px] left-[0] object-cover rounded-tl-[30px] top-[0] w-[30%]"
            src="images/img_brandred1.png"
            alt="brandredOne"
          />
          <div className="absolute bg-gradient  flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-end justify-between m-auto pb-[25px] sm:px-5 px-[25px] rounded-[20px] w-full">
            <Text
              className="mb-[18px] sm:mt-0 mt-[347px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtInterBold24WhiteA700"
            >
              <>
                SELAMAT DATANG
                <br />
                PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR <br />
                DIPILIH MELALUI SEBUAH ARTI NAMA
              </>
            </Text>
            <Img
              className="h-[473px] md:h-auto mb-[18px] mr-[73px] object-cover"
              src="images/img_2954750419767pdg040259.png"
              alt="2954750419767pd"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1140px] mt-[97px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[67%] md:w-full">
                <div className="h-[422px] relative w-full">
                  <Img
                    className="h-[421px] m-auto object-cover w-full"
                    src="images/img_1699844237watermark.png"
                    alt="1699844237water"
                  />
                  <div className="absolute bg-gradient1  flex flex-col gap-[18px] h-full inset-[0] items-start justify-center m-auto p-[17px] w-full">
                    <div className="flex flex-col items-center justify-start mt-[253px] w-[33%] md:w-full">
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[232px] text-center text-xl"
                        shape="round"
                        color="red_A700"
                        size="sm"
                        variant="fill"
                      >
                        SENIN, 03 JAN 2023
                      </Button>
                    </div>
                    <Text
                      className="mb-1 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                      size="txtInterBold32"
                    >
                      <span className="text-white-A700 font-inter text-left font-bold">
                        <>
                          KPU TETAPKAN 3 MENTOR TERBAIK
                          <br />
                        </>
                      </span>
                      <span className="md:text-[22px] sm:text-xl text-white-A700 font-inter text-left text-2xl font-normal">
                        Super Admin
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-3 items-center justify-start pb-5 w-[33%] md:w-full">
                <Img
                  className="h-[223px] md:h-auto object-cover w-full"
                  src="images/img_1699844237watermark.png"
                  alt="1699844237water_One"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start w-[91%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[217px] text-center text-xl"
                      shape="round"
                      color="red_A700"
                      size="sm"
                      variant="fill"
                    >
                      SENIN, 03 JAN 2023
                    </Button>
                  </div>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInterBold32Black900"
                  >
                    <span className="text-black-900 font-inter text-left font-bold">
                      <>
                        KPU TETAPKAN 3 MENTOR TERBAIK
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-left text-2xl font-normal">
                      Super Admin
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-center justify-start pb-5 w-full">
                <Img
                  className="h-[223px] md:h-auto object-cover w-full"
                  src="images/img_1699844237watermark.png"
                  alt="1699844237water"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start w-[91%] md:w-full">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[217px] text-center text-xl"
                    shape="round"
                    color="red_A700"
                    size="sm"
                    variant="fill"
                  >
                    SENIN, 03 JAN 2023
                  </Button>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInterBold32Black900"
                  >
                    <span className="text-black-900 font-inter text-left font-bold">
                      <>
                        KPU TETAPKAN 3 MENTOR TERBAIK
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-left text-2xl font-normal">
                      Super Admin
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-center justify-start pb-5 w-full">
                <Img
                  className="h-[223px] md:h-auto object-cover w-full"
                  src="images/img_1699844237watermark.png"
                  alt="1699844237water"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start w-[91%] md:w-full">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[217px] text-center text-xl"
                    shape="round"
                    color="red_A700"
                    size="sm"
                    variant="fill"
                  >
                    SENIN, 03 JAN 2023
                  </Button>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInterBold32Black900"
                  >
                    <span className="text-black-900 font-inter text-left font-bold">
                      <>
                        KPU TETAPKAN 3 MENTOR TERBAIK
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-left text-2xl font-normal">
                      Super Admin
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-3 items-center justify-start pb-5 w-full">
                <Img
                  className="h-[223px] md:h-auto object-cover w-full"
                  src="images/img_1699844237watermark.png"
                  alt="1699844237water"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start w-[91%] md:w-full">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[217px] text-center text-xl"
                    shape="round"
                    color="red_A700"
                    size="sm"
                    variant="fill"
                  >
                    SENIN, 03 JAN 2023
                  </Button>
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtInterBold32Black900"
                  >
                    <span className="text-black-900 font-inter text-left font-bold">
                      <>
                        KPU TETAPKAN 3 MENTOR TERBAIK
                        <br />
                      </>
                    </span>
                    <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-left text-2xl font-normal">
                      Super Admin
                    </span>
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end mt-[97px] p-[118px] md:px-10 sm:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center w-[95%] sm:w-full"
            size="txtInterBold40"
          >
            PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN
            MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT
          </Text>
        </div>
        <Footer className="bg-black-900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default LandingPageAfterLoginPage;
