//Layouts
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutProfessor from '../layouts/LayoutProfessor';


//Pages for everybody
import Login from '../pages/Login';
import Error404 from '../pages/Error';

//Pages Admin
import AdminHome from '../pages/AdminHome';


//Pages Professor
import Sessions from '../pages/Professor/Sessions';
import ProfessorHome from '../pages/ProfessorHome';


const routes = [//Es el sistema de rutas, el array contiene todas las rutas
    {
        path: "/",
        component: Login,
        exact: true
    },
    {
        path: "/home",
        component: LayoutProfessor,
        exact: false,
        routes:[
            {
                path: "/home",
                component: ProfessorHome,
                exact: true
            },
            {
                component: Error404
            }
           
        ]
    },
    {
        path: "/admin",
        component: Login,
        exact: true
    },
    {
        path: "/admin-home",
        component: LayoutAdmin,
        exact: false,
        routes:[
            {
                path: "/admin-home",
                component: AdminHome,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        component: Error404
    }
];

/*En resumen, primero se carga el componente que tiene el Layout, es exact false porque tiene
    subrutas, luego estando en esa ruta que tiene el componente LayoutBasic, tengo otras dos
    rutas, esas si deben ser exact true porque es necesario que se mantenga el componente LayoutBasic
    puesto que aun estamos dentro de la ruta admin*/
export default routes;



