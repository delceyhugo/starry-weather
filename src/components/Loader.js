import React from 'react'
import './Loader.scss'

export default function Loader() {
    return (
        <div className='Loader'>
            <img src="https://img.icons8.com/dusk/100/000000/partly-cloudy-day--v2.png" alt='Loading logo'/>
            <h1>We checking the starry sky</h1>
            <h1>Please wait <span>.</span> <span>.</span> <span>.</span></h1>
            
        </div>
    )
}
