// @flow
import React from 'react';
import classNames from 'classnames';
import formatDate from 'date-fns/format';

type Props = {
  className?: string,
  date?: Date | number | string,
  dateFormat?: string,
  title: string,
};

const PostHeader = ({ className, date, dateFormat = 'D MMM [at] hh:mm', title }: Props) => {
  const classes = classNames(className, 'post-header', 'd-flex mt-2 mr-2 mb-1 ml-2');
  return (
    <div className={classes}>
      <div>
        <h1 className="h5">{title}</h1>
        <div className="small text-uppercase">{formatDate(date, dateFormat)}</div>
      </div>
    </div>
  );
};
export default PostHeader;
