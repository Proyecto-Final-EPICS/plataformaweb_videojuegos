import React,{useState,useEffect} from 'react';

//Componentes


//Funciones
import {prueba} from '../../api/users';

export default function Home(){

    const [variable,funcion] = useState([]);  
    
    useEffect(()=>{
        prueba().then(response => {
            funcion(response);
        })
    },[]);
    
    return(
        <div>
            <h1>Estamos en Home</h1>
            <p>Lo que me traje es {variable.map(xd => <div>{xd.Nombre_Estudiante}</div>)} </p>
        </div>
    );
}