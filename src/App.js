import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import { Switch, Route } from "react-router-dom";
import Tour from './Components/Tour'
import Home from './Components/Home'
// import Footer from './Components/Footer'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/tours">
            <Tour />
          </Route>
          <Route path="/">
            <Home exact path="/" />
          </Route>
        </Switch>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
