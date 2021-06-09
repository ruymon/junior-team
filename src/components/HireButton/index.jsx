import React from 'react';

import { Button } from './styles';

function HireButton({href}) {
  return(

  <Button
    href={href}
    target="_blank"
    rel="noopener"
  >
  Hire us
  </Button>

  );
}

export default HireButton;