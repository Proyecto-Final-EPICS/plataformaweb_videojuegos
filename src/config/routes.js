//Layouts
import LayoutBasic from '../layouts/LayoutBasic'

//Pages
import Home from '../pages/Home';
import Error404 from '../pages/Error';

const routes = [//Es el sistema de rutas, el array contiene todas las rutas
    //Esto es un array de objetos, la primera pos son las rutas de admin la segunda de users
    {
        path: "/home",
        component: LayoutBasic,
        exact: true,//No es true porque dentro de el tenemos otras rutas, si lo fuera no cargaría las subrutas
        routes:[//Esto es porque de admin tenemos otras rutas, esto permite cargar las otras rutas
            {
                component: Home//Siempre va de ultimo y va sin path porque no sabemos que path pondrá el user   
            },
            {
                component: Error404
            }
        ]
    }
];

/*En resumen, primero se carga el componente que tiene el Layout, es exact false porque tiene
    subrutas, luego estando en esa ruta que tiene el componente LayoutAdmin, tengo otras dos
    rutas, esas si deben ser exact true porque es necesario que se mantenga el componente LayoutAdmin
    puesto que aun estamos dentro de la ruta admin*/
export default routes;



