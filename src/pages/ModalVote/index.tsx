import React from "react";
import { Button, Img, List, Text } from "../../components";
interface PropsLogin {
  isUserLoggedIn: boolean;
}
const ModalVotePage: React.FC<PropsLogin> = ({ isUserLoggedIn }) => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col flex-wrap items-center justify-center p-[29px] lg:bg-red-800 sm:px-5 rounded-[25px] w-full ">
          <div className="flex flex-col flex-wrap justify-start max-w-[1081px] mx-auto my-[23px]  md:px-5 w-full ">
            <Text
              className="md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-light_green-900 flex justify-center items-center"
              size="txtInterBlack48"
            >
              MASUKAN PILIHAN MU
            </Text>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start mt-[29px] w-auto md:w-full"
              orientation="horizontal"
            >
              <div className=" w-[1100px] h-ful p-5 flex justify-center items-center gap-4 lg:bg-red-400 md:flex-wrap md:max-w-lg md:justify-center md:items-center md:mx-auto ">
                <div className="md:h-[385px] h-[395px] relative w-full md:my-10 md:flex md:justify-center md:items-center md:mx-auto">
                  <div className="absolute bg-yellow-400 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[11px] rounded-[15px] shadow-bs w-full">
                    <Img
                      className="h-[189px] sm:h-auto ml-3 md:ml-[0] mt-4 object-cover rounded-[10px] w-[93%] md:w-full"
                      src="../src/images/moyet.png"
                      alt="imageOne"
                    />
                    <Text
                      className="ml-3 md:ml-[0] mt-[9px] text-2xl md:text-[22px] text-lime-900 sm:text-xl"
                      size="txtInterBold24"
                    >
                      CINTARA SURYA PALOH
                    </Text>
                    <Text
                      className="ml-3 md:ml-[0] mt-0.5 text-base text-blue_gray-900"
                      size="txtInterRegular16"
                    >
                      Memindahkan Indonesia ke Isekai
                    </Text>
                    <Text
                      className="mb-3 ml-3 md:ml-[0] mt-2 text-base text-blue_gray-900"
                      size="txtInterBold16"
                    >
                      <span className="text-blue_gray-900 font-inter text-left font-bold">
                        <>
                          Partai Pengusung :<br />
                        </>
                      </span>
                      <span className="text-blue_gray-900 font-inter text-left font-normal">
                        <>
                          Partai persatuan monyet
                          <br />
                          Partai sapi perah indonesia
                          <br />
                          Partai pisang masak
                        </>
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="absolute bg-pink-300 border-[3px] border-solid border-white-A700 flex h-[90px] items-center justify-center sm:px-5 right-[0] rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 top-[0] w-[90px]"
                    size="txtInterBold32"
                  >
                    1
                  </Text>
                </div>
                <div className="md:h-[385px] h-[395px] relative w-full">
                  <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[11px] rounded-[15px] shadow-bs1 w-full">
                    <Img
                      className="h-[189px] sm:h-auto ml-3 md:ml-[0] mt-4 object-cover  rounded-[10px] w-[93%] md:w-full"
                      src="../src/images/mega.jpeg"
                      alt="imageOne"
                    />
                    <Text
                      className="ml-3 md:ml-[0] mt-[9px] text-2xl md:text-[22px] text-lime-900 sm:text-xl"
                      size="txtInterBold24"
                    >
                      SURYA
                    </Text>
                    <Text
                      className="ml-3 md:ml-[0] mt-0.5 text-base text-blue_gray-900"
                      size="txtInterRegular16"
                    >
                      Memindahkan Indonesia ke Isekai
                    </Text>
                    <Text
                      className="mb-3 ml-3 md:ml-[0] mt-2 text-base text-blue_gray-900"
                      size="txtInterBold16"
                    >
                      <span className="text-blue_gray-900 font-inter text-left font-bold">
                        <>
                          Partai Pengusung :<br />
                        </>
                      </span>
                      <span className="text-blue_gray-900 font-inter text-left font-normal">
                        <>
                          Partai persatuan monyet
                          <br />
                          Partai sapi perah indonesia
                          <br />
                          Partai pisang masak
                        </>
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="absolute bg-pink-300 border-[3px] border-solid border-white-A700 h-[90px] justify-center pl-[35px] pr-8  pt-4 sm:px-5 py-[25px] right-[0] rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 top-[0] w-[90px]"
                    size="txtInterBold32"
                  >
                    2
                  </Text>
                </div>
                <div className="md:h-[385px] h-[395px] relative w-full">
                  <div className="absolute bg-gray-300 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[11px] rounded-[15px] shadow-bs1 w-full">
                    <Img
                      className="h-[189px] sm:h-auto ml-3 md:ml-[0] mt-4 object-cover rounded-[10px] w-[93%] md:w-full"
                      src="../src/images/sby.png"
                      alt="imageOne"
                    />
                    <Text
                      className="ml-3 md:ml-[0] mt-[9px] text-2xl md:text-[22px] text-lime-900 sm:text-xl"
                      size="txtInterBold24"
                    >
                      CINTARA SURYA PALOH
                    </Text>
                    <Text
                      className="ml-3 md:ml-[0] mt-0.5 text-base text-blue_gray-900"
                      size="txtInterRegular16"
                    >
                      Memindahkan Indonesia ke Isekai
                    </Text>
                    <Text
                      className="mb-3 ml-3 md:ml-[0] mt-2 text-base text-blue_gray-900"
                      size="txtInterBold16"
                    >
                      <span className="text-blue_gray-900 font-inter text-left font-bold">
                        <>
                          Partai Pengusung :<br />
                        </>
                      </span>
                      <span className="text-blue_gray-900 font-inter text-left font-normal">
                        <>
                          Partai persatuan monyet
                          <br />
                          Partai sapi perah indonesia
                          <br />
                          Partai pisang masak
                        </>
                      </span>
                    </Text>
                  </div>
                  <Text
                    className="absolute bg-blue-500 border-[3px] border-solid border-white-A700 h-[90px] justify-center pl-[35px] pt-4 pr-[31px] sm:px-5 py-[25px] right-[0] rounded-[50%] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 top-[0] w-[90px]"
                    size="txtInterBold32"
                  >
                    3
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-[37px] items-center justify-between md:ml-[0] ml-[38px] mt-[61px] w-[97%] md:w-full">
              {isUserLoggedIn ? (
                <div className="flex gap-4">
                  <Button
                    className="!text-lime-900_01 border-[5px] border-lime-900_01 border-solid cursor-pointer font-bold leading-[normal] min-w-[503px] sm:min-w-full rounded-[15px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    RESET
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[503px] sm:min-w-full rounded-[15px] md:text-3xl sm:text-[28px] text-[32px] text-center"
                    color="lime_900"
                    size="md"
                    variant="fill"
                  >
                    SUBMIT
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalVotePage;
