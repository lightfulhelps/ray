// @flow
import * as React from 'react';
import { color, number } from '@storybook/addon-knobs';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

type Props = {
  children: React.Element<any>,
  className?: string,
  isBlock?: boolean,
  isDisabled?: boolean,
  isOutline?: boolean,
  onClick?: () => void,
  size?: 'lg' | 'md' | 'sm',
  tag?: string,
  theme?: string,
  icon?: string,
  iconPosition?: string,
  isDropdown?: boolean,
};

const Button = ({
  children,
  label,
  className,
  theme = 'primary',
  isBlock,
  isDisabled,
  isOutline,
  onClick = () => {},
  size,
  tag: Tag = 'button',
  icon,
  iconPosition,
  isDropdown,
}: Props) => {
  const classes = classNames(
    className,
    'btn',
    `btn${isOutline ? '-outline' : ''}-${theme}`,
    size ? `btn-${size}` : false,
    { 'btn-block': isBlock },
    { disabled: isDisabled },
    { 'btn-icon': icon && !label},
    { [`btn-icon-${iconPosition}`]: iconPosition && label }
  );

  return (
    <Tag 
      className={classes} 
      onClick={onClick}
      data-toggle={isDropdown && "dropdown"}
      aria-haspopup={isDropdown && "true"}
      aria-expanded={isDropdown && "false"}
    >
      {label && (
        <span>{label}</span>
      )}
      {icon && (
        <Icon
          name={icon}
          size={number('Size', 24)}
          color={color('Color', '#adb5bd')}
          hoverColor={color('Hover Color', '#212529')}
        />
      )}
    </Tag>
  );
};

export default Button;
