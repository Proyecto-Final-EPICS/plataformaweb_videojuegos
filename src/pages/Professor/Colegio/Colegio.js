//Liberias
import React,{useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';

//Componentes
import ListStudents from '../../../components/Professor/Estudiantes/ListStudents';

//API
import {getEstudiantesByColegio} from '../../../api/colegio';


//Estilos
import './Colegio.scss';

export default function Colegio(){
    const {colegio} = useParams();
    const [students,setStudents] = useState([]);
    // console.log(colegio);

    useEffect(()=>{
        getEstudiantesByColegio(colegio).then(response =>{
            setStudents(response);
        })
    },[])

    return(
        <ListStudents students={students}/>
    );
}