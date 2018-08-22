// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Card, PostContent } from '../../';

type Props = {
  className?: string,
  content: string,
  isDraft?: boolean,
  isInvalid?: boolean,
};

const PostCard = ({ className, content, isDraft, isInvalid }: Props) => {
  const classes = classNames(
    className,
    'post-card',
    'shadow',
    { 'bg-light border-gray-500': isDraft },
    { 'border-danger': isInvalid }
  );

  return (
    <Card className={classes}>
      <PostContent>{content}</PostContent>
    </Card>
  );
};

export default PostCard;
