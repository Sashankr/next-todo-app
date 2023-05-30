"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";

const SignupForm = () => {
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          type="text"
          placeholder="Ex: Rohit"
          label="First Name"
          name="firstName"
        />
        <Input
          type="text"
          placeholder="Ex: Shrma"
          label="Last Name"
          name="lastName"
        />
        <Input
          type="email"
          placeholder="Ex: rohit@gmail.com"
          label="Email"
          name="email"
        />
        <Input type="password" label="Password" name="password" />
        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
        />
        <Button title="Signup" type="primary" />
      </form>
    </div>
  );
};

export default SignupForm;
