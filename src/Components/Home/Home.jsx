import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

function Home() {
  return (
    <div className='home_header'>
        <div className='inner_header'>
          <nav>
              <h1>sports</h1>
              <ul>
                <li><Link to={'./login'}>Login</Link></li>
              </ul>
          </nav>
        </div>
        <div>
          <form >
            <label htmlFor=""></label>
          </form>
        </div>
    </div>
  )
}

export default Home