// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  isCheck?: boolean,
};

const FormLabel = ({ children, className, isCheck, ...other }: Props) => {
  const classes = classNames(className, isCheck ? 'form-check-label' : 'form-label');

  return (
    <label {...other} className={classes}>
      {children}
    </label>
  );
};

export default FormLabel;
