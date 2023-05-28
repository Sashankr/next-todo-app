import Button from "@/components/Button";
import Input from "@/components/Input";

const Login = () => {
  return (
    <div>
      <h2 className="text-3xl mt-5 mb-5 ">Login</h2>
      <form action="">
        <Input
          type="email"
          placeholder="Ex: rohit@gmail.com"
          label="Email"
          name="email"
        />
        <Input type="password" label="Password" name="password" />

        <Button title="Login" type="secondary" />
      </form>
    </div>
  );
};

export default Login;
