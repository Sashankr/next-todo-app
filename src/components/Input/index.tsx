import { InputProps } from "@/types";
import React from "react";

const Input = ({ type, placeholder, name, label }: InputProps) => {
  return (
    <div className="mb-4">
      <label className="block mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="py-1 px-2 w-1/2 border border-grey-300 rounded-md "
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Input;
