//Liberias
import React,{useState,useEffect} from 'react';
import {Select,Button} from 'antd';
import {Link} from 'react-router-dom';

//Api
import {getLevelsPlayed} from '../../../api/sessions';

export default function SelectLevel(props){
    const {colegio,estudiante,username,game} = props;
    const [levels,setLevels] = useState([]);
    const [option,setOption] = useState("");
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


    const goLevel = () =>{

        console.log(`seleccionado ${option}`);
        
    }


    const handleChange = (value) =>{
        setOption(value);
    }

    const renderOptions = levels.map((l,index )=> {
        return (<Option key={l}> Nivel {l}</Option>)
    });

    return(
        <div>
            <Select style={{ width: 120}} onChange={handleChange}>
             {renderOptions}
            </Select>

            <Link to={`/home/colegios/${colegio}/estudiantes/${estudiante}-${username}/${game}/sesiones`}>
                <Button type="primary">
                    Ir
                </Button>
            </Link>
        </div>
        
    );
}