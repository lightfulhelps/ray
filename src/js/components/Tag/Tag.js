// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Badge, Icon } from '../../';

type Props = {
  children: string,
  className?: string,
  onRemove?: () => void,
};

const Tag = ({ children, className, onRemove, ...other }: Props) => {
  const classes = classNames(className, 'tag');

  return (
    <Badge {...other} className={classes} isPill>
      {children}
      {onRemove && <Icon className="cursor-pointer" name="close" onClick={onRemove} />}
    </Badge>
  );
};

export default Tag;
