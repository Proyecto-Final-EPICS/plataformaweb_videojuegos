//Liberias
import React from 'react';
import {List,Button} from 'antd';
import {CaretUpOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';



//Estilos
import './ListColegios.scss';


export default function ListColegios(props){
    const {colegios} = props;
    console.log(colegios);
    return(
        <div className="list-colegios">
            <Colegios colegios={colegios}/>
        </div>
    );
}

function Colegios(props){
    const {colegios} = props;
    return(
        
        <List
            className= "colegios"
            itemLayout= "horizontal"
            dataSource={colegios}
            renderItem={colegio => <Colegio
                colegio = {colegio}
            
            />}
        
        />
    );
}

function Colegio(props){
    const {colegio} = props;

    return(
        <List.Item
            actions={[
                <Link to ="/home/colegios/colegio">
                    <Button type="primary"> 
                        Entrar
                    <CaretUpOutlined />
                    </Button>
                </Link>
               
            ]}
        
        
        >
            <List.Item.Meta
                title={`
                    ${colegio.schoolName}
                `}
            />
        </List.Item>
    );
}