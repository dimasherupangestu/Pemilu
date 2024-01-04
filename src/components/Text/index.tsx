import React from "react";

const sizeClasses = {
  txtInterBlack40Gray90001: "font-black font-inter",
  txtInterBold36Teal800: "font-bold font-inter",
  txtInterBold32RedA700: "font-bold font-inter",
  txtInterRegular20: "font-inter font-normal",
  txtInterMedium24: "font-inter font-medium",
  txtInterBold40Cyan900: "font-bold font-inter",
  txtInterBlack40Cyan900: "font-black font-inter",
  txtInterMedium20Cyan900: "font-inter font-medium",
  txtInterBold24: "font-bold font-inter",
  txtInterBold40RedA700: "font-bold font-inter",
  txtInterBold24Black900: "font-bold font-inter",
  txtInterBold40: "font-bold font-inter",
  txtInterBold20: "font-bold font-inter",
  txtInterBold16WhiteA700: "font-bold font-inter",
  txtInterBold36Lightgreen900: "font-bold font-inter",
  txtInterBlack40Teal800: "font-black font-inter",
  txtInterRegular24: "font-inter font-normal",
  txtInterBlack40Lightgreen900: "font-black font-inter",
  txtInterBold24WhiteA700: "font-bold font-inter",
  txtInterBlack40: "font-black font-inter",
  txtInterBold36: "font-bold font-inter",
  txtInterBold14: "font-bold font-inter",
  txtInterMedium20WhiteA700: "font-inter font-medium",
  txtInterBold16: "font-bold font-inter",
  txtJuaRegular32: "font-jua font-normal",
  txtInterBold40Lightgreen900: "font-bold font-inter",
  txtInterBold24Gray700: "font-bold font-inter",
  txtInterBold32: "font-bold font-inter",
  txtInterRegular20Black900: "font-inter font-normal",
  txtInterBlack48: "font-black font-inter",
  txtInterBold40Gray90001: "font-bold font-inter",
  txtInterBold32Black900: "font-bold font-inter",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium20Gray90001: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular14Indigo900: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
