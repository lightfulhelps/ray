// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import DropdownItem, { type DropdownItemType } from './DropdownItem';
import Button from '../Button/Button';
import type { IconNameType } from '../Icon/icons';

type Props = {
  buttonIcon?: IconNameType,
  buttonSize?: 'lg' | 'md' | 'sm',
  buttonTheme?: string,
  className?: string,
  footer?: string,
  items: DropdownItemType[],
  position?: 'left' | 'right',
  theme?: string,
};

type State = {
  isOpen: boolean,
};

class Dropdown extends Component<Props, State> {
  state = {
    isOpen: false,
  };

  handleDropdown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleItemClick = (clickFunction?: () => void) => {
    if (typeof clickFunction === 'function') {
      clickFunction();
    }

    this.setState({ isOpen: false });
  };

  render() {
    const {
      buttonIcon = 'menu',
      buttonSize = 'sm',
      buttonTheme = 'light',
      className,
      footer,
      items,
      position = 'left',
      theme = 'dark',
      ...other
    } = this.props;
    const classes = classNames(className, 'dropdown', 'd-inline-block');
    const menuClasses = classNames(
      'dropdown-menu',
      `dropdown-menu-${theme}`,
      `dropdown-menu-${position}`,
      { show: this.state.isOpen }
    );

    return (
      <div {...other} className={classes}>
        <Button
          onClick={() => this.handleDropdown()}
          icon={buttonIcon}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
          size={buttonSize}
          theme={buttonTheme}
        />
        <div className={menuClasses} aria-labelledby="dropdownMenuButton">
          {items.map((item, i) => (
            <DropdownItem
              key={i}
              label={item.label}
              icon={item.icon}
              onClick={() => this.handleItemClick(item.onClick)}
            />
          ))}
          {footer && <div className="dropdown-footer">{footer}</div>}
        </div>
      </div>
    );
  }
}

export default Dropdown;
