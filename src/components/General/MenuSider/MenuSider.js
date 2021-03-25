//Liberias
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {HomeOutlined, SolutionOutlined, MenuOutlined, FundOutlined } from '@ant-design/icons';


//Estilos
import './MenuSider.scss';

function MenuSider(props){
    const {menuCollapsed, location} = props;
    const {Sider} = Layout;

    return(
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/home">
                    <Link to={"/home"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/home/sessions">
                    <Link to={"/home/sessions"}>
                        <SolutionOutlined />
                        <span className="nav-text">Sesiones</span>
                    </Link>
                </Menu.Item>

            </Menu>
            
        </Sider>
    );
}


export default withRouter(MenuSider);