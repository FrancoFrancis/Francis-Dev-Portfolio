// context.js
"use client"

import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, darkMode: !state.darkMode };
    case "SET":
      return { ...state, darkMode: !!action.payload };
    default:
      return state;
  }
};

const getInitialTheme = () => {
  try {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem("theme");
      if (stored === "dark") return { darkMode: true };
      if (stored === "light") return { darkMode: false };
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      return { darkMode: prefersDark };
    }
  } catch (e) {}
  return { darkMode: false };
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, undefined, getInitialTheme);

  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", state.darkMode);
      window.localStorage.setItem("theme", state.darkMode ? "dark" : "light");
    } catch (e) {
      // ignore in non-browser environments
    }
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};



