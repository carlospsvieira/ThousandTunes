import React, { Component } from 'react'

export default class TracksCard extends Component {
  state = {
    url_tracks: [],
    tracks_name: [],
  }

  saveFavorite = (url_tracks, tracks_name) => {
    localStorage.setItem('url', JSON.stringify(url_tracks));
    localStorage.setItem('name', JSON.stringify(tracks_name));
  }

  handleFavorite = ({ target }) => {
    const { value, name } = target;
    const { url_tracks, tracks_name } = this.state;
    this.setState({
      url_tracks: [...url_tracks, value],
      tracks_name: [...tracks_name, name],
    })
    if (url_tracks.length === 0 && tracks_name.length === 0) {
      this.saveFavorite(value, name)
    }
    this.saveFavorite([...url_tracks, value], [...tracks_name, name]);
  }

  render() {
    const { tracks_list, thumbnail } = this.props;
    return (
      <div className="tracks-container">
        <div className="img-container">
          <img src={thumbnail} alt="album-cover" />
        </div>
        <>
          {tracks_list.map(({ name, preview_url }) => (
            <div key={name} className="audio-container">
              <span>{name}</span>
              <div>
                <audio data-testid="audio-component" src={preview_url} controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  <code>audio</code>
                  .
                </audio>
                <button
                  type="submit"
                  name={name}
                  value={preview_url}
                  onClick={this.handleFavorite}
                >
                  &#x2606;
                </button>
              </div>
            </div>
          ))}
        </>
      </div>
    )
  }
}
