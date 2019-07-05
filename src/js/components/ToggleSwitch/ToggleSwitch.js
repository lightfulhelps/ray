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

const ToggleSwitch = ({ onClick, isDisabled, labelRight, labelLeft, ...other }: Props) => {
  // const classes = classNames();
  // className,

  function handleClick(e: SyntheticMouseEvent<>) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return (
    <div {...other} className="toggle-switch-container">
      {labelLeft && <span className="toggle-switch__label--left">{labelLeft}</span>}
      <div>
        <div className="custom-control custom-switch">
          <input
            disabled={isDisabled}
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
          />
          <label
            className="custom-control-label"
            htmlFor="customSwitch1"
            onClick={() => handleClick()}
          />
        </div>
      </div>
      {labelRight && <span className="toggle-switch__label--left">{labelRight}</span>}
    </div>
  );
};

export default ToggleSwitch;
