// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Card } from '../../';

type Props = {
  children: React.ChildrenArray<React.Element<any>>,
  className?: string,
  isDraft?: boolean,
  isInvalid?: boolean,
};

const PostCard = ({ children, className, isDraft, isInvalid }: Props) => {
  const classes = classNames(
    className,
    'post-card',
    'shadow',
    { 'bg-light border-gray-500': isDraft },
    { 'border-danger': isInvalid }
  );

  return <Card className={classes}>{children}</Card>;
};

export default PostCard;
