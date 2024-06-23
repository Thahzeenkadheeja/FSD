import { Button,Typography,Toolbar,AppBar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5">
                  MY APP
                </Typography>
                &nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='error'><Link to='/'>Add</Link></Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/v'>View</Link></Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar