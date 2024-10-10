import  { createContext } from "react"

export const AppContext=createContext();

export const AppContextProvider=(props)=>{
    const name="chinmaya";
    const value={
        name
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}