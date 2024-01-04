import React from "react";
import { Img } from "../components";

interface Paslon {
  nama: string;
  no: number;
  "visi/misi": string;
  koaloasi: string;
}

interface TableProps {
  data: Paslon[];
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-md  rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border border-slate-300 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 border border-slate-300 border-separate"
            >
              No. Urut
            </th>
            <th
              scope="col"
              className="px-6 py-3 border border-slate-300 border-separate"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 border border-slate-300 border-separate"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 border border-slate-300 border-separate"
            >
              Visi & Misi
            </th>
            <th
              scope="col"
              className="px-6 py-3 border border-slate-300 border-separate"
            >
              Koalisi
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((paslon, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-slate-800"
            >
              <th
                scope="col"
                className=" font-medium text-lg whitespace-nowrap dark:text-white border border-slate-300 border-separate"
              >
                {paslon.no}
              </th>
              <td className="px-6 py-4 border border-slate-300 border-separate">
                <Img
                  className="md:h-auto md:ml-[0] ml-[40] object-cover] h-[90px] mx-auto rounded-lg"
                  src={`../src/images/moyet.png`}
                  alt="moyet"
                />
              </td>
              <td className="px-6 py-4 border border-slate-300 border-separate">
                {paslon.nama}
              </td>
              <td className="px-6 py-4 border border-slate-300 border-separate">
                {paslon["visi/misi"].split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </td>
              <td className="px-6 py-4 border border-slate-300 border-separate">
                {paslon.koaloasi.split(".").join("\n")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
