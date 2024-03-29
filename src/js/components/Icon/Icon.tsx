/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import icons, { IconNameType } from './icons';

type Props = {
  className?: string;
  color?: string;
  hoverColor?: string;
  isGradient?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  name: IconNameType;
  onClick?: (event: React.MouseEvent) => void;
  size?: number | string;
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
  isGradient = false,
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

  const gradientId = isGradient ? nanoid() : '';
  let mergedStyles = { ...style };

  if (theme) {
    if (isGradient) mergedStyles = { ...mergedStyles, fill: `url(#${gradientId})` };
    else delete mergedStyles.fill;
  } else {
    mergedStyles = { ...mergedStyles, fill: hover && hoverColor ? hoverColor : color };
  }

  return (
    <svg
      {...other}
      className={classes}
      width={size}
      height={size}
      viewBox={viewBox}
      style={mergedStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {theme &&
        isGradient &&
        (theme === 'instagram' ? (
          <defs>
            <radialGradient id={gradientId} r="150%" cx="30%" cy="107%">
              <stop stopColor="#fdf497" offset="0" />
              <stop stopColor="#FCC06E" offset="0.05" />
              <stop stopColor="#fd5949" offset="0.45" />
              <stop stopColor="#CB008D" offset="0.6" />
              <stop stopColor="#3D33D1" offset="0.9" />
            </radialGradient>
          </defs>
        ) : (
          <defs>
            <linearGradient id={gradientId} r="90%">
              <stop className={`gradient-${theme}-stop1`} offset="0%" />
              <stop className={`gradient-${theme}-stop2`} offset="100%" />
            </linearGradient>
          </defs>
        ))}
      {title && <title>{title}</title>}
      {icons[name]}
    </svg>
  );
};

export default Icon;
