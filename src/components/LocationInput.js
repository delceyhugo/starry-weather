import React, {useState } from 'react'
import './LocationInput.scss'

export default function LocationInput(props) {
    const [city, setCity] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if(city !== ''){
            props.onChange(city)
        }
        setCity('')
    }
    return (
        <div className='wrapper-input'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">City</label>
                <input value={city} onChange={e => setCity(e.target.value)} name="city" type="text" autoComplete="off"/>
            </form>
        </div>
    )
}
