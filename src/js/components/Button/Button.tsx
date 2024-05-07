import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/icons';

// Size is an attribute of the input html element so there was a conflict with our size props.
// Hence the need to omit this attribute
type ButtonAttributes = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;

export type Props = {
  animateGradient?: boolean;
  children?: React.ReactNode;
  className?: string;
  forceSolidColor?: boolean;
  icon?: IconNameType;
  iconPosition?: 'left' | 'right';
  iconSize?: string;
  iconTheme?: string;
  isBlock?: boolean;
  isDisabled?: boolean;
  isOutline?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  size?: 'lg' | 'md' | 'sm';
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  theme?: string;
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
};

const gradientThemes = [
  'primary',
  'secondary',
  'tertiary-red',
  'tertiary-green',
  'tertiary-black',
  'academy',
  'success',
  'neutral',
];
const Button: React.FC<ButtonAttributes & Props> = ({
  children,
  className,
  forceSolidColor = false,
  icon,
  iconPosition = 'left',
  iconSize = '1em',
  iconTheme,
  isBlock,
  isDisabled,
  isOutline,
  loading = false,
  onClick,
  size,
  tag: Tag = 'button',
  theme = 'primary',
  type = 'button',
  animateGradient = false,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'btn',
    { [`btn${isOutline ? '-outline' : ''}-gradient-${theme}`]: !forceSolidColor },
    `btn${isOutline ? '-outline' : ''}-${theme}`, // backup
    size ? `btn-${size}` : false,
    { disabled: isDisabled },
    { 'btn-icon': icon && !children },
    { [`btn-icon-${iconPosition}`]: icon && children },
    { loading },
    { 'animate-gradient': animateGradient }
  );

  const handleClick = (e: React.MouseEvent): void => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  };

  // Workaround to optionally add type attribute since this one is only available on button Jsx element
  const optionalProps: { [key: string]: any } = {};
  optionalProps.type = Tag === 'button' ? type : undefined;

  const buttonComponent = (
    <Tag
      {...other}
      {...optionalProps}
      className={classes}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span>
        {children}
        {icon && (
          <Icon
            name={icon}
            size={iconSize}
            theme={iconTheme || (isOutline && theme)}
            isGradient={gradientThemes.includes(theme) && !forceSolidColor}
          />
        )}
      </span>
    </Tag>
  );

  if (isBlock) return <div className="d-grid">{buttonComponent}</div>;
  return buttonComponent;
};

export default Button;
