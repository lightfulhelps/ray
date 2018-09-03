// @flow
import React, { Component } from 'react';
import classNames from 'classnames';
import { DropdownMenu, Button } from '../../';
import type { DropdownItemType } from '../DropdownItem/DropdownItem';
import type { IconNameType } from '../Icon/icons';

type Props = {
  buttonIcon?: IconNameType,
  buttonSize?: 'lg' | 'md' | 'sm',
  buttonTheme?: 'light' | 'dark',
  className?: string,
  menuFooter?: string,
  menuItems: DropdownItemType[],
  menuPosition?: 'left' | 'right',
  menuTheme?: 'light' | 'dark',
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

  handleMenuClick = () => this.setState({ isOpen: false });

  render() {
    const {
      buttonIcon = 'menu',
      buttonSize = 'sm',
      buttonTheme = 'light',
      className,
      menuFooter,
      menuItems,
      menuPosition = 'left',
      menuTheme = 'dark',
      ...other
    } = this.props;
    const classes = classNames(className, 'dropdown', 'd-inline-block');

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
        <DropdownMenu
          footer={menuFooter}
          items={menuItems}
          isOpen={this.state.isOpen}
          onClick={this.handleMenuClick}
          position={menuPosition}
          theme={menuTheme}
        />
      </div>
    );
  }
}

export default Dropdown;
