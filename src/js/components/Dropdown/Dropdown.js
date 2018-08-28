import * as React from 'react';
import classNames from 'classnames';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import DropdownItem from './DropdownItem';
import Button from '../Button/Button';

/*
- create and import dropdown items
- pass an array of items to display in dropdown
- pass a component for the footer if required
- specify a light/dark prop - dark to be default
 */

type Props = {
  theme?: string,
};

const Dropdown = ({ theme = 'dark', actions }) => (
  <div className="dropdown">
  <Button
    icon="menu"
    isDropdown
    theme={theme}
  />
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {actions.map((action, i) => {
        return <DropdownItem action={action} key={i} />;
      })}
    </div>
  </div>
);

export default Dropdown;
