import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';



function Register() {
const navigate = useNavigate ();
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');



const register = e => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfuly created a new user with email and password
            if(auth){
                navigate("/", { replace: true })
            }
        })
    .catch(error => alert(error.message))

    

    
}
  return (
    <div className='register'>
    <Link to='/'>
      <img className='register_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
    </Link>

    <div className='register_container'>
        <h1>Create account</h1>
        <form>
            <h5>Email</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            
            <button onClick={register} className='register_Button'>Create your Amazon Account</button>
        </form>
        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        
    </div>
    </div>
  )
}

export default Register
