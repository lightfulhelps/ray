// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';

type Props = {
  className?: string,
  icon?: 'characterCount' | 'characterCountOutline',
  max?: number,
  text: string,
};

const CharacterCounter = ({
  className,
  icon = 'characterCount',
  max,
  text = '',
  ...other
}: Props) => {
  const classes = classNames(className, 'character-counter', {
    'text-danger': max && text.length >= max,
  });

  return (
    <div {...other} className={classes}>
      <Icon name={icon} />
      {text.length}
      {max && `/${max}`}
    </div>
  );
};

export default CharacterCounter;
