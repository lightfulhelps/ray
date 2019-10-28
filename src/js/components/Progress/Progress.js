// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children?: React.Node,
  className?: string,
  isAnimated?: boolean,
  isStriped?: boolean,
  theme?: string,
  value: number,
};

const Progress = ({
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
    { [`bg-${theme}`]: theme },
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
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {children}
      </div>
    </div>
  );
};

export default Progress;
