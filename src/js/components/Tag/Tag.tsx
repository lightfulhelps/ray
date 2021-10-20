import * as React from 'react';
import classNames from 'classnames';
import { Badge, Icon } from '../..';

type Props = {
  children: string;
  className?: string;
  onRemove?: () => void;
  isOutline?: boolean;
  [key: string]: any;
};

const Tag: React.FC<Props> = ({ children, className, onRemove, isOutline, ...other }: Props) => {
  const classes = classNames(className, 'tag text-sm px-2 py-1');

  return (
    <Badge
      {...other}
      theme={isOutline ? 'white' : 'dark'}
      className={classes}
      isPill
      withBorder={isOutline}
    >
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
