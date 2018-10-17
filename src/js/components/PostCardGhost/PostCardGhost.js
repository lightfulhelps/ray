// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Card } from '../../';

type Props = {
  className?: string,
  isLoading?: boolean,
};

const PostCardGhost = ({ className, isLoading, ...other }: Props) => {
  const classes = classNames(className, 'post-card-ghost', 'shadow border-0', {
    loading: isLoading,
  });

  return (
    <Card {...other} className={classes}>
      <div className="d-flex align-items-center px-2 pt-2 pb-0">
        <div className="ghost rounded-circle mr-2 mb-0" style={{ width: '40px', height: '40px' }} />
        <div className="flex-fill">
          <div className="ghost w-50" />
          <div className="ghost ghost-sm w-25" />
          <div className="ghost ghost-sm w-25 mb-0" />
        </div>
      </div>
      <div className="p-2">
        <div className="ghost" />
        <div className="ghost" />
        <div className="ghost" />
        <div className="ghost" />
        <div className="ghost mb-0" />
      </div>
      <div>
        <div className="ghost ghost-lg mb-0" style={{ height: '164px' }} />
      </div>
      <div className="d-flex justify-content-between m-2">
        <div className="ghost w-50 mb-0" />
        <div className="ghost w-25 mb-0" />
      </div>
    </Card>
  );
};

export default PostCardGhost;
