//Liberias
import React,{useState,useEffect} from 'react';
import {Select} from 'antd';


//Api


export default function SelectLevel(props){
    const {colegio,estudiante,username,game} = props;
    const {Option} = Select;
    return(
        <Select defaultValue="a"  style={{ width: 120}} >
            <Option value="a"> Nivel 1 </Option>
            <Option value="b"> Nivel 2</Option>
        </Select>
    );
}