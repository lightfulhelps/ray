// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import DropdownItem, { type DropdownItemType } from './DropdownItem';
import Button from '../Button/Button';

type Props = {
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

  render() {
    const {
      buttonSize = 'sm',
      buttonTheme = 'light',
      className,
      footer,
      items,
      position = 'left',
      theme = 'dark',
    } = this.props;
    const classes = classNames(className, 'dropdown', `dropdown-${theme}`, 'd-inline-block');

    return (
      <div className={classes}>
        <Button
          onClick={() => this.handleDropdown()}
          icon="menu"
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
          size={buttonSize}
          theme={buttonTheme}
        />
        <div
          className={classNames('dropdown-menu', `dropdown-menu-${position}`, {
            show: this.state.isOpen,
          })}
          aria-labelledby="dropdownMenuButton"
        >
          {items.map((item, i) => (
            <DropdownItem key={i} label={item.label} icon={item.icon} onClick={item.onClick} />
          ))}
          {footer && <div className="dropdown-footer">{footer}</div>}
        </div>
      </div>
    );
  }
}

export default Dropdown;
