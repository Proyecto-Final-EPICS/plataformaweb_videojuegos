//Liberias
import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';

//Api
import {getRankingGameBySchool} from '../../../api/colegio';


export default function GameRanking(props){
    const {juego} = props;
    const {colegio} = useParams();
    

    useEffect(()=>{
        getRankingGameBySchool(juego,colegio).then(response =>{
            console.log(response);
        })
    },[])

    return(
        <h1>
            Tabla de ranking
        </h1>
    );
}