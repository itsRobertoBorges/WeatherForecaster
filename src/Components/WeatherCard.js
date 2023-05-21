import React, { useState } from 'react'
import '../App.css'

// API
const api = {
  key: '5897c441f8979a0eb48236a5e0eda215',
  base: 'https://api.openweathermap.org/data/2.5/',
}

const WeatherCard = () => {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState({})

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&&APPID=${api.key}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        setWeather(result)
      })
  }

  return (
    <div className='main'>
      <div>
        <input
          size="25"
          className='main-input'
          type='text'
          placeholder='Enter City Here'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn" onClick={searchPressed}>Search</button>
      </div>

      
      <div>
      {weather.name && (
        <>
          <p className='input-result'>{weather.name}</p>
          <p className='input-result'>{weather.main.temp}°C</p>
          <p className='input-result'>{weather.weather[0].main}</p>
          <p className='input-result'>({weather.weather[0].description})</p>
        </>
      )}
      </div>
      
    </div>
  )
}

export default WeatherCard;
