import React from 'react';

import { Container } from './styles';
import Logo from '../Logo';

function AuthHeader({ headerContent }) {
  return(
    <Container>
      <Logo width="80px" />

      <h1>{headerContent}</h1>
    </Container>
  );
}

export default AuthHeader;