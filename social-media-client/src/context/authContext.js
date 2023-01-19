import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(window.localStorage.getItem('user')) || null
    );

    
    useEffect(() => {
        // Tener en cuenta que esta key del storage se setea ya de entrada.
        // La primera vez ya va a estar seteadea con el par 'user' = null;
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);
    
    const login = async (inputs) => {
        const res = await axios.post("http://localhost:3000/api/auth/login", inputs, {
      withCredentials: true,
    });

    setCurrentUser(res.data)
    }
    return (
        <AuthContext.Provider value={{currentUser, login, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}