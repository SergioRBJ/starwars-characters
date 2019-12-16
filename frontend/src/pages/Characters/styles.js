import styled from 'styled-components';
import { darken } from 'polished';

export const CharList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  flex: 1;

  > li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 3px solid ${darken(0.4, '#2f4f4f')};
    padding: 20px;
    align-items: center;
    background: #2f4f4f;

    > span {
      margin-bottom: 20px;
    }

    > strong {
      margin-top: 5px;
      color: #fff;
    }
  }

  img {
    align-self: center;
    width: 150px;
    height: 150px;
    border: 1px solid #9999;
    border-radius: 5px;
    border-radius: 50%;
  }

  > span {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }
`;

export const CharDetails = styled.ul`
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #eee;

  > li {
    font-size: 14px;
    color: #eee;
    padding: 6px 0 6px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
  }
`;
