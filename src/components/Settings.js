import React, { useState } from 'react'
import './Settings.scss'

export default function Settings(props) {
    const [toggleTabs, setToggleTabs] = useState({lang:'en',temp:'c',speed:'kph',pressure:'mb'})
    const toggleTab = (type, value) =>{
        switch (type) {
            case 'lang':
                setToggleTabs({...toggleTabs,lang:value})
                props.onChange({...toggleTabs,lang:value})
                break;
            case 'temp':
                setToggleTabs({...toggleTabs,temp:value})
                props.onChange({...toggleTabs,temp:value})
                break;
            case 'speed':
                setToggleTabs({...toggleTabs,speed:value})
                props.onChange({...toggleTabs,speed:value})
                break;
            case 'pressure':
                setToggleTabs({...toggleTabs,pressure:value})
                props.onChange({...toggleTabs,pressure:value})
                break;
            default :
                break
        }
    }
    function handleSettings(event){
        console.log(event)
    }

    return (
        <div className='settings-wrap'>
            <div className='left'>
                <ul>
                    <li>Language :</li>
                    <li>Temperature : </li>
                    <li>Speed : </li>
                    <li>Pressure : </li>
                    <li>Source : </li>
                </ul>
            </div>
            <div className='right'>
                <ul>
                    <li>
                        <img onClick={() =>{toggleTab('lang','en')}} onChange={handleSettings} className={toggleTabs.lang === 'en' ? 'active' : null} src="https://img.icons8.com/dusk/64/000000/usa.png" alt='en'/>
                        <span> / </span>
                        <img onClick={() =>{toggleTab('lang','fr')}} onChange={handleSettings} className={toggleTabs.lang === 'fr' ? 'active' : null} src="https://img.icons8.com/dusk/64/000000/france.png" alt='fr'/>
                        <span> / </span>
                        <img  onClick={() =>{toggleTab('lang','es')}} onChange={handleSettings} className={toggleTabs.lang === 'es' ? 'active' : null} src="https://img.icons8.com/dusk/64/000000/spain.png" alt='es'/>
                        <span> / </span>
                        <img  onClick={() =>{toggleTab('lang','de')}} onChange={handleSettings} className={toggleTabs.lang === 'de' ? 'active' : null} src="https://img.icons8.com/dusk/64/000000/germany.png" alt='ge'/>
                    </li>
                    <li>
                        <span onClick={() =>{toggleTab('temp','c')}} onChange={handleSettings} className={toggleTabs.temp === 'c' ? 'active' : null}> Celcius</span>
                        <span> /</span>
                        <span onClick={() =>{toggleTab('temp','f')}} onChange={handleSettings} className={toggleTabs.temp === 'f' ? 'active' : null}> Fahrenheit</span>
                    </li>
                    <li>
                        <span onClick={() =>{toggleTab('speed','kph')}} onChange={handleSettings} className={toggleTabs.speed === 'kph' ? 'active' : null}> Km/h</span>
                        <span> /</span>
                        <span onClick={() =>{toggleTab('speed','mph')}} onChange={handleSettings} className={toggleTabs.speed === 'mph' ? 'active' : null}> Mph</span>
                    </li>
                    <li>
                        <span onClick={() =>{toggleTab('pressure','mb')}} onChange={handleSettings} className={toggleTabs.pressure === 'mb' ? 'active' : null}> Millibars</span>
                        <span> /</span>
                        <span onClick={() =>{toggleTab('pressure','in')}} onChange={handleSettings} className={toggleTabs.pressure === 'in' ? 'active' : null}> Inches</span>
                    </li>
                    <li>
                        <span><a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
