// @flow
import * as React from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';
import formatDate from 'date-fns/format';
import { Card, Avatar, Badge, Icon, PostMedia, URLMetaPreview } from '../../';

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
  metaPreview?: {
    description?: string,
    image?: string,
    title: string,
    url: string,
  },
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
  metaPreview,
  socialProvider,
  title,
}: Props) => {
  const blockClass = 'post-card';
  const classes = classNames(
    className,
    blockClass,
    { [`${blockClass}--draft`]: isDraft },
    { [`${blockClass}--invalid`]: isInvalid }
  );

  return (
    <Card className={classes}>
      <div className={`${blockClass}__header`}>
        <div style={{ width: '35px', height: '35px' }}>
          <Avatar url={avatarUrl} provider={socialProvider} />
        </div>
        <div className="mx-1">
          <h1 className={`${blockClass}__title`}>{title}</h1>
          {date && <div className={`${blockClass}__date`}>{formatDate(date, dateFormat)}</div>}
          {campaign && (
            <Badge className="campaign-tag" color={campaign.color}>
              {campaign.name}
            </Badge>
          )}
        </div>
      </div>
      <Dotdotdot className={`${blockClass}__content`} clamp={5}>
        {content}
      </Dotdotdot>
      {media && (
        <div className={`${blockClass}__media`}>
          <PostMedia media={media} />
        </div>
      )}
      {metaPreview && (
        <div className={`${blockClass}__media border-top`}>
          <URLMetaPreview {...metaPreview} />
        </div>
      )}
      {inspirationActions &&
        inspirationActions.length > 0 && (
          <div className={`${blockClass}__inspiration-actions`}>
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
