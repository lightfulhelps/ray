import * as React from 'react';
import classNames from 'classnames';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import DropdownItem from './DropdownItem';

/*
- create and import dropdown items
- pass an array of items to display in dropdown
- pass a component for the footer if required
- specify a light/dark prop - dark to be default
 */


const Dropdown = (
  {items}
) => (
  <div className="dropdown">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown button
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {console.log('items', items)}
    {
      items.map((item, i) => {
        return (
          <DropdownItem item={item} key={i} />
        )
      })
    }
    </div>
  </div>
);

export default Dropdown;

