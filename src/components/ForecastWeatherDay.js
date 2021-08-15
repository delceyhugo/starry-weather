import React, { useEffect, useState } from 'react'
import ForecastWeatherHour from './ForecastWeatherHour'
import './ForecastWeather.scss'

export default function ForecastWeatherDay(props) {
    const [sortedData, setSortedData] = useState()
    useEffect(() => {
        // Handle organization of forecast weather by hours
        function sortingData(el){
            let sortedData = []
            if(el.localTime <= (23 - props.num)){
                el.today.hour.slice(el.localTime, el.localTime + props.num).forEach(hour => {
                    sortedData.push(hour)
                });
            }
            else{
                let availableHours = (24 - el.localTime)
                el.today.hour.slice(el.localTime, el.localTime + availableHours).forEach(hour => {
                    sortedData.push(hour)
                });
                availableHours = (props.num - availableHours)
                el.tomorrow.hour.slice(0, availableHours).forEach(hour => {
                    sortedData.push(hour)
                });
            }
            setSortedData(sortedData)
        }
        sortingData(props)
    }, [props])



    return (
        <>
        {sortedData ? sortedData.map(el =>(
            <ForecastWeatherHour key={el.time.substr(11,2)} data={el} params={props.params} />
        )): null}
        </>
    )
}
