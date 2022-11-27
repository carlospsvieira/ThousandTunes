import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="main-navegation">
          <Link to="/ThousandTunes/home">Home</Link>
          <Link to="/ThousandTunes/favorite">Favorite</Link>
          <Link to="/ThousandTunes/profile">Profile</Link>
          <br />
        </div>
        <div className="signout">
          <Link to="/ThousandTunes">Sign out</Link>
        </div>
      </>
    )
  }
}
