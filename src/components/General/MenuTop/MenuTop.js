//Librerias
import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import {MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined} from '@ant-design/icons';



//Estilos
import './MenuTop.scss';

//Assets
import logo from '../../../assets/img/palanca-de-mando.png';



export default function MenuTop(){
    return(
        <div className="menu-top">
            <Link to="/home">
                <img
                    className="menu-top__left-logo"
                    src={logo}
                    alt="logo joystick"
                />
            </Link>
        </div>
    );
}