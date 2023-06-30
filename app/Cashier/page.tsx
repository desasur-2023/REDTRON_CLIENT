"use client";
import React, { useEffect } from "react";
import { useUsersContext } from "../UsersContext/UsersContext";
import { FaUser } from "react-icons/fa";
import css from "./Cashier.module.css";
import { useUserContext } from "../UserContext/UserContext";
import { Modal } from "../Components/modal/modal";
import CreateCashier from "../Components/CreateCashier/CreateCashier";
import { useRouter } from "next/navigation";
import Card from "../Components/Card/Card";
const Page = () => {
  const router = useRouter();
  const { usersDb,charge,setCharge } = useUsersContext();
  const { userDb } = useUserContext();
  const tokenId = userDb?.token;
  const [open, setOpen] = React.useState(false);
  const [openUser, setOpenUser] = React.useState(false);
  const [userSelected, setUserSelected] = React.useState(null);
  console.log(usersDb)
  const onClose = () => {
    setOpen(!open);
  };
  const onCloseTwo = () => {
    setOpenUser(!openUser);
  };
  const reload = () => {setCharge(!charge)};
  useEffect(() => {
    userDb && userDb.role === "ADMIN" ? null : router.push("/");
  }, [router, userDb]);

  const openDataUser = (user) => {
    setUserSelected(user);
    setOpenUser(!openUser);
  };

  return (
    <main className="jc-sa">
      {open ? (
        <Modal onClose={onClose}>
          <div className="div">
            <CreateCashier tokenId={tokenId} onClose={onClose} reload={reload} />
          </div>
        </Modal>
      ) : openUser ? (
        <Modal onClose={onCloseTwo}>
          <div className="div">
            <Card
                tokenId={tokenId}
                username={userSelected.username}
                id={userSelected.id}
                phone={userSelected.phone}
                email={userSelected.email}
                percent_agreement={userSelected.percent_agreement}
                role={userSelected.role} reload={reload} onCloseTwo={onCloseTwo}            />
          </div>
        </Modal>
      ) : (
        <div className="div">
          <input type="text" placeholder="buscar..." />
          <button className="btn-create" onClick={() => setOpen(!open)}>
            <span>+</span>
            CREAR NUEVO
          </button>
          <div className="users">
            <ul className={css.container_cashiers}>
              {usersDb.map((user) => (
                <li
                  key={user.id}
                  className={css.cashiers_data}
                  onClick={() => openDataUser(user)}
                >
                  <h1>
                    <FaUser />
                  </h1>
                  <h2>{user.username}</h2>
                  <h3>{user.role}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
