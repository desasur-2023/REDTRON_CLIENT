"use client";
import React from "react";
import css from "./Card.module.css";
const Card = ({
  tokenId,
  username,
  id,
  phone,
  email,
  percent_agreement,
  role,
  reload,
  onCloseTwo,
  status
}) => {
  const [open, setOpen] = React.useState(false);
  const [userEdit, setUserEdit] = React.useState({
    phone,
    email,
    percent_agreement   
  });
  console.log(userEdit);
  const onClose = () => {
    setOpen(!open);
  };

  const deleteUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + tokenId,
      },
    });
    reload();
    onCloseTwo();
  };
  const blockUser = async () => {
    const state = status === 'ACTIVE' ? 'DISABLED' : 'ACTIVE';
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + tokenId,
      },
      body: JSON.stringify({
        status: state,
      }),
    });
    reload();
    onCloseTwo();
  };
  const changeRole = async () => {
    const rol = role === 'ADMIN' ? 'TELLER' : 'ADMIN';
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + tokenId,
      },
      body: JSON.stringify({
        role: rol,
      }),
    });
    reload();
    onCloseTwo();
  };

  const handlerInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserEdit({
      ...userEdit,
      [name]: value,
    });
  };
  const handlerPercentChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUserEdit({
      ...userEdit,
      [name]: parseInt(value),
    });
  };

  const editUser = async (user) => {
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + tokenId,
      },
      body: JSON.stringify(user),
    });
  };
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editUser(userEdit);
    reload();
    onClose();
    onCloseTwo();
  };
  return (
    <div className={css.container} onClick={(e) => e.stopPropagation()}>
      {open ? (
        <div>
          <form className={css.form_container} onSubmit={handlerSubmit}>
            <h2>{username}</h2>
            <input
              type="text"
              name="phone"
              value={userEdit.phone}
              onChange={handlerInputChange}
              placeholder="Telefono"
            />
            <input
              type="email"
              name="email"
              value={userEdit.email}
              onChange={handlerInputChange}
              placeholder="Correo"
            />
            <input
              type="number"
              min={1}
              name="percent_agreement"
              value={userEdit.percent_agreement}
              onChange={handlerPercentChange}
              placeholder="Percent Agreement"
            />                    
            <button type="submit">Guardar cambios</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>{username}</h2>
          <div>
            <div className={css.data}>
              <h3>Email:</h3>
              <h3>{email}</h3>
            </div>
            <div className={css.data}>
              <h3>Telefono:</h3>
              <h3>{phone}</h3>
            </div>
            <div className={css.data}>
              <h3>Rol:</h3>
              <h3>{role}</h3>
            </div>
            <div className={css.data}>
              <h3>Percent Agreement:</h3>
              <h3>{percent_agreement}</h3>
            </div>
            <div className={css.data}>
              <h3>Estatus:</h3>
              <h3>{status}</h3>
            </div>
            <div className={css.btn}>
              <button onClick={deleteUser}>Eliminar</button>
              <button onClick={blockUser}>Bloquear</button>
              <button onClick={onClose}>Editar</button>
              <button onClick={changeRole}>Cambiar Rol</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
