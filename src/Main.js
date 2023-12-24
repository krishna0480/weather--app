import React, { useState } from 'react'
import './Main.css'
import Input from './Input'
import axios from 'axios'
import Result from './Result'

function Main() {

  const [input,setInput]=useState("")
  const [temp,setTemp]=useState("")
  const [weatherDesc,setWeatherDesc]=useState("")
  const [icon,setIcon]=useState("")

  const findWeather =async()=>{
    const apikey="32b94241424f4fddb0c55249231112";
    const unit="metric"
    const url="https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=8b659b6bd54cdb09b7a4bff7beed0968"

    axios.get(`http://api.weatherapi.com/v1/current.json?key=32b94241424f4fddb0c55249231112&q=${input}`)
    .then(res=>{console.log(res)
      const temp = res.data.current.temp_c
      const weatherDescription = res.data.current.condition.text
      const icon = res.data.current.condition.icon
      console.log(temp,weatherDescription,icon);
      
      setTemp(temp);
      setWeatherDesc(weatherDescription)
      setIcon(icon)
      
})
  }
  return (
    <div className='Main'>
      { temp === "" ?
   (<Input input={input} setInput={setInput} findWeather={findWeather}/>):(
   <Result temp={temp} weatherDesc={weatherDesc} icon={icon} input={input} setTemp={setTemp} setInput={setInput}/>)
  }
    </div>
  )
}

export default Main