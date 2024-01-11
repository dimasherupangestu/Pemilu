import React from "react";
interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputFrom: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        className="bg-white-A700 border-2 border-gray-400 border-solid h-[60px] mt-1 rounded-xl w-full px-3"
      />
    </>
  );
};

export default InputFrom;
