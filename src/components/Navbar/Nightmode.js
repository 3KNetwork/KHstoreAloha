import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyles = createGlobalStyle`
  

  body {
    
    background: ${({ theme }) => theme.bg};
    transition: background-color 0.5s ease;
  }
`;

const lightTheme = {
  bg: "white",
  shadow: "#cac2bc",
  light: "#fff",
};

const darkTheme = {
  bg: "#914E75",
  shadow: "#2e4e5c",
  light: "#4d7281",
};

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        defaultChecked=""
        lightTheme={isLight}
        onClick={toggleTheme}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
        <strong>Arkaplanı Degiş</strong>
      </label>
    </div>
  );
};

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {});

  return [theme, toggleTheme];
};

export default function Nightmode() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}
