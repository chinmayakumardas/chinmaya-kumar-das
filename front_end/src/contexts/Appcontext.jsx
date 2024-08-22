import  { createContext } from "react";

// this is the global context for whole app
 export const AppContext=createContext();

export  const AppContextProvider=(props)=>{
const name="chinmaya";
    const contextValue={
        name
    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}