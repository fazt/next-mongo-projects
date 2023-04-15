"use client";

import { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Register</h1>

        <label>email</label>
        <input
          type="email"
          name="password"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
