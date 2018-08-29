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

const Dropdown = ({ theme = 'dark', dropdownItems, className }) => {
  const classes = classNames(className, 'dropdown-menu', `dropdown-menu-${theme}`);
  return (
    <div className="dropdown">
      <Button icon="menu" isDropdown theme={theme} />
      <div className={classes} aria-labelledby="dropdownMenuButton">
        {dropdownItems.map(({label, icon, isFooter}, i) => {
          return (
            <DropdownItem
              label={label}
              icon={icon}
              key={i}
              isFooter={isFooter} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
