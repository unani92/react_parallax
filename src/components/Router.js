import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from '../routes/Home'


const Router = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path='/' exact component={ Home }/>
        <Route path='/about'/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router