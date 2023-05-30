import { LoginForm } from "./LoginForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <div>
      <h2 className="text-3xl mt-5 mb-5 ">Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
