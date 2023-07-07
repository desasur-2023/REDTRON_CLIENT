/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { useUsersContext } from "../../UsersContext/UsersContext";
import css from "./Casino.module.css";

const Casino = ({ id, name, imageUrl }) => {
  const { usersDb, charge, setCharge } = useUsersContext();
  const [option, setOption] = useState({
    usersId: [],   
    casinoId: id,
  });

  const usersname = []
  console.log(usersname);
  console.log(option);
  const handlerOptionChange = ({ target: {  value } }) => {
    if (option.usersId.includes(value)) return;
    setOption({
      ...option,
      usersId: option.usersId.concat(value),     
    });
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className={css.container}>
      <div className={css.title}>
        <h1>{name}</h1>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={css.boxes}>
        <div className={css.box1}>{usersDb?.map((e) => e.user)}</div>
        <div className={css.box2}>
          <select
            name="Cajeros"
            placeholder="cajeros"
            onChange={handlerOptionChange}
          >
            <option>Cajeros</option>
            {usersDb?.map((e) => (
              <option
                key={e.id}
                value={e.id}
               
              >
                {e.username}
              </option>
            ))}
          </select>
          <div className={css.box3}>
            {usersname?.map((el) => (
              <h3 key={el}>{el}</h3>
            ))}
          </div>
          <button>Agregar cajero/os</button>
        </div>
      </div>
    </div>
  );
};

export default Casino;
