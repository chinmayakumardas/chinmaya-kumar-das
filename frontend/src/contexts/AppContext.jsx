import { createContext, useState } from "react";

export const Appcontext = createContext();

export const AppContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const social = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/kumar.chinmay.7334/",
      iconUrl: "",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/chinmayakdas/",
      iconUrl: "",
    },
    {
      name: "Twitter",
      url: "https://x.com/Chinmayakmrdas",
      iconUrl: "",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/chinmaya.kumar.das/",
      iconUrl: "",
    },
    {
      name: "GitHub",
      url: "https://github.com/chinmaya-kumar-das",
      iconUrl: "",
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