import Button from "@/components/Button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <div className="flex justify-center	items-center h-screen">
      <section>
        <h1 className="text-3xl font-semibold	mb-4">Welcome to Todo app</h1>
        <section className="flex justify-center	items-center gap-4">
          <Link href="/signup">
            <Button title="Signup" type="primary" />
          </Link>
          <Link href="/login">
            <Button title="Login" type="secondary" />
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Home;
