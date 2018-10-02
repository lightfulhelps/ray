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
    /* eslint-disable jsx-a11y/label-has-associated-control */
    <label {...other} className={classes}>
      {children}
    </label>
    /* eslint-enable jsx-a11y/label-has-associated-control */
  );
};

export default FormLabel;
