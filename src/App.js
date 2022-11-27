import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Album from './pages/Album';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/ThousandTunes" render={ (props) => (<Login { ...props } /> )} />
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/favorite"><Favorite /></Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route exact path="/album/:id" render={ (props) => (<Album { ...props } /> )} />
        <Route exact path="*"><NotFound /></Route>
      </Switch>
    )
  }
}
