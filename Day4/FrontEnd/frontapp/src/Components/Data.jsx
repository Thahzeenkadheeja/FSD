import React from 'react'
import { TextField,Typography,Button } from '@mui/material'

const Data = () => {
  return (
    <div>
         <br></br>
        <Typography variant='h4'>Employee Details</Typography>
        <br></br>
        <TextField label="Name" variant="outlined" />
        <br></br>
        <br></br>
        <TextField label="Age" variant="outlined"/>
        <br></br><br></br>
        <TextField label="Position" variant="outlined"/>
        <br></br><br></br>
        <TextField label="Salary" variant="outlined"/>
        <br></br><br></br>
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Data