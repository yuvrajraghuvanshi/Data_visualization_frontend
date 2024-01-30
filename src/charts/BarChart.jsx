import React from 'react'
import { Bar } from 'react-chartjs-2';


const BarChart = ({serverData}) => {

    let uniqueSectors = [];
    
    serverData.forEach((i) => {
        if (!uniqueSectors.includes(i.sector) && i.sector !== "") {
            uniqueSectors.push(i.sector);
        }
    })
   const sectorCount = uniqueSectors.map((item) => {
        return {
            sector: item,
            count: serverData.filter((i) => i.sector === item).length
        }
    })
    

    return (
        <div style={{ height:'50vh'}}>
            <Bar
                data={{
                    labels: uniqueSectors.map(e=>e),
                    datasets: [
                        {
                            label: 'Total Projects',
                            data: sectorCount.map(e=>e.count),
                            borderWidth: 1,
                        },
                      
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true,
                        },
                    }
                }}
                height={300}
                
            />
        </div>
    )
}

export default BarChart