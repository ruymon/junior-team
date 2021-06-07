import React from "react";

import { Container } from "./styles";

function Toogle({ children }) {
  return (
    <Container>
      <label for="checkbox" className="sr-only">Checkbox Toogle</label>
      <input type="checkbox" id="checkbox" name="Toogle Checkbox"/>
      <span>{children}</span>
    </Container>
  );
}

export default Toogle;
