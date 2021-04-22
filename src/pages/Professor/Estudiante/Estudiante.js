//Liberias
import React,{useState,useEffect} from 'react';
import {Layout} from 'antd';
import {useLocation} from 'react-router-dom';

//Componentes
//import MenuSider from '../../../components/Professor/MenuSider';

//API
import {getSessionsByStudentUserNameApi} from '../../../api/sessions';

//Estilos
import './Estudiante.scss';

export default function Estudiante(){
    const {Content,Sider} = Layout;
    const [sessions,setSessions] = useState([]);
    const username = useLocation().pathname.split("/")[4].split("-")[1];
   

    useEffect(()=>{
        getSessionsByStudentUserNameApi(username).then(response =>{
          console.log(response);
        })
    },[])
    return(
        <Layout>
            {/* <Sider>
                <MenuSider/>
            </Sider> */}
            <Content>
                Informacion del estudiante
            </Content>
        </Layout>
    );
}