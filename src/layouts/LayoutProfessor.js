//Librerías
import React from 'react';
import { Layout, Row, Col, Breadcrumb } from 'antd';
import {Route,Switch,Link} from 'react-router-dom';

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
                        <Col span={24}>
                            <LoadBreadcrumb routes={routes}/>
                        </Col>
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

function LoadBreadcrumb({routes}){
    return(
        <Breadcrumb>
            {routes.map((route,index)=>(
                <Breadcrumb.Item key={index}>
                   <Link to={route.path}>
                     {route.path}
                   </Link>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
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