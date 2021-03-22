//Layouts
import LayoutBasic from '../layouts/LayoutBasic'

//Pages for everybody
import Login from '../pages/Login';

//Pages Professor
import Home from '../pages/Home';
import Error404 from '../pages/Error';

const routes = [//Es el sistema de rutas, el array contiene todas las rutas
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes:[
            {
                path: "/",
                component: Login,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
];

/*En resumen, primero se carga el componente que tiene el Layout, es exact false porque tiene
    subrutas, luego estando en esa ruta que tiene el componente LayoutBasic, tengo otras dos
    rutas, esas si deben ser exact true porque es necesario que se mantenga el componente LayoutBasic
    puesto que aun estamos dentro de la ruta admin*/
export default routes;



