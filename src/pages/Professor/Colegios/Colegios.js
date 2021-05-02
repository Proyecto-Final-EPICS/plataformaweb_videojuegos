//Liberias
import React,{useState,useEffect} from 'react';
import {notification,Layout} from 'antd';


//Componentes
import ListColegios from '../../../components/Professor/Colegios/ListColegios';

//API
import {getColegiosApi} from '../../../api/colegio';




//Estilos
import './Colegios.scss';

export default function Colegios(){
    const [colegios,setColegios] = useState([]);
    const {Content,Header} = Layout;

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
        <Layout>

            <div className="colegio__titulo">
                Colegios asignados
            </div>

            <div className="colegio-contenido">
                <Header className="colegio-contenido__header">
                    <div className="colegio-contenido__header__col">
                        <h1>Nombre</h1>
                    </div>
                    <div className="colegio-contenido__header__col">
                        <h1>Estudiantes</h1>
                    </div>     
                </Header>
                <Content className="colegio-contenido__content">
                    <ListColegios 
                        colegios={colegios}
                    />
                </Content>
            </div>
            
        </Layout>
        
        
    );
}