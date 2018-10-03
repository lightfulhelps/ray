// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';
import type { IconNameType } from '../Icon/icons';

type Props = {
  className?: string,
  icon?: IconNameType,
  max?: number,
  text: string,
};

const CharacterCounter = ({
  className,
  icon = 'multipleSocialProvider',
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
