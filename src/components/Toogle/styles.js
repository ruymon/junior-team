import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;

  input[type=checkbox] {
    width: 1rem;
    height: 1rem;
    filter: opacity(.5);
  }

  span {
    display: inline;
    margin-left: 0.4rem;
    font: 1rem 'Roboto', 'sans-serif';
    color: ${colors.placeholderGray};

    a {
      text-decoration: none;
      font-weight: 700;
      color: ${colors.darkOrange};

      :hover {
        text-decoration: underline;
      }
    }
  }

`;
