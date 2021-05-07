//Liberias
import React from 'react';
import {Button} from 'antd';
import {Link, useParams} from 'react-router-dom';

//Estilos
import './Students_Games.scss';

//Assets
import Estudiantes from '../../../assets/icons/graduated.png';
import Juegos from '../../../assets/icons/icons8-games-folder-64.png';

export default function Students_Games(){
    const {colegio} = useParams();
    console.log(colegio);
    return(
        <div className="content">
            <Link to={`/home/colegios/${colegio}/estudiantes`} className="content__card">
                <div>
                    <div className="content__card__image">
                        <img src={Estudiantes}/>
                    </div>
                    <div className="content__card__text">
                        <span>Estudiantes</span>
                    </div>
                </div>
            </Link>
            
            <div className="content__card">
                <Link to={`/home/colegios/${colegio}/estudiantes`}>
                    <div className="content__card__image">
                        <img src={Estudiantes}/>
                    </div>
                    <div className="content__card__text">
                        <span>Estudiantes</span>
                    </div>
                </Link>
            </div>

    
        </div>
    )
}