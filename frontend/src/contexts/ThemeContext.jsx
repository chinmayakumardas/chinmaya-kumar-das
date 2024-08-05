import React, { createContext, useState } from 'react';

// Create Context
export const ThemeContext = createContext();

// ThemeProvider component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};