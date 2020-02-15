import * as React from 'react';
import classNames from 'classnames';
import { Button } from '../..';

type Props = {
  className?: string;
  isOpen?: boolean;
};

const DropdownToggle: React.FC<Props> = ({ className, isOpen = false, ...other }: Props) => {
  const classes = classNames(className, 'dropdown-toggle');

  return (
    <Button
      icon={isOpen ? 'caretUp' : 'caretDown'}
      iconPosition="right"
      isOutline
      theme="gray-600"
      {...other}
      className={classes}
    />
  );
};

export default DropdownToggle;
