import React, { Component } from 'react';
import AlbumsList from '../components/AlbumsList';
import Header from '../components/Header';
import getAlbums from '../data/albumsAPI';
import Loading from '../components/Loading';

export default class Home extends Component {
  state = {
    search: '',
    albums: [],
    loading: false
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSearch = async () => {
    const { search } = this.state;
    this.setState({ loading: true })
    const searched = await getAlbums(search);
    this.setState({ albums: searched, loading: false });
  };

  enterToSubmit = (e) => {
    e.preventDefault();
    this.handleSearch();
  }

  render() {
    const { search, albums, loading } = this.state;
    return (
      <>
        <section>
          <Header />
        </section>
        <div className="home-container">
          <form
            onSubmit={this.enterToSubmit}
            className="form-home-container"
          >
            <input
              type="text"
              name="search"
              value={search}
              onChange={this.handleChange}
              placeholder="Band/Artist"
            />
            <button
              type="submit"
              onClick={this.enterToSubmit}
            >
              &#x1F50D;
            </button>
          </form>
        </div>
        <main>
          {loading ? (
            <Loading />
          ) : (
            albums.map(({ data: { name, uri, coverArt: { sources }, date: { year } } }, index) => (
              <AlbumsList
                key={index}
                sources={sources}
                name={name}
                year={year}
                uri={uri}
              />
            )))}
        </main>
      </>
    );
  }
}