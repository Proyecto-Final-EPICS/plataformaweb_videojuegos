//Liberias
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



//Fichero de configuración de rutas
import routes from './config/routes';


//Estilos
import './App.scss';


function App(){
  return(
    <Router>
      <Switch>
        {routes.map((route,index)=>{
          <RouteWithSubRoutes key={index}{...route}/>
        })}
      </Switch>
    </Router>
  );
}




//Renderiza ruta padre y pasa rutas hijas al componente
function RouteWithSubRoutes(route){  
  return (
    <Route
      path = {route.path}
      exact = {route.exact}
      render = {props=><route.component routes={route.routes} {...props}/>}
    />  
  );
}

export default App;