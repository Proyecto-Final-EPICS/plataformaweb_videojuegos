//Liberías
import React,{useState} from 'react';
import { Layout, Menu } from 'antd';
import {Route,Switch} from 'react-router-dom';


//Componentes
import MenuTop from '../components/General/MenuTop';
import MenuSider from '../components/General/MenuSider';

//Estilos
import "./LayoutBasic.scss";

export default function LayoutBasic(props){
    const { routes } = props;
    const { Header , Content, Footer } = Layout;
    const [menuCollapsed,setMenuCollapsed] = useState(false); //Para desplegar el menu
   

    return(

        <Layout>
           <MenuSider menuCollapsed={menuCollapsed}/>
           <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px"}}>
               <Header className="layout-admin__header">
                  <MenuTop menuCollapsed= {menuCollapsed}
                  setMenuCollapsed = {setMenuCollapsed} />
               </Header>
                <Content className="layout-admin__content">
                    <LoadRouters routes={routes}/>
                </Content>
                <Footer style={{textAlign: 'center'}} className="layout-basic__footer">
                    EPICS IEEE    
                </Footer>   
           </Layout>
       </Layout>

    );
}

function LoadRouters(props){
    const { routes } = props;

    return(
        <Switch>
            {routes.map((route,index) =>(
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

