import SignupForm from "./SignupForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup",
};

const Signup = () => {
  return (
    <div>
      <h2 className="text-3xl mt-5 mb-5 ">Signup</h2>
      <SignupForm />
    </div>
  );
};

export default Signup;
