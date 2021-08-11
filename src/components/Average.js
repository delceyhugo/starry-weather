import React from 'react'
import './Average.scss'

export default function Average(props) {
    return (
        <div className='average-wrap'>
            <div className='col'>
                <ul>
                    <li>
                        <h3>Humidity</h3>
                        <p>{props.curentData.humidity + ' %'}</p>
                    </li>
                    <li>
                        <h3>Feels like</h3>
                        <p>{props.curentData['feelslike_' + props.params.temp]}°</p>
                    </li>
                    <li>
                        <h3>UV index</h3>
                        <p>{props.curentData.uv}</p>
                    </li>
                </ul>
            </div>
            <div className='line'></div>
            <div  className='col'>
                <ul>
                    <li>
                        <h3>Chance of rain</h3>
                        <p>{props.dailyData.daily_chance_of_rain + ' %'}</p>
                    </li>
                    <li>
                        <h3>Chance of snow</h3>
                        <p>{props.dailyData.daily_chance_of_snow + ' %'}</p>
                    </li>
                    <li>
                        <h3>Clouds</h3>
                        <p>{props.curentData.cloud + ' %'}</p>
                    </li>
                </ul>
            </div>
            <div className='line'></div>
            <div className='col'>
                <ul>
                    <li>
                        <h3>Wind direction</h3>
                        <p>{props.curentData.wind_dir}</p>
                    </li>
                    <li>
                        <h3>Wind speed</h3>
                        <p>{props.curentData['wind_'+ props.params.speed] + ' ' + props.params.speed}</p>
                    </li>
                    <li>
                        <h3>Pressure</h3>
                        <p>{props.curentData['pressure_'+ props.params.pressure] + ' ' + props.params.pressure}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
