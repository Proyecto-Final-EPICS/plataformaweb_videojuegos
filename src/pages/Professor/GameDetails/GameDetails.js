//Liberias
import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';

//Componentes
import GameDetailsList from '../../../components/Professor/GameDetailsList';

//Api
import {getObjectivesByGameApi} from '../../../api/colegio';


//Estilos
import './GameDetails.scss';

export default function GameDetails(){
    const [objetivos,setObjetivos] = useState([]);
    const {juego} = useParams();
    

    useEffect(()=>{
        getObjectivesByGameApi(juego).then(response =>{
            setObjetivos(response);
        })
    },[])


    return(
       <GameDetailsList/>
    );
}