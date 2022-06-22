// import React, { useState } from 'react';
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';


// const Auth =(props)=> {
//       const navigate = useNavigate()
//       const [user_name, setuser_name] = useState('')
//       const [password, setpassword] = useState('')
    
    


//  const register = () => {

//     if (password === ''){alert("Password cannot be empty")}
//     else{
//     axios.post('/auth/register', { user_name, password })
//       .then(res => {
//           setuser_name('')
//           setpassword('')
  
//     props.updateUser(res.data)
//         navigate('/Loggedin')
//       })
//       .catch(err => {
//         this.setState({ user_name: '', password: '' })
//         alert(err.response.request.response)
//       })
//       console.log('axios test')
//     }
//   }

//  const login = () => {
  
//     axios.post('/auth/login', { user_name, password })
//       .then(res => {
//         this.setState({ user_name: '', password: '' })
//         this.props.updateUser(res.data)
//         this.props.history.push('/Loggedin')
//       })
//       .catch(err => {
//         this.setState({ user_name: '', password: '' })
//         alert(err.response.request.response)
//       })
//   }


  

//   const handleUsernameInput = (value) => {
//     this.setState({ user_name: value})

//   }

//   const handlePasswordInput = (value) => {
//     this.setState({
//       password:value
//     })
//   }

  
//     return (
//       <div className="no-auth">
//         <div className='auth-form'>
//         <input
//           type="text"
//           placeholder="Username"
//           value={user_name}
//           onChange={e => handleUsernameInput(e.target.value)} />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => handlePasswordInput(e.target.value)} />
//         <button onClick={login}>Log In</button>
//         <button onClick={register} id="reg"> Register </button>
//         </div>
//       </div>
//     );
//   }
  


// function mapStateToProps(reduxState) {
//   return reduxState
// }

// export default connect(mapStateToProps,{updateUser})(Auth)