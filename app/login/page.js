"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (data.error) {
      console.log(data.error);
    }

    if (data.ok) {
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label>email</label>
        <input
          type="email"
          name="password"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
