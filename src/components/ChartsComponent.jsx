import React from 'react'

import BarChart from '../charts/BarChart';
import PolarChart from '../charts/PolarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';
import DoughnutChart from '../charts/DoughnutChart';
import PieChart from '../charts/PieChart';
import { Card } from 'react-bootstrap';

const ChartsComponent = ({ data }) => {
    return (
        <div>
           
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Card style={{padding:"10px",margin:"15px"}}>
                            <PolarChart serverData={data} />
                            </Card>
                            <Card style={{padding:"10px",margin:"15px"}}>
                            <DoughnutChart serverData={data} />
                            </Card>
                        </div>
                  
                  <Card style={{padding:"10px",margin:"15px"}}>
                        <BarChart serverData={data} />
                        </Card>
                        <Card style={{padding:"10px",margin:"15px"}}>
                        <LineChart serverData={data} />
                        </Card>
                   
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                           <Card style={{padding:"10px",margin:"15px"}}><RadarChart serverData={data} />
                           </Card> 
                           <Card style={{padding:"10px",margin:"15px"}}> 
                            <PieChart serverData={data} />
                           </Card> 
                        </div>
                   
        </div>
    )
}

export default ChartsComponent