import styled from 'styled-components';
import { darken } from 'polished';

export const CharList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  flex: 1;
  margin-top: 20px;
  height: calc(100vh - 210px);
  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    width: 10px;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border-radius: 10px;
    background: rgba(204, 204, 204, 0.8);
    box-shadow: inset 0px 0 3px rgba(131, 130, 130, 0.5);
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  animation: fadeIn 0.8s ease-in;
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
    border: 3px solid ${darken(0.4, '#2f4f4f')};
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
