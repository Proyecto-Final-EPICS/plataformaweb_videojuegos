//Librerías
import React from 'react';
import { Layout, Row, Col, Breadcrumb } from 'antd';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
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
                <Content>
                    <Row className="layout-professor__breadcrumbs"> 
                        
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