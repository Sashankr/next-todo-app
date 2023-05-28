import Button from "@/components/Button";
import Input from "@/components/Input";

const Signup = () => {
  return (
    <div>
      <h2 className="text-3xl mt-5 mb-5 ">Signup</h2>
      <form action="">
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

export default Signup;
