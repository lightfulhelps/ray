import React, { useState } from 'react';
import classNames from 'classnames';
import { FormInput, Button } from '../..';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  id?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  placeholder?: string;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  name?: string;
}

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
  ...other
}) => {
  const [hidePassword, setHidePassword] = useState(false);

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
      <div className="input-group-append">
        <Button
          data-test-id="password-input-button"
          icon={hidePassword ? 'preview' : 'previewHide'}
          isOutline
          onClick={togglePassword}
          size={size}
          theme="gray-600"
        >
          <span className="form-password-input__toggle-password-text">
            {hidePassword ? 'Show' : 'Hide'}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default FormPasswordInput;
