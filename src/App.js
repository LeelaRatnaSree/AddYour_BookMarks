import React, { Component } from 'react'
import NavBar from './NavBar'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './SignUp';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/Navbar" element={<NavBar />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
