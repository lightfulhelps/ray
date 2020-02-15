/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import classNames from 'classnames';
import icons, { IconNameType } from './icons';

type Props = {
  className?: string;
  color?: string;
  hoverColor?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  name: IconNameType;
  onClick?: (arg0: React.MouseEvent) => void;
  size?: number;
  style?: {
    [key: string]: string | number;
  };
  theme?: string;
  title?: string;
  viewBox?: string;
};

const Icon: React.FC<Props> = ({
  className,
  color = 'currentColor',
  hoverColor,
  isActive,
  isDisabled,
  name,
  size = '1em',
  style = {},
  theme,
  title,
  viewBox = '0 0 24 24',
  ...other
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const classes = classNames(
    className,
    'icon',
    theme ? `icon-${theme}` : '',
    { disabled: isDisabled },
    { active: isActive },
    { 'cursor-pointer': typeof other.onClick === 'function' && !isDisabled }
  );

  if (theme) {
    delete style.fill;
  } else {
    style.fill = hover && hoverColor ? hoverColor : color;
  }

  return (
    <svg
      {...other}
      className={classes}
      width={size}
      height={size}
      viewBox={viewBox}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title && <title>{title}</title>}
      {icons[name]}
    </svg>
  );
};

export default Icon;
