
import React,{useState} from 'react'
import { Button,Typography } from '@mui/material'


const Counter = () => {
    var[count,setCount]=useState(0)

    const addhandler=()=>{
        setCount(count+1)}
    const subtracthandler=()=>{
        setCount(count-1)}

        const handleInput=(e)=>{
            console.log(e.target.value)
            setCount(e.target.value)}

  return (
    <div>
        <Typography variant="h5">count:{count}</Typography>
        <Button variant='contained' onClick={addhandler}>+</Button>
        <br></br> <br></br>
        &nbsp;&nbsp;
        <Button variant='contained' onClick={subtracthandler}>-</Button>
    </div>
  )
}

export default Counter