//Liberias
import React,{useState,useEffect} from 'react';


//Api
import {getObjectivesByGameApi} from '../../../api/colegio';

//Estilos 
import './GameDetailsList.scss';

export default function GameDetailsList(props){
    const [objetivos,setObjetivos] = useState([]);
    const {juego,reload} = props;


    useEffect(()=>{
        getObjectivesByGameApi(juego.name).then(response =>{
            console.log(response);
            setObjetivos(response);
        })
    },[reload])
    return(
        <h1>Lista de objetivos {objetivos}</h1>
    );
}