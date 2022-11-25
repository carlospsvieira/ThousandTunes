import React, { Component } from 'react'
import Header from '../components/Header';

export default class Favorite extends Component {
  state = {
    tracks_url: [],
    tracks_name: []
  };

  componentDidMount() {
    this.readFavorite();
  }

  readFavorite = () => {
    const favorite_url = JSON.parse(localStorage.getItem('url'));
    const favorite_name = JSON.parse(localStorage.getItem('name'));
    this.setState({
      tracks_url: favorite_url,
      tracks_name: favorite_name
    });
  }

  render() {
    const { tracks_url, tracks_name } = this.state;
    return (
      <div>
        <section>
          <Header />
        </section>
        <h2>We like them too!</h2>
        <div>
          {tracks_name.map((track_name) => (
            <span>{track_name}</span>
          ))}
        </div>
        <div>
          {tracks_url.map((preview_url) => (
            <audio data-testid="audio-component" src={preview_url} controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>

          ))}
        </div>
      </div>
    )
  }
}
