import React, { useEffect, useState, useRef } from 'react'
import './Weather.scss'
// Import Axios for API call
import axios from 'axios'
// Import Components
import ForecastWeatherDay from './ForecastWeatherDay'
import ForecastWeatherHour from './ForecastWeatherHour'
import Average from './Average';
import Settings from './Settings';
import Loader from './Loader';

export default function Weather(props) {
    const componentEl = useRef(null);
    const cardEl = useRef(null);
    const [mounted, setMounted] = useState(true)
    const [toggleTabs, setToggleTabs] = useState(1)
    const [weather, setWeather] = useState()
    const [apiKey, setApiKey] = useState()
    const [params, setParams] = useState({lang:'en',temp:'c',speed:'kph',pressure:'mb'})

    useEffect(() => {
        // Set Api key
        setApiKey('9fc431d6956447d08eb223147210108')

        // Fetch data if api is defined and component is mount
        if(apiKey !== undefined && mounted === true){
            if(props.city !== undefined){
                fetchData(props.city)
            }
            else if(props.coords !== undefined){
                fetchData(props.coords.lat + ',' + props.coords.lng)
            }
        }

        // Fetch Forecast and Current weather
        function fetchData(where){
            axios('https://api.weatherapi.com/v1/forecast.json?key=' + apiKey + '&q='+ where +'&days=2&alerts=yes&lang='+ params.lang)
            .then(res =>{
                // console.log(res.data)
                setWeather(res.data)
                handleCssEffect(res.data.current.condition.code, res.data.current.is_day, res.data.forecast.forecastday[0].astro.moon_phase)
            })
            .catch(error =>{
                if (error.response) {
                    props.handleAlert(error.response.data.error.message)
                }
                setMounted(false)
            })
        }
    }, [props, apiKey, params, mounted])

    // Handle display of footer tabs
    const toggleTab = (index) =>{
        setToggleTabs(index)
    }
    
    // Handle display of component and if he mounted or not
    function closeComponent() {
        setMounted(false)
    }
    
    // Handle component settings from <Settings/>
    function handleSettings(params){
        setParams(params)
    }

    // Handle Css style and effect (like 'Sunny' or 'Cloudy') and apply a corresponding class
    function handleCssEffect(code, day, moon_phase){
        if(moon_phase !== 'Fullmoon'){
            switch (day) {
                case 1:
                    cardEl.current.classList.add('day')
                    break;
                case 0:
                    cardEl.current.classList.add('night')
                    break;
                default:
                    break;
            }
        }
        else{
            cardEl.current.classList.add('fullmoon')
        }
        switch (code) {
            case 1003 || 1006 || 1063 || 1066 || 1069 || 1072 || 1087 || 1114:
                cardEl.current.classList.add('litecloudy')
                break;
            case 1009 || 1117 :
                cardEl.current.classList.add('overcast')
                break;
            default:
                break;
        }
    }

    return (
        <>{mounted && 
            <div className='Weather' ref={componentEl}>
                {weather ?
                <div className='card'ref={cardEl}>
                    <div className='top'>
                        <img onClick={closeComponent} className='close-component' src="https://img.icons8.com/windows/64/ffffff/macos-close.png" alt='close component'/>
                        <h3>{weather ? weather.location.name : 'Unknown'}</h3>
                        <h1 className='temp'>{weather ? Math.floor(weather.current['temp_' + params.temp]) : '0'}??</h1>
                        <h2 className='weather'>{weather ? weather.current.condition.text : 'unknown'}</h2>
                        <p>
                            {weather ? 'Max: ' + Math.floor(weather.forecast.forecastday[0].day['maxtemp_' + params.temp]) + '?? ' : '0'}
                            {weather ? '/ Min: ' + Math.floor(weather.forecast.forecastday[0].day['mintemp_' + params.temp]) + '??' : '0'}
                        </p>
                    </div>
                    <div className='middle'>
                        <div className='clouds'>
                            <div className='cloud cloud1'></div>
                            <div className='cloud cloud2'></div>
                            <div className='cloud cloud3'></div>
                            <div className='cloud cloud4'></div>
                            <div className='cloud cloud5'></div>
                            <div className='cloud cloud6'></div>
                            <div className='cloud cloud7'></div>
                        </div>
                        <div className='sun-viewbox'>
                            <div className='sun'></div>
                        </div>
                    </div>
                    <div className='bot'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 505 200"><defs><linearGradient id="D??grad??_sans_nom_13" x1="352.96" y1="60.25" x2="386.46" y2="200.15" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"/><stop offset="0.03" stopColor="#fff" stopOpacity="0.93"/><stop offset="0.18" stopColor="#fff" stopOpacity="0.65"/><stop offset="0.33" stopColor="#fff" stopOpacity="0.42"/><stop offset="0.45" stopColor="#fff" stopOpacity="0.24"/><stop offset="0.57" stopColor="#fff" stopOpacity="0.11"/><stop offset="0.66" stopColor="#fff" stopOpacity="0.03"/><stop offset="0.73" stopColor="#fff" stopOpacity="0"/></linearGradient><linearGradient id="D??grad??_sans_nom_13-2" x1="277.11" y1="48.33" x2="298.29" y2="85.02" xlinkHref="#D??grad??_sans_nom_13"/><linearGradient id="D??grad??_sans_nom_13-3" x1="296.38" y1="13.1" x2="317.54" y2="66.44" xlinkHref="#D??grad??_sans_nom_13"/><linearGradient id="D??grad??_sans_nom_13-4" x1="170.88" y1="88.15" x2="211.06" y2="113.13" xlinkHref="#D??grad??_sans_nom_13"/><linearGradient id="D??grad??_sans_nom_13-5" x1="273.47" y1="35.18" x2="303.17" y2="63.34" xlinkHref="#D??grad??_sans_nom_13"/></defs><g id="Calque_2" data-name="Calque 2"><g id="Calque_3" data-name="Calque 3"><polygon id="mount" className="cls-1" points="4.5 160.5 148.5 60.5 155.5 60.5 162.5 56.5 168.5 61.5 181 52 188 53 200 41 208 41 236 13 243 15 250 6 257 10 259 0 279 11 285 11 301 25 314 26 330 42 353 46 377 64 382 65 407 87 415 83 423 90 433 89 505 146 505 419 0 419 4.5 160.5"/><g id="shadows"><polygon className="cls-2" points="314 206 280 152 261 144 236 121 236 103 253 114 236 90 236 77 260 94 260 83 282 106 315 121 312 110 334 120 332 94 317 74 331 80 325 62 347 61 339 51 348 55 353 46 368 65 377 64 382 65 407 87 411 90 415 83 431 98 433 89 505 146 478 158 457 134 410 106 451 141 435 171 413 161 406 149 365 118 407 174 314 206"/><polygon className="cls-3" points="286 84 279 71 257 55 277 59 263 40 313 69 286 84"/><polygon className="cls-4" points="316 63 264 23 250 6 269 15 259 0 279 11 285 11 301 25 314 26 330 42 353 46 316 63"/><path className="cls-5" d="M179,139c-1-2-24-35-24-35l42,12L153,88l-2-16,21,11h7l27,28,6-24-16-4L175,63l10,1-4-12,7,1,17,16,24,14-18,68Z"/><polygon className="cls-6" points="286 49 267 34 272 33 288 44 294 51 286 49"/></g></g></g></svg>
                        <div className='footer-content'>
                            <div className='top'>
                                <h3>{weather ? new Date(weather.location.localtime_epoch * 1000).toLocaleDateString(params.lang, {weekday: 'long', day: 'numeric', month: 'short'}) : null}</h3>
                                <div>
                                    <svg className={toggleTabs === 1 ? 'active-svg' : null} onClick={() =>{toggleTab(1)}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>
                                    <svg className={toggleTabs === 2 ? 'active-svg' : null} onClick={() =>{toggleTab(2)}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                                    <svg className={toggleTabs === 3 ? 'active-svg' : null} onClick={() =>{toggleTab(3)}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='bot'>
                                <div className={toggleTabs === 1 ? 'tab-temp' : 'hide'}>
                                    {weather ? <ForecastWeatherHour key={parseInt(weather.location.localtime.substr(11,2))} data={weather.current} params={params} type={'current'} /> : null}
                                    {weather ? <ForecastWeatherDay num={4} localTime={parseInt(weather.location.localtime.substr(11,2))+1} today={weather.forecast.forecastday[0]} tomorrow={weather.forecast.forecastday[1]} params={params} /> : null}
                                </div>
                                <div className={toggleTabs === 2 ? 'tab-stat' : 'hide'}>
                                    {weather ? <Average dailyData={weather.forecast.forecastday[0].day} curentData={weather.current} params={params} /> : null}
                                </div>
                                <div className={toggleTabs === 3 ? 'tab-settings' : 'hide'}>
                                    <Settings onChange={handleSettings}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>: <Loader/>}
            </div>}
        </>
    )
}
