/* eslint-disable jsx-a11y/label-has-associated-control */
// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  checked: Boolean,
  className?: string,
  isDisabled?: boolean,
  label?: string,
  labelAlign?: string,
  onClick?: (SyntheticMouseEvent<>) => void,
  theme?: string,
};

const ToggleSwitch = ({
  checked,
  onClick,
  isDisabled,
  label,
  labelAlign,
  className,
  ...other
}: Props) => {
  const classes = classNames(className, labelAlign === 'left' ? 'align-label-left' : null);

  function handleClick(e: SyntheticMouseEvent<>) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return (
    <div {...other} className={classes}>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          disabled={isDisabled}
          checked={checked}
          onChange={() => null}
        />
        <label
          className="custom-control-label"
          htmlFor="customSwitch1"
          onClick={e => handleClick(e)}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
