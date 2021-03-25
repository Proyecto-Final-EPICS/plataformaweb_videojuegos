//Liberías
import React,{useEffect,useState} from 'react';
import {Table as Tb} from 'antd';

//Estilos
import './Table.scss';

export default function Table(props){
    const {data} = props;
    console.log("Este es la data",data);
    return(
        <Tb></Tb>
    );
}
//Columnas para tabla: inicio-final-nombre_est-nombre_juego