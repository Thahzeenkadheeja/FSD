import { TextField,Button,Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br></br>
        <Typography variant='h6'>LOGIN</Typography>
        <br></br>
        <TextField label="username" variant="outlined" />
        <br></br>
        <br></br>
        <TextField label="password" variant="outlined"/>
        <br></br><br></br>
        <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Register