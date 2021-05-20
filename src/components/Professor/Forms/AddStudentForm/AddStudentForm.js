//Liberias
import React,{useState,useEffect} from 'react';
import { Form, Input,  Button, Row, Col, notification} from 'antd';
import {  UserOutlined, FileOutlined, LockOutlined } from '@ant-design/icons';


//Api
import {addStudent} from '../../../../api/colegio'

//Estilos
import './AddStudentForm.scss'



export default function AddStudentForm(props){
    const {setIsVisibleModal,colegio,setReloadStudents} = props;
    const [userData, setUserData] = useState({
        schoolName: "",
        students: null
    });
    const [students, setStudents] = useState({
        students:{
            studentName: "",
            age: "",
            username: "",
            password: ""
        }
    })

    
   useEffect(()=>{
        let isMounted = true;
        setUserData({...userData, schoolName: colegio})
        return () =>{isMounted = false};
   },[])

    const addUser = event => {
        if ( !students.studentName || !students.password  || !students.age || !students.username) {
            notification.error({message:"Todos los campos son obligadorios"});
        } else if (userData.password !== userData.repeatPassword) {
            notification.error({message:"Las contraseñas tienen que ser iguales"})
        } else {
            addStudent(userData)
            .then(response => {
                notification["success"]({message: response});
                setIsVisibleModal(false);
                setReloadStudents(true);
                // setReloadUsers(true);
                setUserData({});//Resetear el formulario
            })
            .catch(err => {
                notification.error({message: err});
            });
        }
    }

    return(
        <div className="add-user-form">
            <AddForm
                userData={userData}
                setUserData={setUserData}
                students={students}
                setStudents={setStudents}
                addUser={addUser}
            />
        </div>
    );
}


function AddForm(props){
    const { userData, setUserData, addUser,students,setStudents } = props;

    const changeForm = e =>{
        setStudents({...students, [e.target.name]: e.target.value})
        setUserData({
            ...userData,
            ['students']:students
        });
    }

    
    return(
        <Form className="form-add" onChange={changeForm} onFieldsChange={addUser}> 

            <Row gutter={24}>  
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder="Nombre"
                            name="studentName"
                            // value={userData.studentName}
                            // onChange={e => setUserData({...userData, studentName: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="number"
                            prefix={<FileOutlined/>}
                            placeholder="Edad"
                            name="age"
                            // value={userData.age}
                            // onChange={e => setUserData({...userData, age: e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>  
                
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="text"
                            prefix={<UserOutlined />}
                            placeholder="Usuario"
                            name="username"
                            // value={userData.username}
                            // onChange={e => setUserData({...userData, username: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="password"
                            prefix={<LockOutlined />}
                            placeholder="Contraseña"
                            name="password"
                            // value={userData.password}
                            // onChange={e => setUserData({...userData, password: e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                   Agregar estudiante
                </Button>
            </Form.Item>
        </Form>
    );
}