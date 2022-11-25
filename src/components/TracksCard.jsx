import React, { Component } from 'react'

export default class TracksCard extends Component {
  render() {
    const { tracks_list, thumbnail } = this.props;
    return (
      <div>
        <img src={thumbnail} alt="album-cover" />
        <div>
          {tracks_list.map(({name, preview_url, index}) => (
            <div key={index}>
              <span>{ name }</span>
              <audio data-testid="audio-component" src={preview_url} controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                {' '}
                <code>audio</code>
                .
              </audio>
            </div>
            // create a favorite icon //
          ))}
        </div>
      </div>
    )
  }
}
