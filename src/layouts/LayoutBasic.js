//Liberías
import React from 'react';
import { Layout } from 'antd';
import {Route,Switch} from 'react-router-dom';




//Estilos
import "./LayoutBasic.scss";

export default function LayoutBasic(props){
    const { routes } = props;
    const { Header , Content, Footer } = Layout;
    
   

    return(

        <Layout>
           <h2>Profesores</h2>
           <Layout>
                <Header> Header...</Header>
                <Content>
                    <LoadRouters routes={routes}/>
                </Content>
                <Footer>Footer..</Footer>   
           </Layout>
       </Layout>

    );
}

function LoadRouters(props){
    const { routes } = props;

    return routes.map((route,index) => (
        
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component} /*Se usa component porque estos componentes no llevan a otras rutas*/ 
        />
    ));
   
}

