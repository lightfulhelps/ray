import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  isInvalid?: boolean;
  isValid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  type: string;
};

const FormInput: React.FC<Props> = ({
  className,
  isInvalid,
  isValid,
  size,
  type,
  ...other
}: Props) => {
  const checkInput = type === 'radio' || type === 'checkbox';
  const fileInput = type === 'file';
  const classes = classNames(
    className,
    checkInput ? 'form-check-input' : fileInput ? 'form-control-file' : 'form-control',
    size ? `form-control-${size}` : false,
    {
      'is-invalid': isInvalid,
    },
    { 'is-valid': isValid }
  );

  return <input {...other} className={classes} type={type} />;
};

export default FormInput;
