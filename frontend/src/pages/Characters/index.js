import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import image from '../../assets/images/default-img.jpg';

import { CharList, CharDetails } from './styles';

export default class Characters extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        film: PropTypes.number,
      }),
    }).isRequired,
    characters: PropTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      film: '',
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const filmId = decodeURIComponent(match.params.film);

    const response = await api.get(`/films/${filmId}`);

    this.setState({ characters: response.data.characters });

    this.setState({ film: filmId });
  }

  render() {
    const { characters } = this.state;

    return (
      <CharList>
        {characters.map(char => (
          <>
            <li key={char.name}>
              <img
                src={ char.avatar ? char.avatar.url : image }
                alt={char.name}
              />
              <strong>{char.name}</strong>
              <CharDetails>
                <li>
                  <span>Height</span>
                  <span>{char.height}</span>
                </li>
                <li>
                  <span>Mass</span>
                  <span>{char.mass}</span>
                </li>
                <li>
                  <span>Skin Color</span>
                  <span>{char.skin_color}</span>
                </li>
                <li>
                  <span>Eye Color</span>
                  <span>{char.eye_color}</span>
                </li>
                <li>
                  <span>Hair Color</span>
                  <span>{char.hair_color}</span>
                </li>
                <li>
                  <span>Birth Year</span>
                  <span>{char.birth_year}</span>
                </li>
                <li>
                  <span>Gender</span>
                  <span>{char.gender}</span>
                </li>
              </CharDetails>
            </li>
          </>
        ))}
      </CharList>
    );
  }
}
