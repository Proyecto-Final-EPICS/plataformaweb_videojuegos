//Liberías
import React from 'react';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';


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
    console.log(props);
    return (
        <List
            className="colegios"
            itemLayout="horizontal"
            dataSource={students}
            renderItem={student => <Student
                student={student}
            />}
        />
    );
}

function Student(props) {
    const { student } = props;
    console.log(student.studentName);
    return (
        <List.Item
            actions={[
                <Button type="primary">
                    Entrar
                </Button>
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