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

export function getSessionsByStudentUserNameApi(username){
    const url = `${basePath}/getSessionGamesByStudent?username=${username}`;
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