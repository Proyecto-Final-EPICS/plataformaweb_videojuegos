//Liberías
import React from 'react';
import {List,Button} from 'antd';
import {Link} from 'react-router-dom';


//Estilos
import './ListStudents.scss';

export default function ListStudents(props){
    const {students} = props;
    return(
      <div className="list-students">
          <Students students={students}/>
      </div>
    );
}



function Students(props){
    const {students} = props;
    console.log(props);



    return(
        
        <List
            className= "colegios"
            itemLayout= "horizontal"
            dataSource={students}
            renderItem={student => <Student
                student = {student.foreach(s => {
                    return s
                })}
            />}
        
        />
    );
}




function Student(props){
    const {student} = props;
    console.log(student);
  
    

    return(
        <List.Item
            actions={[
                <Button type="primary"> 
                    Entrar
                </Button>
                
               
            ]}
        
        
        >
            <List.Item.Meta
                title={`
                    ${
                        student.studentName
                    }
                    ${
                        student.age
                    }
                `}
            />
        </List.Item>
    );
}