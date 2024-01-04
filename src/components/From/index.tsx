import React from "react";
import Label, { LabelProps } from "./label";
import InputFrom from "./input";

interface FromProps {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "password";
}
const FromInput: React.FC<FromProps> = ({ name, label, placeholder, type }) => {
  return (
    <div className="s">
      <Label htmlFor={name as LabelProps["htmlFor"]}>{label}</Label>
      <InputFrom type={type} placeholder={placeholder} name={name} />
    </div>
  );
};
export default FromInput;
