//Liberias
import React from 'react';
import { useParams} from 'react-router-dom';

//Estilos
import './Colegio.scss';

export default function Colegio(){
    const {colegio} = useParams();
    console.log(colegio);
    return(
        <h1>Colegio Seleccionado</h1>
    );
}