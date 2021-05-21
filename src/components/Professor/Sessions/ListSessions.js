//Liberiras
import React,{useState,useEffect} from 'react';
import {List,Table,Button} from 'antd';
import {Link,useParams} from 'react-router-dom';

//Estilos
import './ListSessions.scss';

export default function ListSessions(props){
    const {sessions} = props;
    const {colegio,estudiante,username,game,nivel} = useParams();



    const getColumns = (sessions) =>{
        const columns = [
            {
                title: "Nro de Sesión",
                dataIndex: "nro_de_sesion",
                key:"nro_de_sesion"
            }
        ]

        let sw = true;
        sessions.forEach((session,index) =>{
            if(session[0].level == nivel && sw){
                session[0].parameters.forEach(par =>{
                    const c = {
                        title: par.name,
                        dataIndex: par.name,
                        key: par.name
                    }
                    columns.push(c);
                })
                sw = false;
            }
        })
        return columns;
    }

 


    const info = (sessions) =>{
        const dataSource = []
        let it = 1;
        sessions.forEach((session,index) => {
            if(session[0].level == nivel){
                const data = {
                    key: index,
                    nro_de_sesion: it   
                }
                session[0].parameters.forEach(par =>{
                    data[par.name] = par.value
                })
                dataSource.push(data);
                it++;
            }
            
        })
        return dataSource;
    }

    return(

        <div className="nivel-content">
            <Button className="nivel-content__button">
              Gráficos del nivel
            </Button>

            <Table dataSource={info(sessions)} columns={getColumns(sessions)}/>
        </div>
    )
}








