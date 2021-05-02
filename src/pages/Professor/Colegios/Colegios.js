//Liberias
import React,{useState,useEffect} from 'react';
import {notification} from 'antd';


//Componentes
import ListColegios from '../../../components/Professor/Colegios/ListColegios';

//API
import {getColegiosApi} from '../../../api/colegio';




//Estilos
import './Colegios.scss';

export default function Colegios(){
    const [colegios,setColegios] = useState([]);

    useEffect(() => {
        getColegiosApi()
        .then(response => {
            if(response == "Failed to fetch"){
               notification["warning"]({
                   message:"No se encontraron colegios"
               })
            }else{
                setColegios(response);
            }
        })
    },[])


    return(
        <div>
            <h1>Colegios registrados</h1>
            <ListColegios 
                colegios={colegios}
            />
        </div>
        
    );
}