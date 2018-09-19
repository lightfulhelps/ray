// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Button } from '../../';

type Props = {
  className?: string,
  isOpen?: boolean,
};

const DropdownToggle = ({ className, isOpen = false, ...other }: Props) => {
  const classes = classNames(className, 'dropdown-toggle');

  return (
    <Button
      icon={isOpen ? 'chevronUp' : 'chevronDown'}
      iconPosition="right"
      {...other}
      className={classes}
    />
  );
};

export default DropdownToggle;
