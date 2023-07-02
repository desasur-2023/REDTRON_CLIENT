"use client";
import Image from "next/image";
import css from "./Casinos.module.css";

import Link from "next/link";
import casino1 from "../assets/Gabriela lia Noble_.jpg";
import casino2 from "../assets/Safari-King.png";
import casino3 from "../assets/icon-vikingoapp.png";
import casino4 from "../assets/konabet.png";
import casino5 from "../assets/megafaron.jpg";
import casino6 from "../assets/zeus.png";
import React from "react";

export default function Page() {
  return (
    <main className="jc-sa">
      <div >
        <div>
          <div className={css.tri}>
            <Link href={"/"}>
              <Image src={casino1} alt="casino" width={150} height={150} />
            </Link>
            <Link href={"/"}>
              <Image src={casino2} alt="casino" width={150} height={150} />
            </Link>
            <Link href={"/"}>
              <Image
                src={casino3}
                alt="casino"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>
          <div className={css.tri}>
            <Link href={"/"}>
              <Image
                src={casino4}
                alt="casino"
                width={150}
                height={150}
                priority
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={casino5}
                alt="casino"
                width={150}
                height={150}
                priority
              />
            </Link>
            <Link href={"/"}>
              <Image
                src={casino6}
                alt="casino"
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
