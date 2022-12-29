import React, { useState } from 'react';
import "./Register.css";
import {Link} from "react-router-dom";
import axios from "axios";


function Register() {
    const initialData = {
        username:"",
        password:"",
        re_password:"",
        dob:""
    }

    const[data,setData]=useState(initialData);
    function eventHandler(e){
        setData({...data,[e.target.id]:e.target.value});
    }

   async function postData(e){
    try{
        e.preventDefault();
        if(data.password === data.re_password){
            const res = await axios.post('http://localhost:4000/register',data);
            console.log(res.data);
            alert("user register successfuly please log in now")
        } else {
            alert("some field remains or password is incorrect");
        } 
        // const res = await axios.post('http://localhost:4000/register',data);
        // console.log(res.data);
    }
    catch(e){
        console.log(`got error $(e)`);
    }
    }
  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={postData}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' placeholder='Enter username...' onChange={eventHandler} required/>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='Enter password...' onChange={eventHandler} required/>
            <label htmlFor="re_password">Confirm Password</label>
            <input type="password" id='re_password' placeholder='Confirm password...' onChange={eventHandler} required/>
            <label htmlFor="dob">DOB</label>
            <input type="date" id='dob' placeholder='Enter date of birth...' required/>
            <button>Register</button>
        </form>
        <div>
            <Link to={'/login'}>if you are already user then click here to login</Link>
        </div>
    </div>
  )
}

export default Register;