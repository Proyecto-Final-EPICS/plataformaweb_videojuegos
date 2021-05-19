//Liberias
import React,{useState,useEffect} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {Layout,Button} from 'antd';

//Componentes
import ListStudents from '../../../components/Professor/Estudiantes/ListStudents';

//API
import {getEstudiantesByColegio} from '../../../api/colegio';


//Estilos
import './Colegio.scss';

export default function Colegio(){
    const {colegio} = useParams();
    const [students,setStudents] = useState([]);
    const {Content,Header} = Layout;
    const col = useLocation().pathname.split("/")[3];

  

    useEffect(()=>{
        getEstudiantesByColegio(colegio).then(response =>{
            setStudents(response);
        })
    },[])

    return(
        <Layout>

            <div className="col-top">
                <div className="col-top__titulo">
                    {col}
                </div>

                <Button className="col-top__button">
                    Agregar estudiante
                </Button>
            </div>
           
            
            <div className="col-contenido">

                <Header className="col-contenido__header">

                    <div className="col-contenido__header__col">
                        <h1>Nombre</h1>
                    </div>

                    <div className="col-contenido__header__col">
                        <h1>Edad</h1>
                    </div>     

                    <div className="col-contenido__header__col">
                        <h1>Usuario</h1>
                    </div>  

                    <div className="col-contenido__header__col">
                        <h1>Editar</h1>
                    </div>  

                    <div className="col-contenido__header__col">
                        <h1>Acción</h1>
                    </div>
                </Header>

                <Content className="col-contenido__content"> 
                    <ListStudents students={students}/>
                </Content>
            </div>
            
        </Layout>
        
        
    );
}