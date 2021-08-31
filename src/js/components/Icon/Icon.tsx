/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import icons, { IconNameType } from './icons';

type Props = {
  className?: string;
  color?: string;
  hoverColor?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  name: IconNameType;
  onClick?: (event: React.MouseEvent) => void;
  size?: number;
  style?: {
    [key: string]: string | number;
  };
  theme?: string;
  title?: string;
  viewBox?: string;
  withHover?: boolean;
  [key: string]: any;
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
  withHover = false,
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
    withHover ? `with-hover` : '',
    { disabled: isDisabled },
    { active: isActive },
    { 'cursor-pointer': typeof other.onClick === 'function' && !isDisabled }
  );

  const instagramGradientId = theme === 'instagram' ? nanoid() : null;

  if (theme) {
    if (theme === 'instagram') style.fill = `url(#${instagramGradientId})`;
    else delete style.fill;
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
      {theme === 'instagram' && (
        <defs>
          <radialGradient id={instagramGradientId} r="150%" cx="30%" cy="107%">
            <stop stopColor="#fdf497" offset="0" />
            <stop stopColor="#fdf497" offset="0.05" />
            <stop stopColor="#fd5949" offset="0.45" />
            <stop stopColor="#d6249f" offset="0.6" />
            <stop stopColor="#285AEB" offset="0.9" />
          </radialGradient>
        </defs>
      )}
      {title && <title>{title}</title>}
      {icons[name]}
    </svg>
  );
};

export default Icon;
