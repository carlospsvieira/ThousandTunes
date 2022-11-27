import React, { Component } from 'react'
import Header from '../components/Header'
import profile_pircture from '../images/profile.png'

export default class Profile extends Component {
  render() {
    return (
      <>
        <section>
          <Header />
        </section>
        <div className="profile-container">
          <img src={profile_pircture} alt="profile" />
          <h4>Carlos Vieira</h4>
          <span>
            Hi there! This is a music app sample. <br />
            There's still some work to be done. <br />
            I hope you've enjoyed it so far! <br />
            Cheers!
          </span>
        </div>
      </>
    )
  }
}
