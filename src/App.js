import React, { useEffect, useState } from 'react'
import './App.scss'
// Import React Router
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// Import React Google Analytics
import ReactGA from 'react-ga'
// Import Components
import Weather from './components/Weather'
import LocationInput from './components/LocationInput';
import Loader from './components/Loader';
import Alert from './components/Alert'




export default function App() {
  const [mounted, setMounted] = useState(true)
  const [loader, setLoader] = useState(true)
  const [userLocation, setUserLocation] = useState()
  const [allCity, setAllCity] = useState([])
  const [alert, setAlert] = useState()
  useEffect(() =>{
    ReactGA.initialize('G-S75JB5D6QL')
    ReactGA.pageview(window.location.pathname + window.location.search)
    document.title='Starry Weather'
    
    // Display a loader
    setTimeout(() =>{
      setLoader(false)
    }, 1000)

    // Get location of user with a native navigator methods
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(el =>{
          setUserLocation({lat:el.coords.latitude, lng:el.coords.longitude})
        });
      } else {
        setMounted(false)
      }
    }
    getLocation()
  },[])

  // Handle display of a new location from <LocationInput/>
  function handleLocation(city){
    setAllCity([...allCity, city])
  }
  
   // Handle display of a new alert from <Weather/> to <Alert/> by 'alert'
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
              {mounted && <Weather coords={userLocation ? userLocation : undefined} handleAlert={handleAlert} />}
              {allCity.map((el, index)=>(
                <Weather key={index} city={el} handleAlert={handleAlert} /> 
              ))}
              <div className='flex-col'>
                <LocationInput onChange={handleLocation} alert={alert}/>
                <Alert alert={alert} handleAlert={handleAlert}/>
              </div>
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
