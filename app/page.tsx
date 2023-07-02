"use client";
import Image from "next/image";
import Logo from "/app/assets/logo.png";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const handlerInputChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [name]: value,
    });
  };
  const adminLogin = async (input) => {
    console.log(input);
    
    await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(input),
    });
  };

  const handlerSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   await adminLogin(input);
    
  };

  return (
    <main>
      <Image src={Logo} alt="REDTRON Logo" width={191} height={182} priority />
      <h2>BIENVENIDO!</h2>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="username"
          value={input.username}
          onChange={handlerInputChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handlerInputChange}
          required
        />
        <a className="align-right" href="">
          Olvide mi Contraseña
        </a>
        <button type="submit">ENTRAR</button>
      </form>
    </main>
  );
}
