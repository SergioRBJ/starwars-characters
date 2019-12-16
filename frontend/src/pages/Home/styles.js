import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const FilmList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  flex: 1;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
    align-items: center;

    > span {
      margin-bottom: 20px;
    }
  }

  img {
    align-self: center;
    width: 250px;
    height: 370px;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }
`;

export const CharButton = styled(Link)`
  background: #a0522d;
  color: #fff;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 15px;
  text-decoration: none;

  display: flex;
  transition: background 0.4s;

  width: 110px;
  height: 50px;
  align-items: center;

  &:hover {
    background: ${darken(0.09, '#A0522D')};
  }

  div {
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
  }

  span {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
`;
