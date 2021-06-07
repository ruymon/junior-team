import styled from 'styled-components';
import colors from '../../styles/colors';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: ${colors.lightOrange};
  
  width: 100%;
  
  border-radius: 7px;

  transition: 0.3s ease-in-out;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: 1.5rem;

    width: 100%;
    height: 100%;

    margin: 1rem 0;
    
  }

  :hover {
    background: ${colors.hoverOrange};
  }
`;
