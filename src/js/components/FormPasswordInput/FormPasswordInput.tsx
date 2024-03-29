import React, { useState } from 'react';
import classNames from 'classnames';
import { FormInput, Button } from '../..';

type Props = {
  className?: string;
  id?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  placeholder?: string;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  text?: {
    hide?: string;
    show?: string;
  };
  [key: string]: any;
};

const FormPasswordInput: React.FC<Props> = ({
  className,
  onChange,
  onBlur,
  value,
  id,
  isInvalid,
  isValid,
  name = 'password',
  placeholder,
  size,
  text = {
    show: 'Show',
    hide: 'Hide',
  },
  ...other
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

  const classes = classNames(className, 'form-control');

  return (
    <div className="form-password-input input-group">
      <FormInput
        {...other}
        className={classes}
        data-test-id="password-input"
        isInvalid={isInvalid}
        isValid={isValid}
        name={name}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        type={hidePassword ? 'password' : 'text'}
        value={value}
      />
      <Button
        data-test-id="password-input-button"
        icon={hidePassword ? 'preview' : 'previewHide'}
        isOutline
        onClick={togglePassword}
        size={size}
        theme="gray-600"
      >
        <span className="form-password-input__toggle-password-text">
          {hidePassword ? text.show : text.hide}
        </span>
      </Button>
    </div>
  );
};

export default FormPasswordInput;
