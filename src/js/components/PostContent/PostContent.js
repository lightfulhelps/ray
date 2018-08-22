// @flow
import * as React from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';

type Props = {
  children: string,
  className?: string,
  lines?: number,
};

const PostContent = ({ children, className, lines = 5 }: Props) => {
  const classes = classNames(className, 'post-content', 'my-1 mx-2 font-weight-light');

  return (
    <div className={classes}>
      <Dotdotdot clamp={lines}>{children}</Dotdotdot>
    </div>
  );
};

export default PostContent;
