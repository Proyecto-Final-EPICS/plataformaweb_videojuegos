//Librerias
import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'antd';
import {PoweroffOutlined} from '@ant-design/icons';



//Estilos
import './MenuTop.scss';

//Assets
import logo from '../../../assets/img/palanca-de-mando.png';



export default function MenuTop(){

    const logoutUser =  () => {
        window.location.href="/";
    }

    
    return(
        <div className="menu-top">
            <Link to="/home">
                <img
                    className="menu-top__left-logo"
                    src={logo}
                    alt="logo joystick"
                />
            </Link>
         
            <div className="menu-top__right">
                <div className="menu-top__right__button">
                    <Button type="link" onClick={logoutUser}> 
                        <PoweroffOutlined/>
                    </Button>
                </div>
               
                <span className="menu-top__right__user">User</span>
            </div>

        </div>
        
    );
}