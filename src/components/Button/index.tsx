import React from "react";

const shapes = { square: "rounded-none", round: "rounded-[10px]" } as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    lime_900_01: "bg-lime-900_01 text-white-A700",
    lime_900: "bg-lime-900 text-white-A700",
    gray_300_01: "bg-gray-300_01 text-black-900",
    red_A700: "bg-red-A700 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-[5px]",
  sm: "px-2 py-[11px]",
  md: "p-3.5",
  lg: "p-[21px] sm:px-5",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
