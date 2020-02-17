import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  className?: string;
  isAnimated?: boolean;
  isStriped?: boolean;
  theme?: string;
  value: number;
};

const Progress: React.FC<Props> = ({
  children,
  className,
  isAnimated,
  isStriped,
  theme = 'primary',
  value = 0,
  ...other
}: Props) => {
  const classes = classNames(className, 'progress');
  const barClasses = classNames(
    'progress-bar',
    { [`bg-${theme}`]: theme && value <= 100 },
    { 'bg-danger': value > 100 },
    { 'progress-bar-animated': isAnimated },
    { 'progress-bar-striped': isStriped }
  );

  return (
    <div {...other} className={classes} data-test-id="progress">
      <div
        className={barClasses}
        data-test-id="progress-bar"
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {children}
      </div>
    </div>
  );
};

export default Progress;
