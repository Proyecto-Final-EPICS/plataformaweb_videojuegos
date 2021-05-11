//Librerias
import React from 'react';
import {Layout} from 'antd';

//Componentes
import ListGames from '../../../components/Professor/Estudiantes/ListGames';

//Estilos
import './GamesStudent.scss';

export default function GamesStudent(){
    const {Content,Header} = Layout;

    return(
        <Layout>
            <div className="col__titulo">
                Videojuegos jugados
            </div>
            
            <div className="je-contenido">

                <Header className="je-contenido__header">

                    <div className="je-contenido__header__col">
                        <h1>Nombre</h1>
                    </div>

                    <div className="je-contenido__header__col">
                        <h1>Tema</h1>
                    </div>     

                    <div className="je-contenido__header__col">
                        <h1>Acción</h1>
                    </div>
                </Header>

                <Content className="je-contenido__content"> 
                    <ListGames/>
                </Content>
            </div>

        </Layout>
    );
}