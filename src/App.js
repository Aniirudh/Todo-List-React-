import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import ContactMe from './pages/ContactMe';
import Home from './pages/Home';
import Login from './pages/Login';
import Welcome from './pages/Welcome'
import TodoList from './TodoList';

function App() {
  return (
    <div className="App1">
       <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/contact-me' element={<ContactMe />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/welcome' element={<Welcome />}/>
          
        </Routes>

    </div>
  );
}

export default App;
