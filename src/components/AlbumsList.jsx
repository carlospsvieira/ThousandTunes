import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AlbumsList extends Component {
  render() {
    const { sources, name, year, uri } = this.props;
    const album_id = uri.substring(14);
    
    return (
      <Link to={`/album/${album_id}`}>
        <div>
          <img src={sources[0].url} alt={name} />
          <span>{name}</span>
          <span>{year}</span>
        </div>
      </Link>
    )
  }
}