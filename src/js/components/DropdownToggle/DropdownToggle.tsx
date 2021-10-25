import * as React from 'react';
import classNames from 'classnames';
import { Button } from '../..';
import { Props as ButtonProps } from '../Button/Button';

type Props = ButtonProps & {
  className?: string;
  isOpen?: boolean;
  [key: string]: any;
};

const DropdownToggle: React.FC<Props> = ({
  size = 'md',
  className,
  isOpen = false,
  ...other
}: Props) => {
  const classes = classNames(className, 'dropdown-toggle');

  return (
    <Button
      icon={isOpen ? 'chevronUp' : 'chevronDown'}
      iconPosition="right"
      isOutline
      theme="primary"
      {...other}
      className={classes}
      size={size}
    />
  );
};

export default DropdownToggle;
