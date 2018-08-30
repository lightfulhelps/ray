// @flow
import * as React from 'react';
import classNames from 'classnames';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import DropdownItem from './DropdownItem';
import Button from '../Button/Button';
import type { IconNameType } from '../Icon/icons';

type Props = {
  buttonTheme: string,
  children: string,
  className?: string,
  footer?: string,
  items: [
    {
      icon?: IconNameType,
      label: string,
    },
  ],
  theme?: string,
};

const Dropdown = ({ theme = 'dark', buttonTheme = 'light', items, className, footer }: Props) => {
  const classes = classNames(className, 'dropdown-menu', `dropdown-menu-${theme}`);
  return (
    <div className="dropdown">
      <Button
        icon="menu"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        theme={buttonTheme}
      />
      <div className={classes} aria-labelledby="dropdownMenuButton">
        {items.map(({ icon, label }, i) => (
          <DropdownItem label={label} icon={icon} key={i} />
        ))}
        {footer && <DropdownItem label={footer} className="dropdown-item-footer" />}
      </div>
    </div>
  );
};

export default Dropdown;
