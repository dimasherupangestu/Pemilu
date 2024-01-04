import React from "react";
import { Text } from "../components";

const ContentInfo: React.FC = () => {
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-end mt-[77px] p-[131px] md:px-8 sm:px-5 w-full">
      <Text
        className="sm:text-4xl md:text-[38px] text-[40px] text-center text-red-A700"
        size="txtInterBold40RedA700"
      >
        <span>
          PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
          <br />
          YANG PENTING TIDAK MELEGALKAN SLOT
        </span>
      </Text>
    </div>
  );
};

export default ContentInfo;
