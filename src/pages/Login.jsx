import React, { Component } from 'react';
import Loading from '../components/Loading';
import { createUser } from '../data/userAPI';

export default class Login extends Component {
  state = {
    name: '',
    email: '',
    loading: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async () => {
    const { name, email } = this.state;
    const { history } = this.props;
    const info = { name, email };
    this.setState({ loading: true })
    await createUser(info);
    this.setState({ name: '', email: '', loading: false, success: true })
    history.push("./home");
  }

  enterToSubmit = (e) => {
    e.preventDefault();
    this.handleSubmit();
  }

  render() {
    const { name, email, loading } = this.state;
    return (
      <>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>ThousandTunes</h1>
            <form
              className="login-container"
              onSubmit={this.enterToSubmit}
            >
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="New Username"
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
              />
              <button
                type="submit"
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </form>
          </>
        )}

      </>
    );
  }
}
