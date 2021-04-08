//Liberías
import React from 'react';
import {List,Button} from 'antd';
import {Link} from 'react-router-dom';


//Estilos
import './ListStudents.scss';

export default function ListStudents(props){
    //const [students] = props;
    console.log(props);
    return(
        <h1>Lista de estudiantes</h1>
    );
}



function Students(props){
    const {students} = props;
    return(
        
        <List
            className= "colegios"
            itemLayout= "horizontal"
            dataSource={students}
            renderItem={student => <Student
                student = {student}
            />}
        
        />
    );
}




function Student(props){
    const {student} = props;
    return(
        <List.Item
            actions={[
                <Button type="primary"> 
                    Entrar
                </Button>
                
               
            ]}
        
        
        >
            {/* <List.Item.Meta
                title={`
                    ${colegio.schoolName}
                `}
            /> */}
        </List.Item>
    );
}