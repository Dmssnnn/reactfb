import React from 'react'

const Input = ({placeHolder, width, height , type, onChange}) => {
  return (
    <input className='loginInput' style={{width : width , height : height ,}}  placeholder={placeHolder} type = {type}   onChange ={onChange} />
  )
}

export default Input