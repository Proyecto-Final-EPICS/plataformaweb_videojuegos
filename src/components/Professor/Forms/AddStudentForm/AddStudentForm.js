//Liberias
import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, notification } from 'antd';
import { UserOutlined, FileOutlined, LockOutlined } from '@ant-design/icons';


//Api
import { addStudent } from '../../../../api/colegio'

//Estilos
import './AddStudentForm.scss'


export default function AddStudentForm(props) {
    const { setIsVisibleModal, colegio, setReloadStudents } = props;
    const [form] = Form.useForm();
    const infoStudent = {
        studentName: { span: 16 },
        age: { span: 16 },
        username: { span: 16 },
        password: { span: 16 }
    }

    const onFinish = (values) => {
        const datos = {
            schoolName: colegio,
            students: values
        }
        console.log('Success:', datos);
        addStudent(datos).then(response => {
            notification.success({ message: response });
            setIsVisibleModal(false);
            setReloadStudents(true);
            form.resetFields();
        }).catch(err => {
            notification.error({ message: err });
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        notification.error({ message: "Todos los campos son obligatorios" });
        form.resetFields();
    };

    return (
        <div className="add-user-form">
            <Form className="form-add"
                form={form}
                {...infoStudent}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{}}>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item
                            name="studentName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor introduce el nombre del estudiante!',
                                },
                            ]}>
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Nombre"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="age"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor introduce la edad!',
                                },
                            ]}>
                            <Input
                                type="number"
                                prefix={<FileOutlined />}
                                placeholder="Edad"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor introduce un usuario!',
                                },
                            ]}
                        >
                            <Input
                                type="text"
                                prefix={<UserOutlined />}
                                placeholder="Usuario"
                                name="username"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor introduce una contraseña!',
                                },
                            ]}>
                            <Input
                                type="password"
                                prefix={<LockOutlined />}
                                placeholder="Contraseña"
                                name="password"
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
        </div>
    );
}