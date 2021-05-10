//Librerías
import React from 'react';
import { Layout, Row, Col, Breadcrumb } from 'antd';
import {BrowserRouter as Router,Route,Switch,Link, Redirect} from 'react-router-dom';

//Componentes
import MenuTop from '../components/Professor/MenuTop';
import Breadcrumbs from '../components/Professor/Breadcrumbs';

//Paginas
import Login from '../pages/Login';

//Api
import {getAccessToken} from '../api/auth';//useAuth devuelve contexto y contexto devuelve pagina, que en este caso tiene un valor user

//Hooks
import useAuth from '../hooks/useAuth';

//Estilos
import './LayoutProfessor.scss';

export default function LayoutProfessor(props){
    const {Header,Content,Footer} = Layout;
    const { routes } = props;
    const {user, isLoading} = useAuth();

    console.log(user)

    if (!user && !isLoading){//No hay usuario logeado
        return(
            <>
                <Route path="/" component={Login}/>
                <Redirect to="/"/>
            </>
        )
    }

    if(user && !isLoading){//Usuario logeado
        return(
            <Layout>
                <Layout className="layout-professor">
                    <Header className="layout-professor__header">
                       <MenuTop/>
                    </Header>
                    <Content className="layout-professor__c">
                        <Row className="layout-professor__breadcrumbs"> 
                            <Breadcrumbs/>
                        </Row>
                        <div className="layout-professor__content">
                            <LoadRoutes routes={routes}/>
                        </div>
                    </Content>
                    <Footer style={{textAlign:'center'}}className="layout-professor__footer">
                        <span> &copy; EPICS IEEE</span>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
    
    return null;
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