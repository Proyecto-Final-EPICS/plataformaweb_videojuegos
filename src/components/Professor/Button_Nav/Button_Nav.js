//Liberias
import React from 'react';
import { Button,Row,Col } from 'antd';
import { Link } from 'react-router-dom';

//Iconos
import { SearchOutlined,BankOutlined } from '@ant-design/icons';


//Estilos
import './Button_Nav.scss';

export default function Button_Nav(){
    return(
        <div className="button-nav">
            <Link to= {"/home/colegios"}>
                <Button type="primary" icon={<BankOutlined />} >
                    Colegios
                </Button>
            </Link>

            <Link to= {"/home/estudiantes"}>
                <Button type="primary" icon={<BankOutlined />} >
                    Estudiantes
                </Button>
            </Link>

        </div>
    );
}