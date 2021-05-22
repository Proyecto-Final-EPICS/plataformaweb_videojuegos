//Librerias
import React,{useState,useEffect} from 'react';
import Chart from "react-apexcharts";
import {Select} from "antd";

//Estilo
import './Grafico.scss';

export default function Grafico(){
    const {Option} = Select;
    const [options,setOptions] = useState(
        {
            options: {
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
              }
            }
        }
    );

    const [series,setSeries] = useState([
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]);

    return(
        <div className="grafico">
            <div className="grafico__selector">
                <Select className="grafico__selector__select">
                    <Option key="a">Parametro A</Option>
                    <Option key="b">Parametro B</Option>
                    <Option key="c">Parametro C</Option>
                </Select>
            </div>
            
            <div className="grafico__mixed-chart">
                <Chart
                options={options}
                series={series}
                type="bar"
                width="500"
                />
            </div>
        </div>
        
    );
}

