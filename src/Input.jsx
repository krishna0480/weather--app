import React from 'react'
import { Button } from 'react-bootstrap'
import './Input.css'
function Input({input,setInput,findWeather}) {

   const handleChange=(event)=>{
     setInput(event.target.value)
     console.log(input)
   }

   const handleClick=(event)=>{
    event.preventDefault();
    findWeather()

   }

   

  return (
    <div className='container1'> 
    <div className="input">
        <h1>Google Weather App</h1>
        <p>Powered By</p>
        <img src="\assets\search.png" alt="" /> <br />
        <form>
        <input type="text" placeholder='Enter the City Name' onChange={handleChange} value={input}/> <br />
        <Button className='btn-success' type='submit' onClick={handleClick}>Search</Button>
        </form>
    </div>
    </div>
  )
}

export default Input