import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';


const Nav =()=> {
      let loginName = sessionStorage.getItem("user_name");
      let id = sessionStorage.getItem("id");
      const navigate = useNavigate()
      const [user_name, setuser_name] = useState('')
      const [password, setpassword] = useState('')
      const [loggedIn, setloggedIn] = useState(false)
    
    


 const register = () => {

    if (password === ''){alert("Password cannot be empty")}
    else{
    axios.post('/auth/register', { user_name, password })
      .then(res => {
        sessionStorage.setItem("username", res.data.user_name);
        sessionStorage.setItem("id", res.data.id);
          setuser_name('')
          setpassword('')

        setloggedIn(true)
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
  
    axios.post("/auth/login", { user_name, password })
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("user_name", res.data.user_name);
        sessionStorage.setItem("id", res.data.id);
        setloggedIn(true)
      })
      .catch(err => {
        setuser_name('')
        setpassword('')
        alert(err.response.request.response)
      })
      console.log()
  }

  const logout =()=> {
    axios.get('/auth/logout')
        .then(() => {
            console.log('test')
            sessionStorage.clear()
            setloggedIn(false)
        })
        .catch(err => console.log(err))
}

  
    return (
      <nav>
        {id===null
        ?
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
      :
      <div className='logged-in-nav'>
      <h3>{loginName}</h3>
     

      <Link to='/SavedPokemonTeam' className='all-teams-link'>
          <h1>View all Teams</h1>
      </Link>
      <button onClick={logout}>Logout</button>
      </div>
    }
    </nav>
    );
  }
  

export default Nav