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
}) => {
  const [open, setOpen] = React.useState(false);
  const [userEdit, setUserEdit] = React.useState({
    phone: "",
    email: "",
    percent_agreement: 0,
    password: "",
    role: "",
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
    const response = await fetch(`http://localhost:3001/users/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + tokenId,
      },
      body: JSON.stringify({
        status: "DISABLED",
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
            <input
              type="text"
              name="password"
              value={userEdit.password}
              onChange={handlerInputChange}
              placeholder="Contraseña"
            />
            <input
              type="text"
              name="role"
              value={userEdit.role}
              autoCapitalize="characters"
              onChange={handlerInputChange}
              placeholder="Rol"
              required
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
            <div className={css.btn}>
              <button onClick={deleteUser}>Eliminar</button>
              <button onClick={blockUser}>Bloquear</button>
              <button onClick={onClose}>Editar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
