// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ChildrenArray<React.Element<'option'>>,
  className?: string,
  isInvalid?: boolean,
  isValid?: boolean,
  size?: 'sm' | 'md' | 'lg',
};

const FormSelectOld = ({ children, className, isInvalid, isValid, size, ...other }: Props) => {
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
    <select {...other} className={classes}>
      {children}
    </select>
  );
};

export default FormSelectOld;
