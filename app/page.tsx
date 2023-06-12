import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        className=""
        src="/app/assets/logo.png"
        alt="REDTRON Logo"
        width={191}
        height={182}
        priority
      />
      <h2>BIENVENIDO!</h2>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />

        <a href="">Olvide mi Contraseña</a>

        <button>ENTRAR</button>
      </form>
    </main>
  );
}
