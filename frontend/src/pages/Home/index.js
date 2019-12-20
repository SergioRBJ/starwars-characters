import React, { Component } from 'react';
import api from '../../services/api';
import { FilmList } from './styles';
import { Link } from 'react-router-dom';

import image from '../../assets/images/default-film.jpg';

export default class Home extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const response = await api.get('/films/');

    this.setState({ films: response.data });
  }

  render() {
    const { films } = this.state;

    return (
      <FilmList>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/characters/films/${encodeURIComponent(film.id)}`}>
            <img src={film.avatar.url || image} alt={film.title} />

            </Link>
          </li>
        ))}
      </FilmList>
    );
  }
}
