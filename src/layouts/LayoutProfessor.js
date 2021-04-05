//Librerías
import React from 'react';
import { Layout, Menu } from 'antd';
import {Route,Switch} from 'react-router-dom';


//Estilos
import './LayoutProfessor.scss';

export default function LayoutProfessor(){
    const {Header,Content,Footer} = Layout;

    return(
        <Layout>
            <Layout className="layout-professor">
                <Header className="layout-professor__header">
                    <h1>Soy cabecera</h1>
                </Header>
                <Content className="layout-professor__content">
                    <h1>Soy Content</h1>
                </Content>
                <Footer style={{textAlign:'center'}}className="layout-professor__footer">
                    <span> &copy; EPICS IEEE</span>
                </Footer>
            </Layout>
        </Layout>
    );
}