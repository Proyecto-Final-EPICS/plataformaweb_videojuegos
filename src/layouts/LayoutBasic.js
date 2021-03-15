//Liberías
import React from 'react';
import {Layout, Row, Col, Menu} from 'antd';
import {Route,Switch} from 'react-router-dom';


//Estilos
import "./LayoutBasic.scss";

export default function LayoutBasic({routes}){
    const { Footer } = Layout; 

    return(
        <>
            
            <Row>
                <Col md={4}/> 
                <Col md={16}>
                    <h1>XD</h1>
                </Col>
                <Col md={4}/>
            </Row>
            <LoadRoutes routes={routes} />
            <Footer style={{ textAlign: 'center' }}>
              Proyecto EPICS IEEE
            </Footer>
        </>
    )
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