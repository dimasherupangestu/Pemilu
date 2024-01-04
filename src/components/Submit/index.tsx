import React from "react";

interface SubmitProps {
  name: string;
  className: string;
  type: "button" | "submit" | "reset";
}

const Submit: React.FC<SubmitProps> = ({ name = "...?", type = "submit" }) => {
  return (
    <button
      className={`cursor-pointer font-bold uppercase leading-[normal] w-full sm:min-w-full rounded-[15px] md:text-3xl sm:text-[28px] text-2xl text-center bg-[#5E5A00] text-white-A700 py-3.5 px-4 mt-5 `}
      type={type}
    >
      {name}
    </button>
  );
};

export default Submit;
