import React from "react";
import LayoutCard from "../components/CardCaleg/Card";
import data from "../services/paslon.json";
const CardAdmin: React.FC = () => {
  return (
    <div className="container flex justify-center items-center flex-wrap max-w-full h-full mx-auto gap-6 mt-4">
      <LayoutCard varian="bg-amber-300" data={data} />
    </div>
  );
};
export default CardAdmin;
