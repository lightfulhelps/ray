// @flow
import React from 'react';
import classNames from 'classnames';
import formatDate from 'date-fns/format';
import { Badge } from '../../';

type Props = {
  campaign?: {
    color: string,
    label: string,
  },
  className?: string,
  date?: Date | number | string,
  dateFormat?: string,
  title: string,
};

const PostHeader = ({
  campaign,
  className,
  date,
  dateFormat = 'D MMM [at] HH:mm',
  title,
}: Props) => {
  const classes = classNames(className, 'post-header', 'd-flex mt-2 mr-2 mb-1 ml-2');
  return (
    <div className={classes}>
      <div>
        <h1 className="h5">{title}</h1>
        {date && (
          <div className="post-date small text-uppercase">{formatDate(date, dateFormat)}</div>
        )}
        {campaign && <Badge color={campaign.color}>{campaign.label}</Badge>}
      </div>
    </div>
  );
};
export default PostHeader;
