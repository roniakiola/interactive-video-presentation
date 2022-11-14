import './css/index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './views/Home';
import Create from './views/create';
import LoginPage from './Auth/LoginPage';

import { useEffect, useState } from 'react';

function App() {
  const[Posts, setPosts]=useState([]) //hakee posts
  const[error, setError]=useState({}) //palauttaa error

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts') //Tänne se API
    .then(response =>response.json()) //hakee postin body, id, title ja UserIDp
    .then(res=>console.log(res.slice(0,10))) //määrittää että palautetaan 10 ekaa tulosta
    .catch(err=>console.log(err)) //palauttaa error konsoliin
 
  }, [])
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/LoginPage' element={<LoginPage/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;