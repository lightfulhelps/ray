// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Card } from '../../';

type Props = {
  className?: string,
  isDraft?: boolean,
  isInvalid?: boolean,
};

const PostCard = ({ className, isDraft, isInvalid }: Props) => {
  const classes = classNames(
    className,
    'post-card',
    'shadow',
    isDraft ? 'bg-light border-gray-500' : null,
    isInvalid ? 'border-danger' : null
  );

  return <Card className={classes}>Post Card</Card>;
};

export default PostCard;
