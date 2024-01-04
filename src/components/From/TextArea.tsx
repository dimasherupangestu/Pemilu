import React from "react";

interface TextAreaProps {
  name: string;
  cols: number;
  rows: number;
}
const TextArea: React.FC<TextAreaProps> = ({ name, cols, rows }) => {
  return (
    <textarea
      name={name}
      id={name}
      cols={cols}
      rows={rows}
      className="bg-white-A700 border-2 border-gray-400 border-solid mt-[5px] rounded-[15px] w-full px-5 py-3 text-md"
    ></textarea>
  );
};
export default TextArea;
