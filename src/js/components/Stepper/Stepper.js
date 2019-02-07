// @flow
import * as React from 'react';

/*
- number of steps
- which step we're on
- what the steps are called 
- icons done, active and to do
- hide or show component
- horizontal mode (desktop)
- vertical mode (mobile)
*/

class Stepper extends React.Component {
  state = {
    complete: null,
    active: null,
    todo: null,
  }
  render() {
    return (
      <div>
        Stepper
        <hr />
      </div>
    );
  }
}

export default Stepper;
