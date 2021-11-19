import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  theme?: string;
  [key: string]: any;
};

const NavLink: React.FC<Props> = ({
  className,
  children,
  isActive,
  isDisabled,
  tag: Tag = 'a',
  theme = 'primary',
  ...other
}: Props) => {
  const classes = classNames(className, 'nav-link', { active: isActive }, { disabled: isDisabled });

  return (
    <Tag {...other} className={`${classes} position-relative shadow-lg`}>
      {isActive && (
        <div
          className={`position-absolute top-0 start-0 w-100 bg-gradient-${theme}-x bg-${theme} rounded-top`}
          style={{ height: '5px' }}
        />
      )}
      {children}
    </Tag>
  );
};

export default NavLink;
