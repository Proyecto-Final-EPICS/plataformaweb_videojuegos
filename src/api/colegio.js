import {basePath} from './config';



//Endpoint para traer todos los colegios
export function getColegiosApi(){
    const url = `${basePath}/getSchoolsDetails`;
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


//Endpoint para traer colegios dado un profesor
export function getColegiosByProfessorApi(name){
    const url = `${basePath}/professorSchool?username=${name}`
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
    const url = `${basePath}/student?nameSchool=${name}`;
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

//Endpoint para traer juegos dado un estudiante
export function getGameByStudentApi(name){
    const url = `${basePath}/StudentGames?username=${name}`;
    const params = {
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
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

//Endpoint para agregar un estudiante
export function addStudent(info){
    console.log(info);
    const data = {
        schoolName: info.schoolName,
        students:{
            studentName: info.students.studentName,
            age: info.students.age,
            username: info.students.username,
            password: info.students.password
        }
    }
    const url = `${basePath}/student`;
    const params = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
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