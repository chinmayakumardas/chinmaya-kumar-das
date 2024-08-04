import { createContext, useState } from "react";

export const Appcontext=createContext({});

export const AppContextProvider=({children})=>{
    const [name,setName]=useState();
    const value={
            name,setName
    }
    return (<Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>)
}

