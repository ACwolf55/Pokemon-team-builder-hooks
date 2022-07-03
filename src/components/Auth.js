import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Auth =()=> {
      const navigate = useNavigate()
      const [user_name, setuser_name] = useState('')
      const [password, setpassword] = useState('')
    
    


 const register = () => {

    if (password === ''){alert("Password cannot be empty")}
    else{
    axios.post('/auth/register', { user_name, password })
      .then(res => {
          setuser_name('')
          setpassword('')

        navigate('/Loggedin')
      })
      .catch(err => {
        setuser_name('')
        setpassword('')
        alert(err.response.request.response)
      })
      console.log('axios test')
    }
  }

 const login = () => {
  
    axios.post('/auth/login', { user_name, password })
      .then(res => {
        
      })
      .catch(err => {
        setuser_name('')
        setpassword('')
        alert(err.response.request.response)
      })
  }

  
    return (
      <div className="no-auth">
        <div className='auth-form'>
        <input
          type="text"
          placeholder="Username"
          value={user_name}
          onChange={e => setuser_name(e.target.value)} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setpassword(e.target.value)} />
        <button onClick={login}>Log In</button>
        <button onClick={register} id="reg"> Register </button>
        </div>
      </div>
    );
  }
  


// function mapStateToProps(reduxState) {
//   return reduxState
// }

// export default connect(mapStateToProps,{updateUser})(Auth)

export default Auth