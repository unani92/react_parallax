import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from '../routes/Home'
import About from '../routes/About'

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path='/' exact component={ Home }/>
        <Route path='/about' exact component= { About }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router