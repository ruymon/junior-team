import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 1rem;

    font-weight: 400;
    font-size: 2rem;
    color: ${colors.lightGray};
  }
`;
 