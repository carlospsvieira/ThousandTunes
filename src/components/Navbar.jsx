import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/favorite">Favorite</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <div>
          <Link to="/">Sign out</Link>
        </div>
      </>
    )
  }
}
