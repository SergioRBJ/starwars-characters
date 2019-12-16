import React, { Component } from 'react';
import api from '../../services/api';
import { FilmList, CharButton } from './styles';

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
            <img src={film.avatar.url} alt={film.title} />
            <CharButton to={`/characters/films/${encodeURIComponent(film.id)}`}>
              <span>CHARACTERS</span>
            </CharButton>
          </li>
        ))}
      </FilmList>
    );
  }
}
