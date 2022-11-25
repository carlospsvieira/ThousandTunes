import React, { Component } from 'react';
import Loading from '../components/Loading';
import TracksCard from '../components/TracksCard';
import getTracks from '../data/tracksAPI';

export default class Album extends Component {
  state = {
    tracks_list: [],
    thumbnail: '',
    loading: false
  };

  async componentDidMount() {
    await this.getSongs();
  }

  getSongs = async () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true })
    const album = await getTracks(id)
    const image = album.images[0].url;
    const data_tracks = album.tracks.items;
    this.setState({ tracks_list: data_tracks, thumbnail: image, loading: false })
  };

  render() {
    const { tracks_list, thumbnail, loading } = this.state;
    return (
      <>
        {loading ? (<Loading />
        ) : (
          <TracksCard 
            tracks_list={ tracks_list }
            thumbnail={ thumbnail }
          />
        )}
      </>
    );
  }
}