import React from 'react';

import { Container } from './styles';

function Input({name, type, placeholder, srLabel }) {
  return(
    <Container>
      <label for={name} className="sr-only">{srLabel}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
    </Container>
  );
}

export default Input;