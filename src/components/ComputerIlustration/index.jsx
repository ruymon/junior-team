import React from 'react';

import Animated from './computer_vector.svg';

function ComputerIlustration({width}) {
  return (
    <div>
       <object type="image/svg+xml" data={Animated} width={width}>svg-animation</object>
    </div>
  );
}

export default ComputerIlustration;