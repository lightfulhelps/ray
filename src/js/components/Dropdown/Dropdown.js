// @flow
import * as React from 'react';
import classNames from 'classnames';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import DropdownItem from './DropdownItem';
import Button from '../Button/Button';

type Props = {
  className?: string,
  footer?: string,
  items: {
    icon?: string,
    label: string,
  },
  theme?: string,
};

const Dropdown = ({ theme = 'dark', items, className, footer }: Props) => {
  const classes = classNames(className, 'dropdown-menu', `dropdown-menu-${theme}`);
  return (
    <div className="dropdown">
      <Button icon="menu" isDropdown theme={theme} />
      <div className={classes} aria-labelledby="dropdownMenuButton">
        {items.map(({ icon, label, isFooter }, i) => (
          <DropdownItem label={label} icon={icon} key={i} isFooter={isFooter} />
        ))}
        {footer && <DropdownItem label={footer} className="dropdown-item-footer" />}
      </div>
    </div>
  );
};

export default Dropdown;
