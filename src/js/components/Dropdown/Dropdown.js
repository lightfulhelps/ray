// @flow
import * as React from 'react';
import classNames from 'classnames';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import DropdownItem from './DropdownItem';
import Button from '../Button/Button';

type Props = {
  theme?: string,
  dropdownItems: {  }
};

const Dropdown = ({ theme = 'dark', dropdownItems, className }: Props) => {
  const classes = classNames(className, 'dropdown-menu', `dropdown-menu-${theme}`);
  items[...action, ]
  push(footer)
  return (
    <div className="dropdown">
      <Button icon="menu" isDropdown theme={theme} />
      <div className={classes} aria-labelledby="dropdownMenuButton">
        {dropdownItems.map(({ label, icon, isFooter }, i) => (
          <DropdownItem label={label} icon={icon} key={i} isFooter={isFooter} />
        ))}
        footer && {<DropdownItem label={footer} icon={icon} key={i} isFooter={isFooter} />}
      </div>
    </div>
  );
};

export default Dropdown;
