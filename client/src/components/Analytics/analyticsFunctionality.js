import React, {useState} from 'react';
import axios from 'axios';
import { Line, Pie, Bar } from 'react-chartjs-2'
import { Chart as Chartjs, LineElement, CategoryScale, LinearScale, PointElement,
ArcElement, Tooltip, Legend, BarElement} from 'chart.js'
Chartjs.register( LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend, BarElement)
function AnalyticsFunctionality(props) {

    let getAnalytics2 = async () => {            
        axios.get('http://localhost:5000/analytics/ig')
        .then(response => {
            //console.log(response)
            let profile_views_data = response.data.data[0].values.map(value => value.value)
            let reach_data = response.data.data[1].values.map(value => value.value)
            let impressions_data = response.data.data[2].values.map(value => value.value)
            setContent(<div>
                {make_line_graph(profile_views_data)}
                {make_line_graph(reach_data)}
                {make_line_graph(impressions_data)}</div>)
        })
    }

    let make_line_graph = (data) => {
        const line_data = {
            labels: data,
            datasets: [{
                label: 'Sales',
                data: data,
                backgroundColor: ['#ffe709', '#826af0','#19bb65', '#ffe709'],
                borderColor: 'black',
                pointBorderColor: '',
                //fill: 'true'
            }]
        }
        return (<Line data = {line_data}options = {options} ></Line>)
    }

    //chart data
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

    const [Content, setContent] = useState(<div><Pie data = {data}options = {options}></Pie>
    <Bar data = {data}options = {options}></Bar></div>)

    return (
        <div className='chart'>
            {Content}
            <button onClick={getAnalytics2}>Get Analytics</button>
        </div>
    )
}

export default AnalyticsFunctionality;