import {basePath} from './config';

export function getSessionsApi(nameGame){
    const url = `${basePath}/getSessionGamesByGame/${nameGame}`;
    const params = {
        method: "GET",
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

export function getSessionsByStudentUserNameApi(data){
    const url = `${basePath}/getGameSessionsByStudent`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
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