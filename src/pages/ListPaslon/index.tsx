import React from "react";
import { Text } from "../../components";
import Navbar from "../../layout/Navbar";
import data from "../../services/paslon.json";
import TableComponent from "../../layout/TabelPaslon";

const ListPaslonPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[619px] w-full">
        <Text
          className="mt-[70px] text-5xl sm:text-[38px] md:text-[44px] text-light_green-900"
          size="txtInterBlack48"
        >
          LIST PASLON
        </Text>
        <div className="flex flex-col items-center justify-start max-w-[1095px] mt-[58px] mx-auto md:px-5 w-full ">
          <TableComponent data={data} />
        </div>
      </div>
    </>
  );
};

export default ListPaslonPage;
