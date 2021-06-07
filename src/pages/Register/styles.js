import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100vw;
  height: 100vh; 

  background-image: url("/assets/background_desktop.png");
  background-color: ${colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    width: clamp(19rem, 25vw, 35rem);

    padding: 0rem 1rem;

    > * {
      margin-top: 1.5rem;
    }

  }

  > div:last-child {
    position: absolute;
    bottom: 1.5rem;
  }
`;
