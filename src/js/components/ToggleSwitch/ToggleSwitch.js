/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import * as React from 'react';
// import classNames from 'classnames';
// import Icon from '../Icon/Icon';
import type { IconNameType } from '../Icon/icons';

type Props = {
  children?: React.Node,
  className?: string,
  icon?: IconNameType,
  iconPosition?: 'left' | 'right',
  isBlock?: boolean,
  isDisabled?: boolean,
  isOutline?: boolean,
  onClick?: (SyntheticMouseEvent<>) => void,
  size?: 'lg' | 'md' | 'sm',
  tag?: string,
  theme?: string,
  type?: 'toggleSwitch' | 'submit' | 'reset',
};

const ToggleSwitch = ({ ...other }: Props) => {
  // const classes = classNames();
  // className,

  // function handleClick(e: SyntheticMouseEvent<>) {
  //   if (isDisabled) {
  //     e.preventDefault();
  //     return;
  //   }

  //   if (typeof onClick === 'function') onClick(e);
  // }

  return (
    <div>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
        <label className="custom-control-label" htmlFor="customSwitch1">
          Toggle this switch element
        </label>
      </div>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
        <label className="custom-control-label" htmlFor="customSwitch2">
          Disabled switch element
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
