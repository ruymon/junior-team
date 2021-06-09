import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  background-image: url(/assets/dots_pattern.png);

  .hero {
    min-height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;

    .heroTitle {
      display: flex;
      flex-direction: column;

      width: 50%;

      margin-left: 5%;


      h1 {
        color: ${colors.lightOrange};
        font-size: 7.5rem;

        margin-bottom: 5%;

        width: 80%;
      }

      p {
        font-weight: 300;
        font-size: 1.3rem;

        line-height: 2.8rem;
        width: 80%;

        color: ${colors.lightGray};

        margin-bottom: 5%;
      }

    }

    .ilustrationWrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 50%;
    }


  }
`;
