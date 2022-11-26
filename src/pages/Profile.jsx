import React, { Component } from 'react'
import profile_pircture from '../images/profile.png'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <img src={ profile_pircture } alt="profile" />
        <h4>Carlos Vieira</h4>
        <span>
          Hi there! This is a music app sample. <br />
          I hope you've enjoyed it so far! <br />
          Cheers!
        </span>
      </div>
    )
  }
}
