import React, { useEffect, useState } from 'react'
import './App.scss'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Weather from './components/Weather'
import LocationInput from './components/LocationInput';
import Loader from './components/Loader';

export default function App() {
  const [loader, setLoader] = useState(true)
  const [userLocation, setUserLocation] = useState()
  const [allCity, setAllCity] = useState([])
  const [alert, setAlert] = useState()
  useEffect(() =>{
    document.title='Starry Weather'
    setTimeout(() =>{
      setLoader(false)
    }, 1000)
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(el =>{
          setUserLocation({lat:el.coords.latitude, lng:el.coords.longitude})
        });
      } else {
        console.log("Geolocation is not supported by this browser.")
      }
    }
    getLocation()
  },[])
  function handleLocation(city){
    setAllCity([...allCity, city])
  }
  function handleAlert(alert){
    setAlert(alert)
  }
  return (
    <div className='App'>
      {loader? <Loader /> :
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className='slider'>
              <LocationInput onChange={handleLocation} alert={alert}/>
              <Weather coords={userLocation ? userLocation : undefined} handleAlert={handleAlert} />
              {allCity.map((el, index)=>(
                <Weather key={index} city={el} handleAlert={handleAlert} /> 
              ))}
              
            </div>
            <div className='footer'>Made with <img src="https://img.icons8.com/dusk/64/000000/like.png" alt='love'/> for learning purposes by <a href="https://delceyhugo.dev/">me</a>.</div>
          </Route>
          <Route path="/">
            <div>ERROR 404</div>
          </Route>
        </Switch>
      </Router>
      }
    </div>
  )
}
