//Liberiras
import React from 'react';
import {List,Table} from 'antd';
import {useLocation} from 'react-router-dom';

export default function ListSessions(props){
    const {sessions} = props;
    // const {pathname} = useLocation()
    // console.log(pathname.split("/"))
    const columns = [
        {
            title: "Juego",
            dataIndex: "juego",
            key: "juego"
        },
        {
            title: "Nro de Fallas",
            dataIndex: "nro_de_fallas",
            key: "nro_de_fallas"
        },
        {
            title: "Tiempo de nivel",
            dataIndex: "tiempo_de_nivel",
            key: "tiempo_de_nivel"
        }
    ]


    //Buscar un estudiante para que pruebe de verdad, que no arme algo de 0 si no algo ya dado 3 y 3 instrucciones bien claras
    //A nivel de jugador o por nivel 
    //No mostrar toda la tabla
    // return(
    //     <div>
    //        <Sessions sessions={sessions}/>
    //     </div>
        
    // );

    const info = (sessions) =>{
        //console.log(sessions);

        const dataSource = []
        sessions.forEach((session,index) => {
            const data = {
                key:0,
                juego:"",
                nro_de_fallas:"",
                tiempo_de_nivel:""            
            }
            data.key = index;
            data.juego = session.Game.nameGame;
            data.nro_de_fallas = session.Game.levels[0].parameters[0].value;
            data.tiempo_de_nivel = session.Game.levels[0].parameters[1].value;
            dataSource.push(data);
        })
        return dataSource;
    }

    return(
        <Table dataSource={info(sessions)} columns={columns} />
    )
}

function Sessions(props) {
    const { sessions } = props;
    console.log(sessions);
    return (
        <List
            className="sessions"
            itemLayout="horizontal"
            dataSource={sessions}
            renderItem={session => <Session
                session={session}

            />}
        />
    );

}

function Session(props) {
    const {session} = props;
    //console.log(session);
    return (
        <List.Item>
            <List.Item.Meta
                title={`
                    ${session.Game.nameGame} -->
                    ${session.Game.levels[0].parameters[0].name} /
                    ${session.Game.levels[0].parameters[0].value} -->
                    ${session.Game.levels[0].parameters[1].name} /
                    ${session.Game.levels[0].parameters[1].value}
                `}
            />
        </List.Item>
    );
}