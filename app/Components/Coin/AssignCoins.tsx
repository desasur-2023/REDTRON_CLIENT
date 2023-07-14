import React, { useState } from "react";
import { useUserContext } from "../../UserContext/UserContext";

const AssignCoins = () => {
  const { userDb } = useUserContext();
  const tokenId = userDb?.token;
  const [input, setInput] = useState({
    userId: "",
    amount: 0,
  });

  const postCoins = async (obj, token) => {
    try {
      const response = await fetch("http://localhost:3001/coinsMovements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token,
        },
        body: JSON.stringify(obj),
      });

      if (response.ok) {
        console.log("Fichas asignadas correctamente");
      } else {
        console.log("Error al asignar fichas");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = ({target: { name, value }}:React.ChangeEvent<HTMLSelectElement>) => {    
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postCoins(input, tokenId);
    setInput({
      userId: "",
      amount: 0,
    });
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <form  onSubmit={handleSubmit}>
        <h2>Asignar Fichas</h2>
        <label>
          Usuario:
          <select
            name="userId"
            value={input.userId}
            onChange={handleInputChange}
          >
            <option value=""></option>
          </select>
        </label>
        <label>Cantidad de fichas:</label>
        <input type="number" name="amount" />
      </form>
    </div>
  );
};

export default AssignCoins;
