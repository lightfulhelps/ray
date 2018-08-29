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

const Dropdown = ({ theme = 'dark', actions, className, footer }) => {
  const classes = classNames(className, 'dropdown-menu', `dropdown-menu-${theme}`);
  console.log('footer', footer);
  const dropdownItems = [...actions];
  footer && dropdownItems.push(footer);
  return (
    <div className="dropdown">
      <Button icon="menu" isDropdown theme={theme} />
      <div className={classes} aria-labelledby="dropdownMenuButton">
        {dropdownItems.map((item, i, arr) => {
          console.log('i', i)
          console.log('i+1', i+1)
          console.log('arr.length', arr.length)
          return (
            <DropdownItem
              content={item}
              key={i}
              isFooter={footer && i + 1 >= arr.length} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
