import React, { createContext, useState } from 'react';

// Create Context
export const ThemeContext = createContext();

// ThemeProvider component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const [bgPrimary, setBgPrimary] = useState('#222222');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, bgPrimary, setBgPrimary }}>
      {children}
    </ThemeContext.Provider>
  );
};