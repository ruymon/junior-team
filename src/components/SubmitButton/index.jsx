import React from 'react';

import { Button } from './styles';

function SubmitButton({ href, content }) {
  return(
    <Button type="button">
      <a href={href} target="_blank" rel="noreferrer">{content}</a>
    </Button>
  );
}

export default SubmitButton;