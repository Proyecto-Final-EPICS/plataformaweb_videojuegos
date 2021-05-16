//Liberias
import React,{useState,useEffect} from 'react';
import {Layout} from 'antd';
import {useLocation,useParams} from 'react-router-dom';

//Componentes
import ListSessions from '../../../components/Professor/Sessions';

//API
import {getSessionsByStudentUserNameApi} from '../../../api/sessions';


export default function AdminSchool(){
    const {Content} = Layout;
    const data ={
        username: "",
        gameName: ""
    }

    const [sessions,setSessions] = useState([]);
    const {game} = useParams();
   
    useEffect(()=>{
        data.username = "lpotte";
        data.gameName = "Secube";
        getSessionsByStudentUserNameApi(data).then(response =>{
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