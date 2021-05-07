//Liberias
import React from 'react';
import {Button} from 'antd';
import {Link, useParams} from 'react-router-dom';

//Estilos
import './Students_Games.scss';

//Assets
import Estudiantes from '../../../assets/icons/icons8-students-64.png';
import Juegos from '../../../assets/icons/icons8-games-folder-64.png';

export default function Students_Games(){
    const {colegio} = useParams();
    console.log(colegio);
    return(
        <div className="content">

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