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
  theme?: string;
  onChange?: () => void;
  onClick?: (event: React.MouseEvent) => void;
  [key: string]: any;
};

const ToggleSwitch: React.FC<Props> = ({
  className,
  checked,
  id = 'toggle-switch',
  isDisabled,
  label,
  labelAlign,
  theme,
  onChange,
  onClick,
  ...other
}: Props) => {
  let wrapperClasses = '';
  let inputClasses;
  if (labelAlign)
    switch (labelAlign) {
      case 'left':
        wrapperClasses = 'flex-row-reverse';
        inputClasses = 'ms-1';
        break;
      case 'bottom':
        wrapperClasses = 'flex-column';
        inputClasses = 'mb-1';
        break;

      case 'top':
        wrapperClasses = 'flex-column-reverse';
        inputClasses = 'mt-1';
        break;

      default:
        inputClasses = 'me-1';
        break;
    }

  const classes = classNames(className, 'form-check form-switch', wrapperClasses);

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
        className={`form-check-input m-0${
          theme === 'primary' ? ' form-check-input-primary' : ''
        } ${inputClasses}`}
        id={id}
        disabled={isDisabled}
        role="switch"
        onChange={onChange}
        onClick={handleClick}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default ToggleSwitch;
