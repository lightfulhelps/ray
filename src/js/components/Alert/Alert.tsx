import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/icons';

type Props = {
  className?: string;
  header?: string;
  icon?: IconNameType;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  theme?: string;
  hideIcon?: boolean;
  children: React.ReactNode;
  [key: string]: any;
};

const Alert: React.FC<Props> = ({
  children,
  className,
  header,
  icon,
  tag: Tag = 'div',
  theme = 'primary',
  hideIcon = false,
  ...other
}: Props) => {
  const classes = classNames(className, 'alert ', `alert-${theme}`);
  const iconsByTheme = {
    warning: 'warning',
    danger: 'error',
    success: 'approvalTick',
    info: 'info',
  };

  return (
    <Tag {...other} className={classes}>
      {header && <h3 className="alert-heading mb-1">{header}</h3>}
      <div className="d-flex align-items-start text-sm">
        {!hideIcon && (iconsByTheme[theme] || icon) && (
          <Icon
            className="me-1 flex-shrink-0"
            name={icon || iconsByTheme[theme]}
            theme={theme}
            size={18}
          />
        )}
        <span>{children}</span>
      </div>
    </Tag>
  );
};

export default Alert;
