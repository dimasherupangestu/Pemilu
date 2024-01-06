import React from "react";
import { Img } from "..";

interface Paslon {
  nama: string;
  no: number;
  visiMisi: string;
  koaloasi: string;
  alamat: string;
}
interface propsVarianCard {
  varian: "bg-amber-300" | "bg-red-400" | "bg-white";
  data: Paslon[];
}
const LayoutCard: React.FC<propsVarianCard> = ({ varian, data }) => {
  return (
    <div className="flex items-center justify-start w-11/12 h-full gap-4 md:flex-wrap ">
      {data.map((paslon) => (
        <div
          key={paslon.no}
          className="flex flex-col gap-[4px] justify-start w-full"
        >
          <div className="h-[76px] mx-auto  relative w-1/5 my-3">
            <div
              className={`${varian} h-[75px] m-auto outline outline[5px] outline-light_green-900 rounded-full w-full`}
            >
              <div className="absolute h-max inset-[0] justify-center m-auto font-bold sm:text-4xl md:text-[38px] text-[40px] text-light_green-900 w-max">
                <h1>{paslon.no}</h1>
              </div>
            </div>
          </div>
          <div
            className={`${varian} flex flex-col items-center justify-start p-[18px] rounded-[15px] shadow-bs6 w-full`}
          >
            <div className="flex flex-col items-start justify-start my-[13px] w-full">
              <Img
                className="h-[262px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="../../src/images/moyet.png"
                alt="imageOne"
              />
              <div className="mt-2.5 sm:text-4xl md:text-[38px] text-[40px] text-light_green-900 font-bold">
                <h1>{paslon.nama}</h1>
              </div>
              <div className="text-light_green-900 text-shadow-ts text-xl">
                <span>
                  Akumulasi :45%
                  <br />
                  Jumlah Vote : 117 Voters
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LayoutCard;
