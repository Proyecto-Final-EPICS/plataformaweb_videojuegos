//Librerías
import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Link } from 'react-router-dom';

//Estilos 
import './Breadcrumbs.scss';


const Breadcrumbs = ({breadcrumbs}) =>  (
    <div className="breadcrumbs">
        { console.log(breadcrumbs)}
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
            <div className="bc" key={match.url}>
                <Link to={match.url || ""}>{breadcrumb}</Link>
                {index < breadcrumbs.length - 1 && ">"}
            </div>
         ))}

    </div>

);
export default withBreadcrumbs()(Breadcrumbs);