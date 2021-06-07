import React from "react";

import { Container } from "./styles";

function Toogle({ children }) {
  return (
    <Container>
      <input type="checkbox" id="checkbox" name="Toogle Checkbox"/>
      <span>{children}</span>
    </Container>
  );
}

export default Toogle;
