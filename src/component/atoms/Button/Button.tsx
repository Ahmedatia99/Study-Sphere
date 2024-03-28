import React from "react";
import { HTMLAttributes } from "react";
import classNames from "classnames";
import "./colored.css";

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
    primary: " colored",
    second: "bg-white  text-black",
  }[variant];

  return (
    <button
      className={classNames(
        `flex items-center justify-center rounded-lg transition-all text-sm mr-3 text-white`,
        variants,
        paddingname
      )}
    >
      {action}
    </button>
  );
};
