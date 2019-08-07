// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
};

const PostCard = ({ className, ...other }: Props) => {
  const classes = classNames(className, 'post-card');

  return <div {...other} className={classes} />;
};

export default PostCard;
