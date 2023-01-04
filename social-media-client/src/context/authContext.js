import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(
        // Ahora en vez de que el valor por defecto sea 'false', va a ser null, porque no estamos checkeando un booleano
        // El contenido en storage va a ser un objeto, vamos a  guardar varias cosas del usuario
        JSON.parse(localStorage.getItem('user')) || null
    );

    const login = () => {
        //ToDo FROM API
        setCurrentUser({id: 2, name: 'Fede', avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})
    }

    useEffect(() => {
        // Por eso el objeto va como JSON string.
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}