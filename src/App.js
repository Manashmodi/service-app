import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './component/Header';
import "./style/App.scss"
import "./style/header.scss"
import "./style/home.scss"
import "./style/Footer.scss"
import "./style/Contact.scss"
import "./style/Services.css"
import "./style/mediaquery.scss"

import Home from './component/Home'
import Footer from './component/Footer';
import Contact from './component/Contact'
import Services from './component/Services'

const App = () => {
  return (
    <Router> 
      <Header/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/services"element={<Services/>}/>

        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App