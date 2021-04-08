import {basePath} from './config';



//Endpoint para traer todos los colegios
export function getColegiosApi(){
    const url = `${basePath}/getSchoolsDateils`;
    const params = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    return fetch(url,params)
    .then(response => {
        return response.json();
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return err.message;
    })
}


//Endpoint para traer colegio dado un nombre
export function getEstudiantesByColegio(name){
    const url = `${basePath}/getStudents/${name}`;
    const params = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    }

    return fetch(url,params)
    .then(response => {
        return response.json()
    })
    .then(result => {
        return result;
    })
    .catch(err => {
        return err.message;
    })
}