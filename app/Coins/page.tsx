/* eslint-disable @next/next/no-img-element */
"use client";

import { useCoinsContext } from "../CoinsContext/CoinsContext";


import React from "react";
import Coin from "../Components/Coin/Coin";
import AssignCoins from "../Components/Coin/AssignCoins"

export default function Page() {
  const { coinsDb, charge, setCharge } = useCoinsContext();

  return (
    <main className="">
        <div className="">
          <h1>Asignar Fichas</h1>
          <AssignCoins/>
          </div>
    </main>
  );
}