import { HTMLInputTypeAttribute } from "react";

export interface ButtonProps {
  title: String;
  type: String;
}

export interface InputProps {
  type: HTMLInputTypeAttribute;
  placeholder?: HTMLInputTypeAttribute;
  label: String;
  name: HTMLInputTypeAttribute;
}
