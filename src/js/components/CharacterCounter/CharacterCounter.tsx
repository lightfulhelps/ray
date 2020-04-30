import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../..';

type Props = {
  className?: string;
  count?: number;
  max?: number;
  text: string;
  [key: string]: any;
};

const CharacterCounter: React.FC<Props> = ({
  className,
  count,
  max,
  text = '',
  ...other
}: Props) => {
  const current = count || text.length;
  const classes = classNames(className, 'character-counter', {
    'text-danger': max && current >= max,
  });

  return (
    <div {...other} className={classes}>
      <Icon name="characterCount" />
      {current.toLocaleString()}
      {max && `/${max.toLocaleString()}`}
    </div>
  );
};

export default CharacterCounter;
