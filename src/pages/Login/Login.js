//Liberías
import React from 'react';
import { Layout, Tabs} from 'antd';
import { Redurect } from 'react-router-dom';


//Estilos
import './Login.scss';

//Assets
import Logo from '../../assets/img/palanca-de-mando.png';

export default function Login(){
    const { Content } = Layout;
    const { TabPane } = Tabs;

    return(
      <Layout className="sign-in">
          <Content className = "sign-in__content">
              <h1 className="sign-in__content__logo">
                  <img src={Logo} alt="Logo joystick"/>
              </h1>
              <div className="sign-in__content-tabs">
                  <Tabs type="card">
                      <TabPane tab={<span>Entrar</span>} key="1">
                        <h1>xD</h1>
                      </TabPane>
                  </Tabs>
              </div>
          </Content>
      </Layout>


    );
}

