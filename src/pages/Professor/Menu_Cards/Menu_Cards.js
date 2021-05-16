//Liberias
import React from 'react';
import {Row, Col} from 'antd';

//Estilos
import './Menu_Cards.scss';

export default function Menu_Cards(){
    return(
        <div className="content-menu">
            <Row>
                <Col span={24}>
                    TITULO
                </Col>
            </Row>

            <Row>
                <Col span={8}>
                    <div>
                        Opcion 1
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        Opcion 2
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        Opcion 3
                    </div>
                </Col>
            </Row>
        </div>
    );

}