import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2'
import { Chart as Chartjs, LineElement, CategoryScale, LinearScale, PointElement,
ArcElement, Tooltip, Legend, BarElement} from 'chart.js'
Chartjs.register( LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend, BarElement)
function analyticsFunctionality(props) {
    //line chart data
    const data = {
        labels: ['Mon', 'Tue', 'Wed'],
        datasets: [{
            label: 'Sales',
            data: [1,9,4],
            backgroundColor: ['#ffe709', '#826af0','#19bb65', '#ffe709'],
            borderColor: 'black',
            pointBorderColor: '',
            //fill: 'true'
        }]
    }
    const options = {
        plugins: {
            legend: true
        }
    }
    //pie chart data


    return (
        <div className='chart'>
            <Line   
                data = {data}
                options = {options}
            ></Line>
            <Pie   
                data = {data}
                options = {options}
            ></Pie>
            <Bar   
                data = {data}
                options = {options}
            ></Bar>
        </div>
    )
}

export default analyticsFunctionality;