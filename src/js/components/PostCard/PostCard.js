// @flow
import * as React from 'react';
import classNames from 'classnames';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import formatDate from 'date-fns/format';
import { Card, Avatar, PostMedia, URLMetaPreview, Button, Tag, Icon } from '../..';
import { type IconNameType } from '../Icon/icons';

type MediaType = {
  type: string,
  url: string,
};

type PostType = {
  content: string,
  date?: Date | number | string,
  id: string,
  media?: MediaType[],
  metrics?: [
    {
      icon?: IconNameType,
      key: string,
      value: number,
    },
  ],
  socialIdentity?: {
    avatar?: string,
    displayName?: string,
    id: string,
    provider: 'facebook' | 'twitter' | 'linkedin',
    username?: string,
  },
  state: string,
  tags: [string],
};

type PostActionType = {
  icon?: IconNameType,
  label: string,
  onClick: () => void,
};

type Props = {
  actions?: PostActionType[],
  className?: string,
  dateFormat?: string,
  errors?: string[],
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

const ResponsiveHTMLEllipsis = responsiveHOC()(HTMLEllipsis);

const PostCard = ({
  actions = [],
  className,
  dateFormat = 'HH:mm [on] dddd, D MMMM',
  errors,
  isDraft,
  isInvalid,
  metaPreview,
  post,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'post-card shadow',
    { 'post-card--draft': isDraft },
    { 'post-card--invalid': isInvalid }
  );
  const showMetaPreview =
    (!post.media || (post.media && post.media.length === 0)) && metaPreview && metaPreview.url;
  const showMediaEmpty =
    post.media && post.media.length === 0 && (!metaPreview || (metaPreview && !metaPreview.url));
  // const showPostErrors = errors && errors.length > 0;

  let borderColor;

  switch (post.state) {
    case 'scheduled':
      borderColor = 'warning';
      break;
    case 'published':
      borderColor = 'info';
      break;
    case 'review':
      borderColor = 'danger';
      break;
    default:
      borderColor = '';
      break;
  }

  return (
    <Card {...other} className={classes}>
      <div className={`bg-${borderColor} rounded-top-sm`} style={{ height: '4px' }} />
      <div className="d-flex flex-column flex-md-row justify-content-between px-2 py-1 border-bottom">
        <div>
          <div className="d-flex mb-half">
            {post.socialIdentity && (
              <Avatar
                className="flex-shrink-0"
                url={post.socialIdentity.avatar}
                provider={post.socialIdentity.provider}
                style={{ width: '40px', height: '40px' }}
              />
            )}
            <div className="ml-1">
              <div className="h6 mb-0" data-test-id="post-card-date">
                {post.date ? `Scheduled for ${formatDate(post.date, dateFormat)}` : 'Unscheduled'}
              </div>
              {post.socialIdentity && (
                <div className="text-sm">{post.socialIdentity.displayName}</div>
              )}
            </div>
          </div>
          <div className="text-sm mb-1" data-test-id="post-card-content">
            <ResponsiveHTMLEllipsis
              unsafeHTML={post.content.replace(/\n/g, '<br />')}
              maxLine={3}
              ellipsis="..."
              basedOn="words"
            />
          </div>
          {post.tags && post.tags.length > 0 && (
            <div>
              {post.tags.map((tag, i) => (
                <Tag
                  className={`text-xs ${i === 0 ? '' : 'ml-half  '}`}
                  isOutline
                  key={i}
                  theme="gray-600"
                >
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        </div>
        <div className="post-card__media-wrap flex-shrink-0 rounded-sm overflow-hidden">
          {post.media && post.media.length > 0 && <PostMedia media={post.media} />}
          {showMetaPreview && (
            <URLMetaPreview {...metaPreview} className="border-top border-bottom" />
          )}
          {showMediaEmpty && <div className="post-media--empty">No media</div>}
        </div>
      </div>
      <div className="py-1 px-2 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          {post.metrics &&
            post.metrics.length > 0 &&
            post.metrics.map(metric => (
              <div className="d-flex align-items-center text-sm mr-1" key={metric.key}>
                {metric.icon && <Icon className="mr-half" isActive name={metric.icon} size={20} />}{' '}
                {metric.value} {metric.key}
              </div>
            ))}
        </div>
        <div>
          {actions.length > 0 &&
            actions.map((action, i) => (
              <Button
                key={i}
                theme="dark"
                size="sm"
                isOutline
                className="ml-1"
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            ))}
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
