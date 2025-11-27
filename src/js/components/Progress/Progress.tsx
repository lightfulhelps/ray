import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children?: React.ReactNode;
  className?: string;
  isAnimated?: boolean;
  isStriped?: boolean;
  theme?: string;
  value: number;
  size?: 'sm' | 'md' | 'lg';
  [key: string]: any;
};

const Progress: React.FC<Props> = ({
  children,
  className,
  isAnimated,
  isStriped,
  theme = 'primary',
  size = 'md',
  value = 0,
  ...other
}: Props) => {
  const classes = classNames(className, 'progress');
  const barClasses = classNames(
    'progress-bar',
    { [`bg-gradient-${theme}-x bg-${theme}`]: theme && value <= 100 },
    { 'bg-danger': value > 100 },
    { 'progress-bar-animated': isAnimated },
    { 'progress-bar-striped': isStriped }
  );

  return (
    <div
      {...other}
      className={classes}
      data-testid="progress"
      style={{
        height: `${size === 'sm' ? '0.5rem' : size === 'lg' ? '1.5rem' : '1.25rem'}`,
        fontSize: `${size === 'sm' ? '0.5rem' : size === 'lg' ? '1rem' : '0.75rem'}`,
      }}
    >
      <div
        className={barClasses}
        data-testid="progress-bar"
        role="progressbar"
        style={{
          width: `${value}%`,
        }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className="fw-bold">{children}</span>
      </div>
    </div>
  );
};

export default Progress;
