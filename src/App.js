import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/Footer'
import Services from './pages/Services'
import Products from './pages/Products'
import SignUp from './pages/SignUp'


function App() {

  return (
    <>
    <Router>
    <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component = {Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
