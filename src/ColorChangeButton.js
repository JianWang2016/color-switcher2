import React from 'react'

const ColorChangeButton = (props) => {
  return (
    <button className={props.color} onClick={()=> props.setColor(props.color)}>
        {props.color}
    </button>
  )
}

export default ColorChangeButton