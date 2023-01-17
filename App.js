import React, {useState} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './client/src/components/login';
import Header from './client/src/components/heaader';
import Register from './client/src/components/register';
import MainPage from './client/src/components/main';
import Page from './client/src/components/page';
import Activated from './client/src/components/activated'
import Activation from './client/src/components/activation'
import './App.css';


function App() {
  const [name, setName] = useState("")
  const [message, setMessages] = useState(" messages:")

  const handleClick = async () => {
    await fetch("http://localhost:8080/login", {
      method: 'POST',
      headers: { 'Content-Type':'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email:"eldokha04@gmail.com",
        password:"qweqweqwe",
      })
    }).then(r => r.json()).then((response) => {
      console.log(response);
    })
  }

  return (
    <BrowserRouter>
      <Header name={name} />
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/page"} element={<Page />} />
        <Route path={"/activated"} element={<Activated />} />
        <Route path={"/activation"} element={<Activation />} />

        <Route path={"*"} element={<MainPage />} />
      
      </Routes>
  </BrowserRouter>
  );
}

export default App;
