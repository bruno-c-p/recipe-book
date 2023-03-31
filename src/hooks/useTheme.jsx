import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) throw new Error("useTheme() must be used within a ThemeProvider");
    return context;
}