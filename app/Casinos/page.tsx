"use client";

import css from "./Casinos.module.css";
import { useCasinosContext } from "../CasinoContext/CasinoContext";
import Link from "next/link";

import React from "react";

export default function Page() {
  const {casinosDb} = useCasinosContext();
  
  return (
    <main className="jc-sa">      
        <div>
          <div className={css.tri}>
            {casinosDb?.map(e => (
            <div key={e.id}>
            <Link href='/Casino/[id]' as={`/Casino/${e.id}`}>
              <img src={e.imageUrl} alt="casino" width={150} height={150} />
              <h3>{e.name}</h3>
            </Link>
            </div>
            )
             )}
            
        </div>
      </div>
    </main>
  );
}
