import { createContext } from "react";

export interface ThemeState {
    currentTheme: "light" | "dark",
    background: string,
    navBackground: string,
    text: string,
    elements: string,
}

// Estado que manejará el Context
interface ThemeContextProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextProps);