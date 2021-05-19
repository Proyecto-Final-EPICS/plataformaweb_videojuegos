//Liberias
import React,{useState,useEffect} from 'react';
import {Layout} from 'antd';
import {useLocation,useParams} from 'react-router-dom';

//Componentes
import ListSessions from '../../../components/Professor/Sessions';

//API
import {getSessionsByStudentUserNameApi,getLevelsPlayed} from '../../../api/sessions';

//Estilos
import './Estudiante.scss';

export default function Estudiante(){
    const {Content} = Layout;
    const data ={
        username: "",
        gameName: ""
    }

    const [sessions,setSessions] = useState([]);
    const username = useLocation().pathname.split("/")[5].split("-")[1];
    const {game} = useParams();
   
    useEffect(()=>{
        data.username = username;
        data.gameName = game;
        // getSessionsByStudentUserNameApi(data).then(response =>{
        //   setSessions(response);
        // })
        getLevelsPlayed(data.username,data.gameName).then(response =>{
            setSessions(response);
        })
    },[])

    return(
        <Layout>
            <Content>
                <ListSessions sessions={sessions}/>
            </Content>
           
        </Layout>
    );
}