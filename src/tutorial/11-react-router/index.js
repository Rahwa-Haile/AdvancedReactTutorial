import React from 'react'
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'
import About from './About'
import Error from './Error'
import Home from './Home'
import Navbar from './Navbar'
import People from './People'
import Person from './Person'

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path='/person/:id' element={<Person/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default ReactRouterSetup