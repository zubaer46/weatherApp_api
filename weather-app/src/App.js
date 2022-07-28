import React, { useState,useEffect } from 'react'
import axios from 'axios'
import WebFont from 'webfontloader'

import Pressure from './components/Pressure'
import Windspeed from './components/Wind_speed'
import Humidity from './components/Humidity'
import Description from './components/Description'
import Feelslike from './components/Feels_like'
import Temperature from './components/Temperature'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=861fdd463bec852e9f5ab61384ba9f09`

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka','Montserrat'],
      },
    })
  }, [])

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          placeholder="Enter a Location"
          onKeyPress={searchLocation}
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <Temperature data={data} />
          <Description data={data} />

        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <Feelslike data={data} />

            <Humidity data={data} />

            <Windspeed data={data} />

            <Pressure data={data} />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
