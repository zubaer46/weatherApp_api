import React from 'react'

const Temperature = (props) => {
  return (
    <div className="tem">
      {props.data.main ? <h1>{props.data.main.temp.toFixed() - 273}°C</h1> : null}
    </div>
  )
}

export default Temperature
