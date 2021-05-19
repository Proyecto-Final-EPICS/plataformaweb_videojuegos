//Liberias
import React,{useState} from 'react';
import { Form, Input,  Button, Row, Col, notification} from 'antd';
import {  UserOutlined, FileOutlined, LockOutlined } from '@ant-design/icons';


//Api
import {addStudent} from '../../../../api/colegio'

//Estilos
import './AddStudentForm.scss'



export default function AddStudentForm(props){
    const {setIsVisibleModal,colegio} = props;
    const [userData, setUserData] = useState({
        schoolName: ""
    });


    const addUser = event => {
        setUserData({...userData, schoolName: colegio})
        if ( !userData.studentName || !userData.password || !userData.repeatPassword  || !userData.age || !userData.username || !userData.lastName) {
            notification["error"]({message:"Todos los campos son obligadorios"});
        } else if (userData.password !== userData.repeatPassword) {
            notification["error"]({message:"Las contraseñas tienen que ser iguales"})
        } else {
            addStudent(userData)
            .then(response => {
                notification["success"]({message: response});
                setIsVisibleModal(false);
                // setReloadUsers(true);
                setUserData({});//Resetear el formulario
            })
            .catch(err => {
                notification["error"]({message: err});
            });
        }
    }

    return(
        <div className="add-user-form">
            <AddForm
                userData={userData}
                setUserData={setUserData}
                addUser={addUser}
            />
        </div>
    );
}


function AddForm(props){
    const { userData, setUserData, addUser } = props;
    
    return(
        <Form className="form-add" onFinish={addUser}> 

            <Row gutter={24}>  
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder="Nombre"
                            value={userData.studentName}
                            onChange={e => setUserData({...userData, studentName: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined/>}
                            placeholder="Apellido"
                            value={userData.lastName}
                            onChange={e => setUserData({...userData, lastName: e.target.value})}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>  
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="number"
                            prefix={<FileOutlined/>}
                            placeholder="Edad"
                            value={userData.age}
                            onChange={e => setUserData({...userData, age: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="text"
                            prefix={<UserOutlined />}
                            placeholder="Usuario"
                            value={userData.username}
                            onChange={e => setUserData({...userData, username: e.target.value})}
                        />
                    </Form.Item>
                </Col>
               
            </Row>

            <Row gutter={24}>  
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="password"
                            prefix={<LockOutlined />}
                            placeholder="Contraseña"
                            value={userData.password}
                            onChange={e => setUserData({...userData, password: e.target.value})}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            type="password"
                            prefix={<LockOutlined />}
                            placeholder="Repetir contraseña"
                            value={userData.repeatPassword}
                            onChange={e => setUserData({...userData, repeatPassword: e.target.value})}
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