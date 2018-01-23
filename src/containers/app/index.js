import logo from '../../resources/img/logo.png'
import { Route, Link } from 'react-router-dom'
import Checkout from '../checkout'
import About from '../about'
import Home from '../home'
import React from 'react'
import './App.css'

const App = () => (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo"/>
        <h1 className="app-title">
          Welcome!
        </h1>
        <Link className="app-link" to="/">
          Shop
        </Link>
        <Link className="app-link" to="/about">
          About
        </Link>
      </header>
    <main>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="*" component={Home}/>
    </main>
  </div>
)

export default App