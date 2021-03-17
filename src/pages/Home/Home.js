import React from 'react';

//Componentes


//Funciones
import {prueba} from '../../api/users';

export default function Home(){

    const algo = () =>{
        prueba();
    }


    return(
        <div>
            <h1>Estamos en Home</h1>
            {algo()}
        </div>
    );
}