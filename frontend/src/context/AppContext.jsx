
import { createContext, useState } from "react"

export const AppContext=createContext();

export function AppContextProvider ({children})  {
    //here all state declaired
    const [name,setName]=useState("Chinmaya");

    //then here fuction

    //here it assigned to a vriable
    const value={
        name,setName
    }
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

