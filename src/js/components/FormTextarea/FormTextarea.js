// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: string,
  className?: string,
  isInvalid?: boolean,
  isValid?: boolean,
  size?: 'sm' | 'md' | 'lg',
};

const FormTextarea = ({ children, className, isInvalid, isValid, size, ...other }: Props) => {
  const classes = classNames(
    className,
    'form-control',
    size ? `form-control-${size}` : false,
    {
      'is-invalid': isInvalid,
    },
    { 'is-valid': isValid }
  );

  return (
    <textarea {...other} className={classes}>
      {children}
    </textarea>
  );
};

export default FormTextarea;
