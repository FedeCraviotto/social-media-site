import { createContext, useEffect, useState } from "react";
// Instanciamos - creamos-  un contexto
export const DarkModeContext = createContext();
// A este de abajo lo vamos a usar como componente para envolver nuestra APP entera, desde el index.js
export const DarkModeContextProvider = ({ children }) =>{
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem('darkMode')) || false
    );

    const toggleMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode]);

    return (
        /* Lo que vaya dentro de value le llega al children, osea a la App */
        <DarkModeContext.Provider value={{darkMode, toggleMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}