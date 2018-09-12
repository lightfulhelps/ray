// @flow
import * as React from 'react';
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

class Dropdown extends React.Component<Props, State> {
  node = null;

  state = {
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleDropdown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleDocumentClick = (e: Event) => {
    if (
      !e ||
      (e && !e.target) ||
      (this.node && this.node.contains((e.target: any)) && this.node !== e.target)
    ) {
      return;
    }

    this.setState({ isOpen: false });
  };

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
      <div
        {...other}
        className={classes}
        ref={node => {
          this.node = node;
        }}
      >
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
