/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import * as React from 'react';
// import classNames from 'classnames';

type Props = {
  className?: string,
  isDisabled?: boolean,
  labelLeft?: string,
  labelRight?: string,
  onClick?: (SyntheticMouseEvent<>) => void,
  theme?: string,
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
            onClick={e => handleClick(e)}
          />
        </div>
      </div>
      {labelRight && <span className="toggle-switch__label--left">{labelRight}</span>}
    </div>
  );
};

export default ToggleSwitch;
