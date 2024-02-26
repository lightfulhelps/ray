import React from 'react';
import Icon from '../Icon/Icon';
import { IconNameType } from '../Icon/icons';
import Button from '../Button/Button';

type ChevronDirection = 'left' | 'right' | 'up' | 'down';

type Props = {
  direction?: ChevronDirection;
  onClick: () => void;
  className?: string;
  [key: string]: any;
};

const dirToIconName = (direction: ChevronDirection): IconNameType => {
  switch (direction) {
    case 'left':
      return 'chevronLeft';
    case 'right':
      return 'chevronRight';
    case 'up':
      return 'chevronUp';
    case 'down':
      return 'chevronDown';
    default:
      return 'chevronLeft';
  }
};

const Chevron: React.FC<Props> = ({ direction = 'left', onClick, className, ...other }: Props) => {
  return (
    <Button
      onClick={onClick}
      size="sm"
      className={`chevron-button ${className || ''}`}
      theme="gray-300"
      {...other}
    >
      <Icon name={dirToIconName(direction)} color="gray-600" />
    </Button>
  );
};

export default Chevron;
