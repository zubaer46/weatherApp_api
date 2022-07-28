import React from 'react'

const Wind_speed = (props) => {
  return (
    <div>
      <p>Wind Speed</p>
      {props.data.wind ? <p className="bold">{props.data.wind.speed} MPH</p> : null}
    </div>
  )
}

export default Wind_speed