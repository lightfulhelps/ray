import * as React from 'react';

/*
- actions
- items
- onclick handler
*/

const DropdownItem = ({ 
  action,

}) => (
  <a className="dropdown-item" href="#">
    {action}
  </a>
);

export default DropdownItem;
