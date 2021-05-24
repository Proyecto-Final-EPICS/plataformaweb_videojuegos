//Liberias
import React from 'react';
import {List,Button,Card} from 'antd';


//Estilos
import './ListGames.scss';

export default function ListGames(props){
    const {juegos} = props;
    return(
        <div className="list-juegos">
            <Juegos juegos={juegos.name}/>
        </div>
    );
}

function Juegos(props){
    const {juegos} = props;
    return(
        
        <List
            grid={{gutter: 16, column: 1}}
            className= "juegos"
            itemLayout= "horizontal"
            dataSource={juegos}
            renderItem={juego => <Juego
                juego = {juego}
            />}
        />
    );
}

function Juego(props){
    const {juego} = props;
    // console.log(colegio);
    return(
        <Card className="card-juegos">
            <List.Item
                actions={[
                    <div className="card-juegos__content">
                        <h1 className="card-juegos__content__title">
                            {juego.name}
                        </h1>

                        <h1 className="card-juegos__content__title">
                            {juego.topic}
                        </h1>
        
                        {/* <Link to ={`/home/colegios/${colegio.schoolName}`}> */}
                            <Button type="primary" className="card-juegos__button"> 
                                Detalles
                                {/* <CaretUpOutlined /> */}
                            </Button> 
                        {/* </Link> */}
                        <Button type="primary" className="card-juegos__button"> 
                                Ranking
                                {/* <CaretUpOutlined /> */}
                        </Button> 
                    </div>
                    
                ]}
                
               
            >
                {/* <div className="card__content">
                    <List.Item.Meta
                        title={`
                            ${colegio.schoolName}
                        `}
                    />
                </div> */}
            </List.Item>
        </Card>
        
    );
}