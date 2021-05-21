//Liberiras
import React,{useState,useEffect} from 'react';
import {List,Table,Button} from 'antd';
import {Link,useParams} from 'react-router-dom';

//Estilos
import './ListSessions.scss';

export default function ListSessions(props){
    const {sessions,currentLevel} = props;
    //console.log(currentLevel);
    const {colegio,estudiante,username,game,nivel} = useParams();
    const columns = [
        {
            title: "Nro de Sesión",
            dataIndex: "nro_de_sesion",
            key:"nro_de_sesion"
        }
    ]

    // currentLevel[0].parameters.forEach(par =>{
    //     const c = {
    //         title: par.name,
    //         dataIndex: par.name,
    //         key: par.name
    //     }
    //     columns.push(c);
    // })


 
    

    const info = (sessions) =>{
        const dataSource = []
        sessions.forEach((session,index) => {
            const data = {
                key:0,
                nro_de_sesion: index          
            }
            data.key = index;
            data.nro_de_sesion = index + 1;
            data.juego = session.Game.nameGame;
            data.nro_de_fallas = session.Game.levels[0].parameters[0].value;
            data.tiempo_de_nivel = session.Game.levels[0].parameters[1].value;
            dataSource.push(data);
        })
        return dataSource;
    }

    return(

        <div className="nivel-content">
            <Button className="nivel-content__button">
              Gráficos del nivel
            </Button>

            {/* <Table dataSource={info(sessions)} columns={columns}/> */}
            <Table columns={columns}/>

        </div>
    )
}








