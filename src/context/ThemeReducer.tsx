import { ThemeState } from "./ThemeContext"

type ThemeAction =
    | { type: "set_light_theme" }
    | { type: "set_dark_theme" }


export const darkTheme: ThemeState = {
    currentTheme: "dark",
    background: "#202c37" /* Dark Mode Background */,
    text: "#ffffff" /* Dark Mode Text & Light Mode Elements */,
    elements: "#2b3945" /* Dark Mode Elements */,
    navBackground: "#2b3945" /* Navbar Background */,
}

export const lightTheme: ThemeState = {
    currentTheme: "light",
    background: "#fafafa" /* Light Mode Background */,
    navBackground: "#FFFFFF" /* Navbar Background */,
    text: "#111517" /* Light Mode Text */,
    elements: "#858585" /* Light Mode Input */,
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case "set_dark_theme":
            return { ...darkTheme }

        case "set_light_theme":
            return { ...lightTheme }

        default:
            return state;
    }
}