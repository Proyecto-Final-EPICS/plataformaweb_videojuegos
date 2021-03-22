import React,{useState,useEffect} from 'react';

//Componentes


//Funciones
import {prueba} from '../../api/users';

export default function Home(){

    const [variable,funcion] = useState([]);  
   
    console.log("soy",variable);

    useEffect(()=>{
        prueba().then(response =>{
           funcion(response[0].developedGames[0].developer.schoolName)
           console.log(response);
        })
    },[]);
    
    return(
        <div>
            <h1>Estamos en Home</h1>
            <p>Lo que me traje es {variable}</p>
        </div>
    );
}


