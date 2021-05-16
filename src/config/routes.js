//Layouts
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutProfessor from '../layouts/LayoutProfessor';
import LayoutData from '../layouts/LayoutData';

//Pages for everybody
import Login from '../pages/Login';
import Error404 from '../pages/Error';

//Pages Admin
import AdminHome from '../pages/Admin/AdminHome';
import AdminGames from '../pages/Admin/Games';
import AdminSchool from '../pages/Admin/Schools';
import AdminProfessors from '../pages/Admin/Professors';

//Pages Professor
import Sessions from '../pages/Professor/Sessions';
import ProfessorHome from '../pages/Professor/ProfessorHome';
import Colegios from '../pages/Professor/Colegios';
import Colegio from '../pages/Professor/Colegio';
import Estudiante from '../pages/Professor/Estudiante';//Es la info del estudiante en el juego
import Students_Games from '../pages/Professor/Students_Games';
import GamesStudent from '../pages/Professor/GamesStudent';


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
                path: "/home/colegios",
                component: Colegios,
                exact: true
                                   
            },
            {
                path: "/home/colegios/:colegio",
                component: Students_Games,
                exact: true
            },
            {
                path: "/home/colegios/:colegio/estudiantes",
                component: Colegio,
                exact: true
            },
            {
                path:"/home/colegios/:colegio/estudiantes/:estudiante-:username",
                component: GamesStudent,
                exact: true
            },
            {
                path:"/home/colegios/:colegio/estudiantes/:estudiante-:username/:game",
                component: Estudiante,
                exact: true
            },
            // {
            //     path: "/home/colegios/:colegio/:estudiante-:username/:game",
            //     component: LayoutData,
            //     exact: false,
            //     routes:[
            //         {
            //             path:"/home/colegios/:colegio/:estudiante-:username/:game",
            //             component: Estudiante,
            //             exact: true,
            //             routes:[
            //                 {
            //                     path: "/admin",
            //                     component: Login,
            //                     exact: true
            //                 }
            //             ]
            //         }
            //     ]
            // },
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
                path: "/admin-home/games",
                component: AdminGames,
                exact: true
            },
            {
                path: "/admin-home/professors",
                component: AdminProfessors,
                exact: true
            },
            {
                path: "/admin-home/schools",
                component: AdminSchool,
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



