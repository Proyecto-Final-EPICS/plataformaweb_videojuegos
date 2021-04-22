//Liberías
import React from 'react';
import { List, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';


//Estilos
import './ListStudents.scss';

export default function ListStudents(props) {
    const { students } = props;
    if (props.students == "Failed to fetch") {
        console.log("No hay datos");
        return "No Hay Estudiantes Registrados Aún";
    } else {
        return (
            <div className="list-students">
                <Students students={students} />
            </div>
        );
    }
}

function Students(props) {
    const { students } = props;
    const location = useLocation().pathname.split("/")[3];
    return (
        <List
            className="colegios"
            itemLayout="horizontal"
            dataSource={students}
            renderItem={student => <Student
                student={student}
                colegio={location}
            />}
        />
    );
}

function Student(props) {
    const { student,colegio } = props;
    return (
        <List.Item
            actions={[
                <Link to ={`/home/colegios/${colegio}/${student.studentName}`} >
                    <Button type="primary">
                     Entrar
                    </Button>
                </Link>
               
            ]}
        >
            <List.Item.Meta
                title={`
                    ${student.studentName
                    }
                    ${student.age
                    }
                `}
            />
        </List.Item>
    );
}