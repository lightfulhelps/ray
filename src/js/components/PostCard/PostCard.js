// @flow
import * as React from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';
import formatDate from 'date-fns/format';
import { Card, Avatar, Badge, Icon, PostMedia } from '../../';

type InspirationActionType = {
  activeColor?: string,
  color?: string,
  icon: string,
  isActive?: boolean,
  onClick?: () => void,
};

type MediaType = {
  type: string,
  url: string,
};

type Props = {
  avatarUrl?: string,
  campaign?: {
    color: string,
    name: string,
  },
  className?: string,
  content: string,
  date?: Date | number | string,
  dateFormat?: string,
  inspirationActions?: InspirationActionType[],
  isDraft?: boolean,
  isInvalid?: boolean,
  media?: MediaType[],
  socialProvider?: string,
  title: string,
};

const PostCard = ({
  avatarUrl,
  campaign,
  className,
  content,
  date,
  dateFormat = 'D MMM [at] HH:mm',
  inspirationActions,
  isDraft,
  isInvalid,
  media,
  socialProvider,
  title,
}: Props) => {
  const classes = classNames(
    className,
    'post-card',
    'shadow',
    { 'bg-light border-gray-500': isDraft },
    { 'border-danger': isInvalid }
  );

  return (
    <Card className={classes}>
      <div className="d-flex mt-2 mr-2 mb-0 ml-2">
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
      <Dotdotdot className="my-1 mx-2 font-weight-light" clamp={5}>
        {content}
      </Dotdotdot>
      {media && (
        <div style={{ height: '164px' }}>
          <PostMedia media={media} />
        </div>
      )}
      {inspirationActions &&
        inspirationActions.length > 0 && (
          <div className="inspiration-actions d-flex py-1 px-2 justify-content-between align-items-center h4 mb-0 text-gray-500 border-top">
            {inspirationActions.map((action, i) => (
              <Icon
                key={i}
                name={action.icon}
                className="cursor-pointer"
                color={action.isActive ? action.activeColor : action.color}
                hoverColor={action.isActive ? action.activeColor : '#343a40'}
                onClick={action.onClick}
              />
            ))}
          </div>
        )}
    </Card>
  );
};

export default PostCard;
