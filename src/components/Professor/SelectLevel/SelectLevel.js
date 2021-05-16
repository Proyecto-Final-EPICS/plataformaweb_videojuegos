//Liberias
import React,{useState,useEffect} from 'react';
import {Select} from 'antd';


//Api
import {getLevelsPlayed} from '../../../api/sessions';

export default function SelectLevel(props){
    const {colegio,estudiante,username,game} = props;
    const [levels,setLevels] = useState([]);
    const {Option} = Select;


    useEffect(()=>{
        getLevelsPlayed(username,game).then(response =>{
           const aux = [];
           let sw = true;
           response.forEach(res =>{
               if(sw == true){
                   aux.push(res[0].level);
                   sw = false;
               }else{
                   aux.forEach(level => {
                       if(level != res[0].level){
                            aux.push(res[0].level)
                       }    
                   });
               }
           });
           setLevels(aux);
        })
    },[])


    const goLevel = (value) =>{
        console.log(`seleccionado ${value}`);
    }

    const renderOptions = levels.map((l,index )=> {
        // <Option value={l}> Nivel {l}</Option>
        <li>{l}</li>

    })

    return(
        // <Select style={{ width: 120}}>
        //     {levels.map((level) => {
        //         console.log(level);
        //         <Option key={level}>Nivel {level}</Option>
        //     })}
        //     <Option value="1">Nivel </Option>
        // </Select>
        <div>
           <ul>{renderOptions}</ul>
            
        </div>
    );
}