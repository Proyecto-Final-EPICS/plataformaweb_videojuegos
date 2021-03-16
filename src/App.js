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
    
        {/* <Route path="/home" exact={true} component={Home}/> */}
        

      </Switch>
    </Router>
  );
}




//Renderiza ruta padre y pasa rutas hijas al componente
function RouteWithSubRoutes(route){  
  // console.log(route);
  // return true;
  return (
    <Route
      path = {route.path}
      exact = {route.exact}
      render = {props=><route.component routes={route.routes} {...props}/>}
    />  
  );
}

export default App;