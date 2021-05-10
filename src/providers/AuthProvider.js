//Liberias
import React,{useState,createContext,useEffect} from 'react';

//Api
import { getAccessTokenApi, logout } from '../api/auth';

export const AuthContext = createContext();

export default function AuthProvider(props){
    const { children } = props; //Children hace referencia a cualquier pagina
    const [user,setUser] = useState({
        user: null,
        isLoading: true //Está cargando
    });
    
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    //Se está pasando el usuario a toda la web con value={user}
}