import React from "react";
interface InputProps {
  name: string;
  placeholder: string;
  type?: "text" | "password";
}
const InputFrom: React.FC<InputProps> = ({ name, placeholder, type }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        className="bg-white-A700 border-2 border-gray-400 border-solid h-[60px] mt-1 rounded-xl w-full px-3"
      />
      <input type="text" />
    </>
  );
};

export default InputFrom;
