// @flow
import * as React from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';
import formatDate from 'date-fns/format';
import isFuture from 'date-fns/is_future';
import { Card, Avatar, Badge, Button, Icon, PostMedia, URLMetaPreview } from '../../';

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
  id: string,
  media?: MediaType[],
  metrics?: {
    [key: string]: number,
  },
  socialIdentity?: {
    avatar?: string,
    displayName?: string,
    id: string,
    provider: 'facebook' | 'twitter' | 'linkedin',
    username?: string,
  },
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
  onApprove?: () => void,
  post: PostType,
};

const PostCard = ({
  className,
  dateFormat = 'D MMM [-] HH:mm',
  inspirationActions,
  isDraft,
  isInvalid,
  metaPreview,
  onApprove,
  post,
  ...other
}: Props) => {
  const blockClass = 'post-card';
  const classes = classNames(
    className,
    blockClass,
    { [`${blockClass}--draft`]: isDraft },
    { [`${blockClass}--invalid`]: isInvalid }
  );

  return (
    <Card {...other} className={classes}>
      <div className={`${blockClass}__header`}>
        {post.socialIdentity && (
          <div style={{ width: '35px', height: '35px', minWidth: '35px', minHeight: '35px' }}>
            <Avatar url={post.socialIdentity.avatar} provider={post.socialIdentity.provider} />
          </div>
        )}
        <div className="mx-1" style={{ height: '68px', minWidth: 0 }}>
          <h1 className={`${blockClass}__title`}>{post.title}</h1>
          <div className={`${blockClass}__date`}>
            {(!post.date || isFuture(post.date)) && (
              <Icon name="unscheduled" size={20} color="#adb5bd" />
            )}
            {post.date ? formatDate(post.date, dateFormat) : 'Unscheduled'}
          </div>
          {post.campaign && (
            <Badge className="campaign-tag" color={post.campaign.color}>
              {post.campaign.name}
            </Badge>
          )}
        </div>
      </div>
      <Dotdotdot className={`${blockClass}__content`} clamp={5}>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </Dotdotdot>
      {post.media && (
        <div className={`${blockClass}__media`}>
          <PostMedia media={post.media} />
        </div>
      )}
      {metaPreview && (
        <div className={`${blockClass}__media border-top border-bottom`}>
          <URLMetaPreview {...metaPreview} />
        </div>
      )}
      {post.metrics &&
        Object.keys(post.metrics).length > 0 && (
          <div className={`${blockClass}__metrics`}>
            {Object.keys(post.metrics).map(key => (
              <div key={key} className={`${blockClass}__metric`}>
                <span>{post.metrics && post.metrics[key]}</span> {key}
              </div>
            ))}
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
      {onApprove && (
        <Button className={`${blockClass}__approve`} onClick={onApprove}>
          Approve Post
        </Button>
      )}
    </Card>
  );
};

export default PostCard;
