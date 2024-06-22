import { AppBar,Toolbar,Typography,Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
        <Toolbar>
            <Typography variant='h6'>My App

            </Typography>
            &nbsp;&nbsp;
            <Button variant='contained' color='success'><Link to='/'>Login</Link></Button>&nbsp;&nbsp;
            <Button variant='contained' color='secondary'><Link to='/sin'>Signup</Link></Button>&nbsp;
            <Button variant='contained' color='warning'><Link to='/sb'>State</Link></Button>&nbsp;
            <Button variant='contained' color='error'><Link to='/c'>Counter</Link></Button>&nbsp;
            <Button variant='contained' color='success'><Link to='/l'>Listmap</Link></Button>&nbsp;
            <Button variant='contained' color='warning'><Link to='/a'>Api</Link></Button>&nbsp;
            <Button variant='contained' color='warning'><Link to='/s'>Sampleuse</Link></Button>&nbsp;
            <Button variant='contained' color='warning'><Link to='/cg'>CardGet</Link></Button>&nbsp;
            
            

            </Toolbar> 
            </AppBar>   
            </div>
  )
}

export default Navbar