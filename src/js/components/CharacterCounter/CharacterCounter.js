// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';

type Props = {
  className?: string,
  max?: number,
  text: string,
};

const CharacterCounter = ({ className, max, text = '', ...other }: Props) => {
  const classes = classNames(className, 'character-counter', {
    'text-danger': max && text.length >= max,
  });

  return (
    <div {...other} className={classes}>
      <Icon name="characterCount" />
      {text.length}
      {max && `/${max}`}
    </div>
  );
};

export default CharacterCounter;
