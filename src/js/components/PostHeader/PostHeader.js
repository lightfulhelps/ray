// @flow
import React from 'react';
import classNames from 'classnames';
import formatDate from 'date-fns/format';
import { Avatar, Badge } from '../../';

type Props = {
  avatarUrl?: string,
  campaign?: {
    color: string,
    name: string,
  },
  className?: string,
  date?: Date | number | string,
  dateFormat?: string,
  socialProvider?: string,
  title: string,
};

const PostHeader = ({
  avatarUrl,
  campaign,
  className,
  date,
  dateFormat = 'D MMM [at] HH:mm',
  socialProvider,
  title,
}: Props) => {
  const classes = classNames(className, 'post-header', 'd-flex mt-2 mr-2 mb-1 ml-2');
  return (
    <div className={classes}>
      <div style={{ width: '35px', height: '35px' }}>
        <Avatar url={avatarUrl} provider={socialProvider} />
      </div>
      <div className="mx-1">
        <h1 className="h5">{title}</h1>
        {date && (
          <div className="post-date small text-uppercase">{formatDate(date, dateFormat)}</div>
        )}
        {campaign && (
          <Badge className="campaign-tag" color={campaign.color}>
            {campaign.name}
          </Badge>
        )}
      </div>
    </div>
  );
};
export default PostHeader;
