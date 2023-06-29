"use client";
import { useContext, createContext } from "react";

interface AuthContextValue {
  usersDb?: Array<any> | null;
}

export const UsersContext = createContext<AuthContextValue>({
  usersDb: null,
});

export const useUsersContext = () => useContext(UsersContext);
