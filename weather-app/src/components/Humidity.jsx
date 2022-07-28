import React from 'react'

const Humidity = (props) => {
  return (
    <div>
      <p>Humidity</p>
      {props.data.main ? <p className="bold">{props.data.main.humidity}%</p> : null}
    </div>
  )
}

export default Humidity