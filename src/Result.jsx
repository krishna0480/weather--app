import React from 'react'
import { Button } from 'react-bootstrap'
import './Result.css'

function Result({temp , weatherDesc ,icon,input,setTemp,setInput}) {
  return (
    <div className='cont'>
    <div className="solid">
        <h1>{input}</h1>
        <h1>Temp : {temp} c</h1>
        <img src={icon} alt="" />
        <h3>{weatherDesc}</h3>
         <br />
        <Button className='btn-success' onClick={() => {setTemp("");setInput("")}}>Back</Button>
           </div>
    </div>
  )
}

export default Result