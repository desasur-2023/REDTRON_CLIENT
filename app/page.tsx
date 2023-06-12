"use client";
import Image from "next/image";
import Logo from "/app/assets/logo.png";

export default function Home() {
  return (
    <main>
      <Image src={Logo} alt="REDTRON Logo" width={191} height={182} priority />
      <h2>BIENVENIDO!</h2>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <a className="align-right" href="">Olvide mi Contraseña</a>

        <button>ENTRAR</button>
      </form>
    </main>
  );
}
