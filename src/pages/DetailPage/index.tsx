import React from "react";

import { Img, Text } from "../../components";
import Navbar from "../../layout/Navbar";
import Footerr from "../../layout/Footer";

const DetailPagePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blue_gray-100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1140px] mx-auto p-[27px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[100px] w-[98%] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-[58%] md:w-full">
              <div className="flex flex-row gap-2 items-center justify-start w-[18%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                >
                  <path
                    d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM21 7L1 7V9L21 9V7Z"
                    fill="black"
                  />
                </svg>
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterRegular20Black900"
                >
                  Beranda
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterRegular20Black900"
                >
                  BERITA HARI INI
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start mt-[34px] w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtInterBold32Black900"
              >
                <span className="md:text-[38px] sm:text-4xl text-lime-900 font-inter text-[40px] font-bold">
                  KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK
                </span>
                <span className="md:text-[34px] sm:text-[32px] text-black-900 font-inter text-4xl font-bold">
                  <>
                    {" "}
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-2xl font-normal">
                  <>
                    Super Admin
                    <br />
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-black-900 font-inter text-2xl font-normal">
                  <>
                    Senin, 03 Jan 2023
                    <br />
                  </>
                </span>
              </Text>
              <Img
                className="h-[530px] sm:h-auto object-cover w-full"
                src="../src/images/bg1.png"
                alt="1699844237water"
              />
            </div>
            <Text
              className="mt-[62px] text-2xl md:text-[22px] text-black-900 text-justify sm:text-xl"
              size="txtInterMedium24"
            >
              <>
                Praesent ac tortor vel urna fermentum luctus. Nam posuere justo
                ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus
                tellus. Proin fermentum purus id lectus imperdiet, vel feugiat
                enim interdum. Sed non diam vel mi tristique interdum. Integer
                bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu
                dapibus ligula massa vel ligula. Nulla facilisi. Integer sit
                amet congue massa. Suspendisse potenti. Sed interdum, lacus ac
                ultrices facilisis, ligula enim pellentesque elit, vel varius
                nisi odio at purus. Sed suscipit purus quis tortor posuere, in
                varius est euismod. Mauris aliquam urna non elit faucibus, eu
                fermentum turpis mattis. Quisque vel nisl vitae sapien congue
                dapibus. Vivamus auctor, velit ut condimentum bibendum, purus
                lacus scelerisque ligula, nec gravida arcu velit id libero. In
                hac habitasse platea dictumst.
                <br />
                <br />
                Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet
                mi ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu
                sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, non
                efficitur sapien scelerisque et. Maecenas facilisis eros id enim
                tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada
                mi, vitae convallis libero. In hac habitasse platea dictumst.
                Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet.
                Integer vitae ex ac libero fermentum volutpat ut vitae sapien.
                Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt
                varius vel sit amet nunc. Integer tincidunt risus sit amet odio
                euismod, a finibus ligula blandit. Integer euismod, purus ut
                malesuada varius, lectus orci feugiat massa, ut egestas enim
                massa vel urna.
                <br />
                <br />
                Vivamus id dictum augue. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Nulla
                facilisi. Curabitur aliquet ligula eu nisl bibendum, vel
                tincidunt justo feugiat. Nam dapibus, ligula id dapibus
                fermentum, odio libero luctus nunc, et scelerisque sapien libero
                vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa.
                Nullam fermentum, felis ac bibendum malesuada, lectus felis
                fermentum dolor, a fermentum sapien mauris vel dui. Fusce vel
                turpis eu purus fermentum tincidunt a vel elit. Phasellus
                efficitur sapien vel efficitur rhoncus. Integer vel risus ut
                neque elementum gravida. Morbi rhoncus, ligula nec posuere
                tristique, ligula lacus dapibus urna, a lacinia sem metus id
                libero. Suspendisse luctus ligula eu mauris auctor, non semper
                elit feugiat.
                <br />
                <br />
                Praesent ac tortor vel urna fermentum luctus. Nam posuere justo
                ut efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus
                tellus. Proin fermentum purus id lectus imperdiet, vel feugiat
                enim interdum. Sed non diam vel mi tristique interdum. Integer
                bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu
                dapibus ligula massa vel ligula. Nulla facilisi. Integer sit
                amet congue massa. Suspendisse potenti.
              </>
            </Text>
          </div>
        </div>
        <Footerr />
      </div>
    </>
  );
};

export default DetailPagePage;
