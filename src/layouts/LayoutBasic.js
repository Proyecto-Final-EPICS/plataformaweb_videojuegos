//Liberías
import React from 'react';
import {Layout, Row, Col} from 'antd';
import {Route,Switch} from 'react-router-dom';


//Estilos
import "./LayoutBasic.scss";

export default function LayoutBasic(){
    const { Footer } = Layout; 

    return(
       <Layout>
           <h2>A</h2>
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