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

    const response = await api.get(`/actuations/${filmId}`);

    this.setState({ characters: response.data });

    this.setState({ film: filmId });
  }

  render() {
    const { characters } = this.state;

    return (
      <CharList>
        {characters.map(char => (
          <>
            <li key={char.character.name}>
              <img
                src={image || char.character.avatar.url}
                alt={char.character.name}
              />
              <strong>{char.character.name}</strong>
              <CharDetails>
                <li>
                  <span>Height</span>
                  <span>{char.character.height}</span>
                </li>
                <li>
                  <span>Mass</span>
                  <span>{char.character.mass}</span>
                </li>
                <li>
                  <span>Skin Color</span>
                  <span>{char.character.skin_color}</span>
                </li>
                <li>
                  <span>Eye Color</span>
                  <span>{char.character.eye_color}</span>
                </li>
                <li>
                  <span>Hair Color</span>
                  <span>{char.character.hair_color}</span>
                </li>
                <li>
                  <span>Birth Year</span>
                  <span>{char.character.birth_year}</span>
                </li>
                <li>
                  <span>Gender</span>
                  <span>{char.character.gender}</span>
                </li>
              </CharDetails>
            </li>
          </>
        ))}
      </CharList>
    );
  }
}
