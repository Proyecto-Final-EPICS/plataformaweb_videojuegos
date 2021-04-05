//Librerías
import React from 'react';
import { Layout, Menu } from 'antd';
import {Route,Switch} from 'react-router-dom';

//Componentes
import MenuTop from '../components/Professor/MenuTop';

//Estilos
import './LayoutProfessor.scss';

export default function LayoutProfessor(props){
    const {Header,Content,Footer} = Layout;
    const { routes } = props;

    return(
        <Layout>
            <Layout className="layout-professor">
                <Header className="layout-professor__header">
                   <MenuTop/>
                </Header>
                <Content className="layout-professor__content">
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer style={{textAlign:'center'}}className="layout-professor__footer">
                    <span> &copy; EPICS IEEE</span>
                </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({routes}){
    return(
        <Switch>
            {routes.map((route,index)=>(
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}