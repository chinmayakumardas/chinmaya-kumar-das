import { createContext,useState } from "react";
const AppContext=createContext()

export const AppContextProvider=({ children })=>{

    const[work,setWork]=useState([
        {
            workname:'StudyNotion',
            tech:['npm','MongoDB','Express','React','Node JS','Tailwind'],
            url:'',
            github:'',
            asset:[
                '',''
            ],
            icons:[]
        },
        {
            workname:'BloodCare',
            tech:['MongoDB','Express','React','Node JS','Tailwind'],
            url:'',
            github:'',
            asset:[
                '',''
            ],
            icons:[]
        },
    ]);

    const [social,setSocial]=useState([
        {
            name:'Facebook',
            url:'',
            icon:''
        }
    ])

    const value={
        work,setWork,social,setSocial
    }
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}