//Liberias
import React from 'react';
import {Row, Col} from 'antd';

//Estilos
import './Menu_Cards.scss';

export default function Menu_Cards(){
    return(
        <div className="content-menu">
            <Row>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <div className="content-menu__titulo">
                        <h1>
                            SELECCIONE UNA OPCIÓN
                        </h1>
                    </div>
                </Col>
                <Col span={8}>
                </Col>
            </Row>

            <Row>
                <Col span={8}>
                    <div className="content-menu__card">
                        Opcion 1
                    </div>
                </Col>
                <Col span={8}>
                    <div className="content-menu__card">
                        Opcion 2
                    </div>
                </Col>
                <Col span={8}>
                    <div className="content-menu__card">
                        Opcion 3
                    </div>
                </Col>
            </Row>
        </div>
    );

}