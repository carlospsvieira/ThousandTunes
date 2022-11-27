import React, { Component } from 'react';
import { getUser } from '../data/userAPI';
import Loading from './Loading';
import Navbar from './Navbar';

export default class Header extends Component {
  state = {
    user_name: '',
    loading: false
  }

  componentDidMount() {
    this.headerName();
  }

  headerName = async () => {
    this.setState({ loading: true })
    const info = await getUser()
    const { name } = info;
    this.setState({ user_name: name, loading: false })
  }

  render() {
    const { user_name, loading } = this.state;
    return (
      <>
        {loading ? (<Loading />) : (
          <div className="header-container">
            <header>{`Welcome, ${user_name}!`}</header>
          </div>
        )}
        <div className="navbar-container">
          <Navbar />
        </div>
      </>
    );
  }
}