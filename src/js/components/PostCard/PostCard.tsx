import React, { useState } from 'react';
import classNames from 'classnames';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { format as formatDate } from 'date-fns';
import { Card, Avatar, PostMedia, URLMetaPreview, Button, Tag, Icon } from '../..';
import { IconNameType } from '../Icon/icons';
import { Props as ButtonProps } from '../Button/Button';
import Alert from '../Alert/Alert';

export type MediaType = {
  id: string;
  type: string;
  url: string;
};

export type PostType = {
  campaign?: {
    color: string;
    name: string;
  };
  content: string;
  date?: Date | number | string;
  id: string;
  media?: MediaType[];
  metrics?: {
    icon?: IconNameType;
    key: string;
    value: number;
  }[];
  socialIdentity?: {
    avatar?: string;
    displayName?: string;
    id: string;
    provider: 'facebook' | 'twitter' | 'linkedin';
    username?: string;
  };
  state: string;
  tags: string[];
};

export type Props = {
  actions?: ButtonProps[];
  addLabel?: any;
  className?: string;
  dateFormat?: string;
  errors?: string[];
  isDraft?: boolean;
  isImported?: boolean;
  isInvalid?: boolean;
  metaPreview?: {
    description?: string;
    image?: string;
    title: string;
    url: string;
  };
  notesAction?: () => void;
  notesCount?: number;
  post: PostType;
  [key: string]: any;
};

const ResponsiveHTMLEllipsis = responsiveHOC()(HTMLEllipsis);

const PostCard: React.FC<Props> = props => {
  const [isTruncated, setIsTruncated] = useState(true);

  const handleToggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const {
    actions = [],
    addLabel,
    className,
    dateFormat = "HH:mm 'on' eeee, d MMMM",
    errors,
    isDraft,
    isImported,
    isInvalid,
    metaPreview,
    notesAction,
    notesCount = 0,
    post,
    ...other
  } = props;
  const classes = classNames(
    className,
    'post-card shadow rounded overflow-hidden',
    { 'post-card--draft': isDraft },
    { 'post-card--invalid': isInvalid }
  );

  if (!post) return null;

  const showMetaPreview =
    (!post.media || (post.media && post.media.length === 0)) && metaPreview && metaPreview.url;
  const showMediaEmpty =
    post.media && post.media.length === 0 && (!metaPreview || (metaPreview && !metaPreview.url));
  const hasPostMetrics = post.metrics && post.metrics.length > 0;

  const defaultLineClamp = 3;
  const allLinesClamp = 9999;

  let borderColor;

  switch (post.state) {
    case 'scheduled':
      borderColor = 'gradient-primary-x';
      break;
    case 'published':
      borderColor = 'success';
      break;
    case 'review':
      borderColor = 'warning';
      break;
    default:
      borderColor = '';
      break;
  }

  return (
    <Card {...other} className={classes}>
      <div className={`bg-${borderColor} rounded-top mb-1`} style={{ height: '5px' }} />
      {errors && errors.length > 0 && (
        <div className="mb-1">
          {errors.map((error, i) => (
            <Alert
              key={i}
              className={classNames('mx-3', { 'mb-1': i < errors.length - 1 })}
              theme="danger"
            >
              {error}
            </Alert>
          ))}
        </div>
      )}
      {isImported && (
        <div className="post-card__imported px-1 py-half rounded-sm text-sm alert-info fw-normal">
          This post was imported from outside of Lightful. Link clicks are not tracked.
        </div>
      )}
      <div className="d-flex flex-column flex-md-row justify-content-between px-3 pb-3 pt-1 border-bottom">
        <div className="flex-fill">
          <div className="d-flex mb-3">
            {post.socialIdentity && (
              <Avatar
                className="flex-shrink-0"
                url={post.socialIdentity.avatar}
                provider={post.socialIdentity.provider}
                style={{ width: '45px', height: '45px' }}
              />
            )}
            <div className="ms-1">
              <div className="h4 mb-0" data-test-id="post-card-date">
                {post.date
                  ? `${post.state === 'published' ? 'Published' : 'Scheduled for'} ${formatDate(
                      new Date(post.date),
                      dateFormat
                    )}`
                  : 'Unscheduled'}
              </div>
              {post.socialIdentity && (
                <div className="text-sm">{post.socialIdentity.displayName}</div>
              )}
            </div>
          </div>
          <div
            className="mb-3 post-card__content"
            data-test-id="post-card-content"
            onClick={handleToggleTruncate}
          >
            <ResponsiveHTMLEllipsis
              unsafeHTML={post.content.replace(/\n/g, '<br />')}
              maxLine={isTruncated ? defaultLineClamp : allLinesClamp}
              ellipsisHTML='<span class="text-underline cursor-pointer fw-bold">See more</span>'
              basedOn="words"
            />
          </div>
          <div className="d-flex flex-wrap">
            {post.campaign && (
              <Tag className="d-flex align-items-center mb-1 me-1 badge-pill" icon="storyBuilder">
                Story: {post.campaign.name}
              </Tag>
            )}
            {post.tags &&
              post.tags.length > 0 &&
              post.tags.map((tag, i) => (
                <Tag
                  className={`me-1 mb-1 ${i === 0 ? '' : ''}`}
                  isOutline
                  key={i}
                  theme="gray-600"
                  icon="tag"
                >
                  {tag}
                </Tag>
              ))}
            {addLabel && (
              <Button
                isOutline
                icon="add"
                className="me-1 mb-1 rounded-pill"
                data-test-id="post-card-add-label"
                {...addLabel}
              />
            )}
          </div>
        </div>
        <div
          className={classNames('post-card__media-wrap flex-shrink-0', {
            'h-100': showMetaPreview,
          })}
        >
          {post.media && post.media.length > 0 && <PostMedia media={post.media} />}
          {showMetaPreview && <URLMetaPreview {...metaPreview} className="shadow" isVertical />}
          {showMediaEmpty && <div className="post-media--empty">No media</div>}
        </div>
      </div>
      <div
        className={classNames(
          'py-2 px-3 d-flex flex-column flex-md-row align-items-center',
          notesAction || hasPostMetrics ? 'justify-content-between' : 'justify-content-end'
        )}
      >
        {(notesAction || hasPostMetrics) && (
          <div className="d-flex align-items-center flex-wrap mt-1 mt-md-0 mb-3 mb-md-0">
            {notesAction ? (
              <div
                className="d-flex align-items-center cursor-pointer"
                data-test-id="post-card-notes"
                onClick={notesAction}
              >
                <Icon className="me-half" name="comment" />{' '}
                <span className="text-underline text-sm" style={{ lineHeight: 1 }}>
                  View notes ({notesCount.toString()})
                </span>
              </div>
            ) : (
              post.metrics &&
              post.metrics.length > 0 &&
              post.metrics.map(metric => (
                <div
                  className="d-flex align-items-center text-sm me-1"
                  data-test-id="post-card-metric"
                  key={metric.key}
                >
                  {metric.icon && (
                    <Icon className="me-half" isActive name={metric.icon} size={20} />
                  )}{' '}
                  {metric.value} {metric.key}
                </div>
              ))
            )}
          </div>
        )}
        <div className="d-flex flex-wrap">
          {actions.length > 0 &&
            actions.map((action, i) => (
              <Button
                key={i}
                isOutline
                className="me-3 mb-1 me-md-0 ms-md-3 mb-lg-0"
                data-test-id="post-card-action"
                {...action}
              />
            ))}
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
