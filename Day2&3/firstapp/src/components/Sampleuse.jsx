import { Button,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Sampleuse = () => {
    var[x,setx]=useState("welcome")

    const reacthandle=()=>{
        setx("Hello React")
    }
     const angularhandle=()=>{
        setx("Angular")

     }
     const viewhandle=()=>{
        setx("View")
     }   
     useEffect(()=>{
        reacthandle();
     },[])
        

  return (
    <div> 
        <br></br><br></br>
        <Typography variant='h6'>{x}</Typography>
        <br></br>
        <Button variant='contained' color='error' onClick={reacthandle}>React</Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={angularhandle}>Angular</Button>&nbsp;&nbsp;
        <Button variant='contained' color='error' onClick={viewhandle}>View</Button>&nbsp;&nbsp;

    </div>
  )
}

export default Sampleuse