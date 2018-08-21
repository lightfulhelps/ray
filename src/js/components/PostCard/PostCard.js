// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Card } from '../../';

type Props = {
  className?: string,
};

const PostCard = ({ className }: Props) => {
  const classes = classNames(className, 'post-card');

  return <Card className={classes}>Post Card</Card>;
};

export default PostCard;
