import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
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
  ...other
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  const togglePassword = () => {
    setHidePassword(!hidePassword);
  };

  const classes = classNames(className, 'form-control');

  const { t } = useTranslation();

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
          {hidePassword ? t('formPasswordInput:show') : t('formPasswordInput:hide')}
        </span>
      </Button>
    </div>
  );
};

export default FormPasswordInput;
