"use client"

import { ReactNode, createContext, useEffect, useState } from "react";

type Theme = "light" | "dark"

interface ThemeContextType {
    theme:Theme;
    setTheme:React.Dispatch<React.SetStateAction<Theme>>;
    toggle: () => void; 
}

export const ThemeContext = createContext<ThemeContextType>( {} as ThemeContextType )

const getFromLocalStorage= ()=>{ 
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "dark";
      }
}
export const ThemeContextProvider = ({children}:{children:React.ReactNode})=> {
    const [theme,setTheme] = useState<Theme>(()=>{
        return getFromLocalStorage() as Theme
    })
    const toggle = ()=>{
        setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);
    return <ThemeContext.Provider value={{ theme, setTheme,toggle }}> {children} </ThemeContext.Provider>
}