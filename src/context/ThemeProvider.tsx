import { useReducer } from "react";
import { ThemeContext, ThemeState } from "./ThemeContext";
import { lightTheme, themeReducer } from "./ThemeReducer";

interface props {
    children: JSX.Element | JSX.Element[]
}

// Componente proveedor del estado
export const ThemeProvider = ({ children }: props) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme);

    const setDarkTheme = () => {
        dispatch({ type: "set_dark_theme" });
    }

    const setLightTheme = () => {
        dispatch({ type: "set_light_theme" });
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}
        >
            {children}
        </ThemeContext.Provider>
    );

}