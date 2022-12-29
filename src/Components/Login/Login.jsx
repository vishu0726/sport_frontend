import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Login() {
  const initialData = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState([]);
  const [data, setData] = useState(initialData);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function eventHandler(e) {
    setData({ ...data, [e.target.id]: e.target.value });
  }
//   console.log(user);
  function postData(e) {
    try {
      e.preventDefault();
      if (data.password && data.username) {
        if (user.some((ele) => ele.username === data.username)) {
          if (user.some((ele) => ele.password === data.password)) {
            setUsername(data.username);
            navigate('/');
          } else {
            alert("password does not match");
          }
        } else {
          alert("username is incorrect");
        }
      } else {
        alert("field is empty");
      }
    } catch (e) {
      alert(`some error got $(e)`);
    }
  }
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:4000/login");
      setUser(res.data);
    //   console.log(user);
    }
    fetchData();
  }, []);
//   console.log(user);

  return (
    <div>
      <h1>Login Page</h1>
      <h1>{username}</h1>
      <form onSubmit={postData}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username..."
          onChange={eventHandler}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password..."
          onChange={eventHandler}
          required
        />
        <button>Login</button>
      </form>
      <div>
        <Link to={"/register"}>click here for register</Link>
      </div>
    </div>
  );
}

export default Login;
