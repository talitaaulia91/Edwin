import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import React from 'react'

export default function App() {
  return (
    <div className="App">
      <meta name="csrf-token" content="{{ csrf_token() }}" />

      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

