import {basePath, apiVersion} from './config';

export function prueba(){
    const url = `${basePath}/get-students`;
    const params = {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    };
    return fetch(url,params)
    .then(response =>{
        return response.json();
    })
    .then(result =>{
        console.log(result);
        return result;
    })
    .catch(err =>{
        return err.message;
    })

}