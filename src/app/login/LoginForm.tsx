"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";

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

      <Button title="Login" type="secondary" />
    </form>
  );
};
