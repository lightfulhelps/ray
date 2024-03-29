import * as React from 'react';
import classNames from 'classnames';
import { Card } from '../..';

type Props = {
  className?: string;
  isLoading?: boolean;
  [key: string]: any;
};

const PostCardGhost: React.FC<Props> = ({ className, isLoading, ...other }: Props) => {
  const classes = classNames(className, 'post-card-ghost', 'bg-gray-200 border-0 overflow-hidden', {
    loading: isLoading,
  });

  return (
    <Card {...other} className={classes}>
      <div className="d-flex align-items-top px-3 pt-3 pb-0">
        <div className="ghost rounded-circle me-3 mb-0" style={{ width: '35px', height: '35px' }} />
        <div className="flex-fill">
          <div className="ghost ghost-lg w-75" />
          <div className="ghost w-50" />
          <div className="ghost w-50 mb-0" />
        </div>
        <div className="ghost rounded-sm" style={{ width: '26px', height: '26px' }} />
      </div>
      <div className="p-3">
        <div className="ghost ghost-sm" />
        <div className="ghost ghost-sm" />
        <div className="ghost ghost-sm" />
        <div className="ghost ghost-sm" />
        <div className="ghost ghost-sm mb-0 w-75" />
      </div>
      <div className="ghost mb-0" style={{ height: '164px' }} />
    </Card>
  );
};

export default PostCardGhost;
