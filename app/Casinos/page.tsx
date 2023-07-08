/* eslint-disable @next/next/no-img-element */
"use client";

import css from "./Casinos.module.css";
import { useCasinosContext } from "../CasinoContext/CasinoContext";
import Link from "next/link";

import React from "react";
import { Modal } from "../Components/modal/modal";
import Casino from "../Components/Casino/Casino";

export default function Page() {
  const { casinosDb } = useCasinosContext();
  const [open, setOpen] = React.useState(false);
  const [casino, setCasino] = React.useState(null);
  const onClose = () => setOpen(!open);

  const openCasino = (casino) => {
    setOpen(!open);
    setCasino(casino);
  };

  return (
    <main className="jc-sa">
      
        {open ? (
          <Modal onClose={onClose}>
            <Casino
              id={casino?.id}
              name={casino?.name}
              imageUrl={casino?.imageUrl}
              onClose={onClose}
            />
          </Modal>
        ) : (
          <div>
            <h1>Casinos Redtron</h1>
            <div className={css.tri}>
              {casinosDb?.map((e) => (
                <div key={e.id} onClick={() => openCasino(e)}>
                  <img src={e.imageUrl} alt="casino" width={150} height={150} />
                  <h3>{e.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}
      
    </main>
  );
}
