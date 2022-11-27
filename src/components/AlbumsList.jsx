import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AlbumsList extends Component {
  render() {
    const { sources, name, year, uri } = this.props;
    const album_id = uri.substring(14);

    return (
        <div className="album-container">
          <img src={sources[0].url} alt={name} />
          <div>
            <span>{ name }</span>
            <span>{ year }</span>
            <Link to={`/album/${album_id}`}>Go to playlist</Link>
          </div>
        </div>
    )
  }
}