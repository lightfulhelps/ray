import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/icons';

export type Props = {
  children?: React.ReactNode;
  className?: string;
  icon?: IconNameType;
  iconPosition?: 'left' | 'right';
  iconTheme?: string;
  isBlock?: boolean;
  isDisabled?: boolean;
  isOutline?: boolean;
  onClick?: (arg0: React.MouseEvent) => void;
  size?: 'lg' | 'md' | 'sm';
  tag?: keyof JSX.IntrinsicElements;
  theme?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<Props> = ({
  children,
  className,
  icon,
  iconPosition = 'left',
  iconTheme,
  isBlock,
  isDisabled,
  isOutline,
  onClick,
  size,
  tag: Tag = 'button',
  theme = 'primary',
  type = 'button',
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'btn',
    `btn${isOutline ? '-outline' : ''}-${theme}`,
    size ? `btn-${size}` : false,
    { 'btn-block': isBlock },
    { disabled: isDisabled },
    { 'btn-icon': icon && !children },
    { [`btn-icon-${iconPosition}`]: icon && children }
  );

  const handleClick = (e: React.MouseEvent): void => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  };

  // Workaround to optionnaly add type attribute since this one is only available on button Jsx element
  const optionnalProps: { [key: string]: any } = {};
  optionnalProps.type = Tag === 'button' ? type : undefined;

  return (
    <Tag
      {...other}
      {...optionnalProps}
      className={classes}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
      {icon && <Icon name={icon} theme={iconTheme} />}
    </Tag>
  );
};

export default Button;
