import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
