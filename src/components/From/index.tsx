import React from "react";
import Label, { LabelProps } from "./label";
import InputFrom from "./input";

interface FromProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FromInput: React.FC<FromProps> = ({
  name,
  label,
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <div className="">
      <Label htmlFor={name as LabelProps["htmlFor"]}>{label}</Label>
      <InputFrom
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default FromInput;
