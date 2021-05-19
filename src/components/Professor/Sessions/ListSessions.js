//Liberiras
import React,{useState,useEffect} from 'react';
import {List,Table,Button} from 'antd';
import {Link,useParams} from 'react-router-dom';

//Estilos
import './ListSessions.scss';

export default function ListSessions(props){
    const {sessions} = props;
    const {colegio,estudiante,username,game,nivel} = useParams();
    const [currentLevel,setCurrentLevel] = useState([]);
    console.log(currentLevel);
    const columns = [
        {
            title: "Nro de Sesión",
            dataIndex: "nro_de_sesion",
            key:"nro_de_sesion"
        }
    ]


    useEffect(()=>{
         console.log("Effect");
         setCurrentLevel(getColumns(sessions));
     },[])

   

    const getColumns = (sessions) =>{
        const aux = [];
        sessions.forEach((session,index) =>{
            if(session[0].level == nivel){
                aux.push(session[0]);
                // setCurrentLevel([...currentLevel,session[0]])
            }
        })

        return aux;
    }
 
    

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

    //console.log(currentLevel);
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








