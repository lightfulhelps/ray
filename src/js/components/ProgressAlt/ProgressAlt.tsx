import * as React from 'react';
import classNames from 'classnames';
import Badge from '../Badge/Badge';

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
  const classes = classNames(className, 'bg-gray-300 rounded d-flex me-2');
  const barClasses = classNames('position-relative rounded', {
    [`bg-gradient-${theme}-45 bg-${theme}`]: theme && value <= 100,
  });

  return (
    <div
      {...other}
      className={classes}
      data-testid="progress"
      style={{
        height: '16px',
        fontSize: '0.75rem',
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
        <span className="fw-bold justify-content-end">
          <div
            style={{
              height: '24px',
              top: '-4px',
              transform: 'translateX(-50%)',
              left: '100%',
              backgroundImage: 'linear-gradient($start-color, $mid-color $color-stop, $end-color)',
            }}
            className={`bg-gradient-${theme}-45 position-absolute rounded-3 d-flex justify-content-center align-items-center text-white px-2 h6 fw-normal`}
          >{`${value}%`}</div>
          {children}
        </span>
      </div>
    </div>
  );
};

export default Progress;
