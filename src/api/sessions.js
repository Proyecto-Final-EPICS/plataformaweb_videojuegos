import {basePath} from './config';

export function getSessionsApi(nameGame){
    const url = `${basePath}/getSessionGamesByGame`;
    const params = {
        method: "GET",
        body: JSON.stringify(nameGame)
        
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