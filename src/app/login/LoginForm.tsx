"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        type="email"
        placeholder="Ex: rohit@gmail.com"
        label="Email"
        name="email"
      />
      <Input type="password" label="Password" name="password" />
      <Link href="/dashboard">
        <Button title="Login" type="secondary" />
      </Link>
    </form>
  );
};
