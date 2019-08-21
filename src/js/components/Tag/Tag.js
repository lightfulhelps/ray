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
      <div className="d-flex align-items-center">
        <Icon className="tag__tag-icon flex-shrink-0" name="tag" />
        {children}
        {onRemove && (
          <Icon
            className="tag__remove-icon cursor-pointer"
            data-test-id="tag-remove-icon"
            name="close"
            onClick={onRemove}
          />
        )}
      </div>
    </Badge>
  );
};

export default Tag;
