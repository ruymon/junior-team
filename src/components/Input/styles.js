import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  input {
    border: 0;
    outline: none;

    padding: 1.2rem 1rem;

    width: 100%;

    border-radius: 7px;

    background-color: ${colors.inputWrapperGray};
    color: ${colors.darkGray};

    font-size: 1.3rem;

    ::placeholder {
      color: ${colors.placeholderGray};
    }

    :focus {
      border: 2px solid ${colors.outlineGray};
    }
  }
`;
