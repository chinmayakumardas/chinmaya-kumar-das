import { createContext, useState } from "react";

export const Appcontext = createContext();

export const AppContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const social = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/kumar.chinmay.7334/",
      iconUrl: "",
      color:'#316FF6',
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/chinmayakdas/",
      iconUrl: "",
      color:'#0072b1',
    },
    {
      name: "Twitter",
      url: "https://x.com/Chinmayakmrdas",
      iconUrl: "",
      color:'',
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/chinmaya.kumar.das/",
      iconUrl: "",
      color:'#E1306C',
    },
    {
      name: "GitHub",
      url: "https://github.com/chinmaya-kumar-das",
      iconUrl: "",
      color:'#f5f5f5',
    },
  ];
  const values = {
    name,
    setName,
    social,
  };
  return (
    <Appcontext.Provider value={values}>{children}</Appcontext.Provider>
  );
};