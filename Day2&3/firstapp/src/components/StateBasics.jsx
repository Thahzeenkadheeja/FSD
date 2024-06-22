import { Button,Typography,TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setFname]=useState("Thahzi")
    var [val,setval]=useState()
     const submithandler=()=>{
        setFname(val)
     }
    const handleInput=(e)=>{
     console.log(e.target.value)
     setval(e.target.value)
    }
  return (
    <div>
        <br></br>
        <Typography variant='h6'>WELCOME {fname}</Typography>
        <br></br>
        <TextField variant="outlined" label="Type your Name" onChange={handleInput}/>
        <br></br><br></br>
        <Button variant="contained" onClick={submithandler}>SUBMIT</Button>
        
    
    </div>
  )
}

export default StateBasics