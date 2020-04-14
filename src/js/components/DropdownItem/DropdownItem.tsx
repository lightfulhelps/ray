import * as React from 'react';
import classNames from 'classnames';

export type Props = {
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isHeader?: boolean;
  onClick?: (arg0: React.MouseEvent) => void;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
};

const DropdownItem: React.FC<Props> = ({
  children,
  className,
  isActive,
  isDisabled,
  isHeader,
  onClick,
  tag: Tag = 'div',
  ...other
}: Props) => {
  const classes = classNames(
    className,
    { 'dropdown-item': !isHeader },
    { 'dropdown-header': isHeader },
    { active: isActive },
    { disabled: isDisabled },
    { 'cursor-pointer': onClick && !isDisabled }
  );

  function handleClick(e: React.MouseEvent) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return (
    <Tag {...other} className={classes} onClick={handleClick}>
      {children}
    </Tag>
  );
};

export default DropdownItem;
