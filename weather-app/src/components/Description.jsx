import React from 'react'

const Description = (props) => {
  return (
    <div className="description">
      {props.data.weather ? <p>{props.data.weather[0].main}</p> : null}
    </div>
  )
}

export default Description
