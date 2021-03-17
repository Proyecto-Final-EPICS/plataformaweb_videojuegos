//Liberias
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



//Fichero de configuración de rutas
import routes from './config/routes';


//Estilos
import './App.scss';

// import Home from './pages/Home';

function App(){
  return(
    <Router>
      <Switch>
        {routes.map((route,index)=>(
          <RouteWithSubRoutes key={index}{...route}/>
        ))}
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
      render = {props=><route.component routes={route.routes} {...props}/>}/*Se usa render porque va a renderizar otras rutas*/ 
    />  
  );
}

export default App;