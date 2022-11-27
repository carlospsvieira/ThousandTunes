import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="main-navegation">
          <Link to="/home">Home</Link>
          <Link to="/favorite">Favorite</Link>
          <Link to="/profile">Profile</Link>
          <br />
        </div>
        <div className="signout">
          <Link to="/thousandtunes">Sign out</Link>
        </div>
      </>
    )
  }
}
