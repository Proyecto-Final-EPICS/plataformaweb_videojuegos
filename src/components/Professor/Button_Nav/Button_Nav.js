//Liberias
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

//Iconos
import { SearchOutlined,BankOutlined } from '@ant-design/icons';
import colegioIcon from '../../../assets/icons/school.png';

//Estilos
import './Button_Nav.scss';

export default function Button_Nav(){
    return(
        <div className="button-nav">
            <Link to= {"/home/colegios"}>
                <img src = {colegioIcon} className="button-nav__icon"/>
            </Link>


        </div>
    );
}