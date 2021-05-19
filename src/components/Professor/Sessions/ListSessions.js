//Liberiras
import React from 'react';
import {List,Table,Button} from 'antd';
import {Link,useParams} from 'react-router-dom';

//Estilos
import './ListSessions.scss';

export default function ListSessions(props){
    const {sessions} = props;
    console.log(sessions);
    const {colegio,estudiante,username,game} = useParams();
    const columns = [
        {
            title: "Nro de Sesión",
            dataIndex: "nro_de_sesion",
            key:"nro_de_sesion"
        },
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
        },
        {
            title: "Acción",
            key: "accion",
            render: (text,record) =>(
                <Link to={`/home/colegios/${colegio}/estudiantes/${estudiante}-${username}/${game}/sesiones/${record.nro_de_sesion}`}>
                    Entrar
                </Link>
            )
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
                nro_de_sesion: index,
                juego:"",
                nro_de_fallas:"",
                tiempo_de_nivel:""            
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

            <Table dataSource={info(sessions)} columns={columns} />
        </div>
    )
}








//Esto no se está usando, pues se está mostrando por medio de la tabla
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