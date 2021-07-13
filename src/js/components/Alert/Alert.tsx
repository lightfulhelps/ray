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
    danger: 'alert',
    success: 'approvalTick',
    info: 'info',
  };

  return (
    <Tag {...other} className={classes}>
      {header && <h4 className="alert-heading">{header}</h4>}
      <div className="d-flex align-items-start">
        {!hideIcon && (iconsByTheme[theme] || icon) && (
          <Icon
            className="mr-half flex-shrink-0"
            name={icon || iconsByTheme[theme]}
            theme={theme}
            size={18}
            style={{ marginTop: '3px' }}
          />
        )}
        <span>{children}</span>
      </div>
    </Tag>
  );
};

export default Alert;
