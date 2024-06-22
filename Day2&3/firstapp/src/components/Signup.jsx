import React from 'react'

const Signup = () => {
  return (
    <div>
        <h3>SIGN UP</h3>
        <form>
            Username: <input type='text' name='username'id='username'></input><br></br><br></br>
            email:    <input type='email' id='email'></input><br></br><br></br>
            password: <input type='password' id='pswd'></input><br></br><br></br>
            <input type='submit' value='submit'></input>
        </form>
        
        </div>
  )
}

export default Signup