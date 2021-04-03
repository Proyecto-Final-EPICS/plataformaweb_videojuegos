//Liberías
import React,{useState, useEffect} from 'react';
import {Form, Input, Button, notification} from 'antd';

//Iconos
import { UserOutlined, LockOutlined} from '@ant-design/icons';

//API
import {signinAPI} from'../../../api/users'

//Estilos
import './LoginForm.scss';



export default function LoginForm(){
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });


    const changeForm = e =>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    
    const login = async () => {
        const result = await signinAPI(inputs);
        console.log(result);
        if(result === "ok"){
            window.location.href="/home";
        }else {
            notification["error"]({message:"Contraseña o usuario incorrecto"});
        }
    }


    return(
        <Form className="login-form" onChange={changeForm} onFieldsChange={login}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{color:"rgba(0,0,0,0.25)"}}/>}
                    type="text"
                    name="username"
                    placeholder="Usuario"
                    className="login-form__input"
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{color:"rgba(0,0,0,0.25)"}}/>}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                />
            </Form.Item>

            <Form.Item>
                <Button htmlType="submit" className="login-form__button">
                    Entrar
                </Button>
            </Form.Item>

        </Form>
    );
}