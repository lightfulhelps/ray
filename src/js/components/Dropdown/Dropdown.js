// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import DropdownItem from './DropdownItem';
import Button from '../Button/Button';
import type { IconNameType } from '../Icon/icons';

type Props = {
  buttonTheme?: string,
  className?: string,
  footer?: string,
  items: [
    {
      icon?: IconNameType,
      label: string,
    },
  ],
  onClick?: () => {},
  theme?: string,
};

type State = {
  isOpen: Boolean,
};

class Dropdown extends Component<Props, State> {
  state = {
    isOpen: false,
  };

  handleDropdown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { theme = 'dark', buttonTheme = 'light', items, className, footer, onClick } = this.props;
    const classes = classNames(className, 'dropdown-menu', `dropdown-menu-${theme}`, {
      show: this.state.isOpen,
    });
    return (
      <div className="dropdown">
        <Button
          onClick={() => this.handleDropdown()}
          icon="menu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          theme={buttonTheme}
        />
        <div className={classes} aria-labelledby="dropdownMenuButton">
          {items.map((item, i) => (
            <DropdownItem label={item.label} icon={item.icon} key={i} onClick={onClick} />
          ))}
          {footer && <DropdownItem label={footer} className="dropdown-item-footer" />}
        </div>
      </div>
    );
  }
}

export default Dropdown;
