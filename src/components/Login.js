
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "" , password: ""})
    let navigate = useNavigate();

     const host = "https://notexbackend-3.onrender.com"
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`,{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
              
            },
          body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json()
          console.log(json)
          if (json.success){
            // save the auth token and redirect
            localStorage.setItem('token' ,json.authToken);
            // console.log(json.authToken)
            props.showAlert("Login Sucessfully", "success")
            // console.log(json.success)
            navigate('/');
          }
          else{
            props.showAlert("Invalid Credentials", "error")
          }
    }
    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
  return (
    <div className='mt-3'>
      <h2>Login to continue to Notex</h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentials.email} name='email' onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} name='password' onChange={onChange} id="password"/>
  </div>
 
  <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Login
