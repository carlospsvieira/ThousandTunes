import React, { Component } from 'react'
import giphy from '../images/giphy.gif'

export default class Loading extends Component {
  render() {
    return (
        <img src={ giphy } alt="loading" />
    )
  }
}
