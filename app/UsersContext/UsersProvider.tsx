"use client";
import React, { useEffect } from "react";
import { UsersContext } from "./UsersContext";
import { useUserContext } from "../UserContext/UserContext";

export const UsersProvider = ({ children }: any) => {
  const [usersDb, setUsersDB] = React.useState();
  const { userDb } = useUserContext();
  const tokenID = userDb?.token;
  console.log(tokenID)
  useEffect(() => {
    tokenID && getUsersDb();
  }, [userDb.token]);

  // const headers = {
  //   "Content-Type": "application/json",
  //   authorization: "Bearer " + tokenID,
  // };
  // console.log(headers);
  const getUsersDb = async () => {
    const response = await fetch("http://localhost:3001/users", {
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + tokenID,
      }
    }).then((res) => res.json());
    setUsersDB(response.data);
    console.log('response',response);
  };

  return (
    <UsersContext.Provider value={{ usersDb }}>
      {children}
    </UsersContext.Provider>
  );
};
