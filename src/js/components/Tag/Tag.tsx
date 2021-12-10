import * as React from 'react';
import classNames from 'classnames';
import { Badge, Icon } from '../..';
import { IconNameType } from '../Icon/icons';

type Props = {
  children: React.ReactNode;
  className?: string;
  onRemove?: () => void;
  isOutline?: boolean;
  icon?: IconNameType;
  [key: string]: any;
};

const Tag: React.FC<Props> = ({
  children,
  className,
  onRemove,
  isOutline,
  icon,
  ...other
}: Props) => {
  const classes = classNames(className, 'tag text-sm px-3 py-1', {
    'border border-gray-500': isOutline,
  });

  return (
    <Badge
      {...other}
      theme={isOutline ? 'white' : 'dark'}
      className={classes}
      isPill
      withBorder={isOutline}
    >
      <div className="lh-sm d-flex align-items-center">
        {icon && <Icon size={14} className="tag__tag-icon flex-shrink-0" name={icon} />}
        {children}
        {onRemove && (
          <Icon
            size={14}
            className="tag__remove-icon cursor-pointer flex-shrink-0"
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
