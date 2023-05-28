import { ButtonProps } from "@/types";
import React from "react";

const Button = ({ title, type }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-2 ${
        type === "primary" ? "bg-amber-300	" : "bg-emerald-500	"
      } rounded-md hover:drop-shadow-xl transition duration-300 ease`}
    >
      {title}
    </button>
  );
};

export default Button;
