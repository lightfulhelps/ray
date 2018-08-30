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
      onClick?: () => void,
    },
  ],
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
    const { theme = 'dark', buttonTheme = 'light', items, className, footer } = this.props;
    const classes = classNames(className, 'dropdown', `dropdown-${theme}`);

    return (
      <div className={classes}>
        <Button
          onClick={() => this.handleDropdown()}
          icon="menu"
          aria-haspopup="true"
          aria-expanded="false"
          theme={buttonTheme}
        />
        <div
          className={classNames('dropdown-menu', { show: this.state.isOpen })}
          aria-labelledby="dropdownMenuButton"
        >
          {items.map((item, i) => (
            <DropdownItem label={item.label} icon={item.icon} key={i} onClick={item.onClick} />
          ))}
          {footer && <DropdownItem label={footer} className="dropdown-item-footer" />}
        </div>
      </div>
    );
  }
}

export default Dropdown;
