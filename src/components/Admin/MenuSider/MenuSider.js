//Liberias
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {HomeOutlined, SolutionOutlined} from '@ant-design/icons';


//Estilos
import './MenuSider.scss';

function MenuSider(props){
    const {menuCollapsed, location} = props;
    const {Sider} = Layout;

    return(
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu mode="inline" defaultSelectedKeys={[location.pathname]}>
                <Menu.Item key="/admin-home">
                    <Link to={"/admin-home"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/admin-home/games">
                    <Link to={"/admin-home/games"}>
                        <SolutionOutlined />
                        <span className="nav-text">Videojuegos</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/admin-home/schools">
                    <Link to={"/admin-home/schools"}>
                        <SolutionOutlined />
                        <span className="nav-text">Colegios</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/admin-home/professors">
                    <Link to={"/admin-home/professors"}>
                        <SolutionOutlined />
                        <span className="nav-text">Profesores</span>
                    </Link>
                </Menu.Item>


            </Menu>
            
        </Sider>
    );
}


export default withRouter(MenuSider);