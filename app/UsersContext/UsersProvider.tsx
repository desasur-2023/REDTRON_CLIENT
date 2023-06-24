'use client'
import React, { useEffect } from 'react'
import { UsersContext } from "./UsersContext";
import { useUserContext } from '../UserContext/UserContext';





export const UsersProvider = ({ children }:any) => {
    const [usersDb, setUsersDB] = React.useState([]);
    const {userDb} = useUserContext();
console.log(usersDb)
    useEffect(() => {
      userDb.role === 'ADMIN' && !usersDb.length && getUsersDb();
      
    }, [usersDb])
    

    const getUsersDb = async()=>{     
        const tokenID = userDb.token   
        const response = await fetch(
        'http://localhost:3001/auth/users',
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",  
            Authorization: "Bearer " + tokenID,         
          },             
        }
      ).then(res => res.json());
      setUsersDB(response);    
  }
    
  
    return (   
  
      <UsersContext.Provider value={{ usersDb }}>
        {children}
      </UsersContext.Provider>
      
    );
  };