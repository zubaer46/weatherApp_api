import React from 'react'

const Feels_like = (props) => {
  return (
    <div>
      <p>feels like</p>
      {props.data.main ? (
        <p className="bold">{props.data.main.feels_like.toFixed() - 273}°C</p>
      ) : null}
    </div>
  )
}

export default Feels_like
