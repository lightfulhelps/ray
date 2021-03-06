/* eslint-disable jsx-a11y/label-has-associated-control */

import * as React from 'react';
import classNames from 'classnames';

type Props = {
  checked: boolean;
  className?: string;
  id?: string;
  isDisabled?: boolean;
  label?: string;
  labelAlign?: string;
  onChange?: () => void;
  onClick?: (event: React.MouseEvent) => void;
  [key: string]: any;
};

const ToggleSwitch: React.FC<Props> = ({
  checked,
  className,
  id = 'toggle-switch',
  isDisabled,
  label,
  labelAlign,
  onChange,
  onClick,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'custom-control custom-switch',
    labelAlign && labelAlign !== 'right' && `custom-switch-${labelAlign}`
  );

  function handleClick(e: React.MouseEvent) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return (
    <div {...other} className={classes}>
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        disabled={isDisabled}
        checked={checked}
        onChange={onChange}
      />
      <label className="custom-control-label" htmlFor={id} onClick={handleClick}>
        {label}
      </label>
    </div>
  );
};

export default ToggleSwitch;
