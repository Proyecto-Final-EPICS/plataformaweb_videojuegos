//Liberias
import React,{useState,useEffect} from 'react';


//Componentes
import ListColegios from '../../../components/Professor/Colegios/ListColegios';

//API
import {getColegiosApi} from '../../../api/colegio';




//Estilos
import './Colegios.scss';

export default function Colegios(){
    const [colegios,setColegios] = useState([]);

    useEffect(() => {
        getColegiosApi().then(response => {
            setColegios(response);
        });
    },[])


    return(
        <div>
            <h1>Vista colegio profesores</h1>
            <ListColegios 
                colegios={colegios}
            
            />
        
        </div>
        
    );
}