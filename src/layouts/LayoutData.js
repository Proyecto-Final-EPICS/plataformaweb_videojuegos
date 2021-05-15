//Librerías
import React from 'react';
import { Layout,Breadcrumb } from 'antd';
import {Route,Switch} from 'react-router-dom';

//Componentes
import Breadcrumbs from '../components/Professor/Breadcrumbs';
import MenuSider from '../components/Professor/MenuSider';


//Estilos
//import './LayoutData.scss';

export default function LayoutData(props){
    const {Header,Content,Footer} = Layout;
    const { routes } = props;
    //  console.log(props);

      
    return(
        <Layout>
            <Layout className="layout-data">
                <Content className="layout-data__c">.
                    <MenuSider/> 
                    {/* <div className="layout-data__content">
                        <LoadRoutes routes={routes}/>
                    </div> */}
                </Content>
                <Footer style={{textAlign:'center'}}className="layout-data__footer">
                    <span> &copy; EPICS IEEE</span>
                </Footer>
            </Layout>
        </Layout>
    );
}


function LoadRoutes({routes}){
    //console.log(routes);
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