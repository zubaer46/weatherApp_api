import React from 'react'


const Pressure = (props) => {
  return (
    <div>
      <p>Pressure</p>
      {props.data.main ? <p className="bold">{props.data.main.pressure.toFixed(1)} hPa</p> : null}
    </div>
  )
}

export default Pressure
