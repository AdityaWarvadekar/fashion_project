import React from 'react'
import "../styles/polaroidStyle.css";

const PolaroidStyle = (props) => {
  return (
    <div className='photo'>
        <img src={require("../images/style1.jpg")} alt="img"/>
        <h1>{props.text}</h1>
    </div>
  )
}

export default PolaroidStyle