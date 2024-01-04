import React from "react";

export interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-lg my-4 mb-1 font-inter">
      {children}
    </label>
  );
};

export default Label;
