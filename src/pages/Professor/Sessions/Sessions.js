//Liberias
import React,{useState, useEffect} from 'react';

//Componentes
import Table from '../../../components/Professor/Table';

//API
import { getSessionsApi } from '../../../api/sessions';

export default function Sessions(){
    const [sessions,setSessions] = useState([]);

    useEffect(()=>{
        getSessionsApi("Nombre_Juego").then(response => {
            setSessions(response);
            console.log(response);
        });
        
    },[])

    return(
        <div className="sessions">
            <Table
                sessions={sessions}
            />
        </div>
    );
}