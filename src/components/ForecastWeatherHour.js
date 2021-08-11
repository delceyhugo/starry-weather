import './ForecastWeather.scss'

export default function ForecastWeatherHour(props) {
    return (
        <>
            {(() => {
                if (props.type === 'current') {
                return (
                    <div className='weather-wrap'>
                        <h3>Now</h3>
                        <img src={props.data.condition.icon} alt={props.data.condition.text} />
                        <h3>{Math.floor(props.data['temp_' + props.params.temp])}°</h3>
                    </div>
                )
                } else{
                return (
                    <div className='weather-wrap'>
                        <h3>{props.data.time.substr(11,2)} h</h3>
                        <img src={props.data.condition.icon} alt={props.data.condition.text} />
                        <h3>{Math.floor(props.data['temp_' + props.params.temp])}°</h3>
                    </div>
                )
                }
            })()}
        </>
    )
}
