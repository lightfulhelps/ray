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

type PostType = {
  campaign?: {
    color: string,
    name: string,
  },
  content: string,
  date?: Date | number | string,
  media?: MediaType[],
  socialIdentity?: {
    avatar?: string,
    displayName?: string,
    id: string,
    username?: string,
  },
  socialProvider?: string,
  title: string,
};

type Props = {
  className?: string,
  dateFormat?: string,
  inspirationActions?: InspirationActionType[],
  isDraft?: boolean,
  isInvalid?: boolean,
  metaPreview?: {
    description?: string,
    image?: string,
    title: string,
    url: string,
  },
  post: PostType,
};

const PostCard = ({
  className,
  dateFormat = 'D MMM [at] HH:mm',
  inspirationActions,
  isDraft,
  isInvalid,
  metaPreview,
  post,
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
        {post.socialIdentity && (
          <div style={{ width: '35px', height: '35px' }}>
            <Avatar url={post.socialIdentity.avatar} provider={post.socialProvider} />
          </div>
        )}
        <div className="mx-1">
          <h1 className={`${blockClass}__title`}>{post.title}</h1>
          {post.date && (
            <div className={`${blockClass}__date`}>{formatDate(post.date, dateFormat)}</div>
          )}
          {post.campaign && (
            <Badge className="campaign-tag" color={post.campaign.color}>
              {post.campaign.name}
            </Badge>
          )}
        </div>
      </div>
      <Dotdotdot className={`${blockClass}__content`} clamp={5}>
        {post.content}
      </Dotdotdot>
      {post.media && (
        <div className={`${blockClass}__media`}>
          <PostMedia media={post.media} />
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
