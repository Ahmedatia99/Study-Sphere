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
    primary: "bg-morning text-white px-4 py-2",
    second: "bg-transparent px-4 py-2",
  }[variant];

  return (
    <button
      className={classNames(
        `flex items-center justify-center rounded-lg mr-2 mobile:w-full transition-all`,
        variants,
        paddingname
      )}
    >
      <span className={classNames("text-[16px] px-2 ")}>{action}</span>
    </button>
  );
};
