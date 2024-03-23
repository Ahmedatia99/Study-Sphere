import React from "react";
import { HTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "second ";
  action: string;
  displays?: "true" | "false";
  paddingname?: string;
}

export const Button = ({
  action,
  variant = "primary",
  paddingname,
}: ButtonProps) => {
  const variants = {
    primary: "bg-morning text-white desktop:px-4 desktop:py-3 md:p-2 sm:p-2",
    second: "bg-transparent desktop:px-4 desktop:py-3 md:p-2",
  }[variant];

  return (
    <button
      className={classNames(
        `flex items-center justify-center rounded-lg mr-2  transition-all text-sm `,
        variants,
        paddingname
      )}
    >
      <span className={classNames("px-2")}>{action}</span>
    </button>
  );
};
