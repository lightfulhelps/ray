// @flow
import * as React from 'react';
import classNames from 'classnames';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { format as formatDate } from 'date-fns';
import { Card, Avatar, PostMedia, URLMetaPreview, Button, Tag, Icon, Badge } from '../..';
import { type IconNameType } from '../Icon/icons';
import { type Props as ButtonProps } from '../Button/Button';

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

type Props = {
  actions?: ButtonProps[],
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
  notesAction?: () => null,
  notesCount?: number,
  post: PostType,
};

type State = {
  isTruncated: boolean,
};

const ResponsiveHTMLEllipsis = responsiveHOC()(HTMLEllipsis);

class PostCard extends React.Component<Props, State> {
  state = {
    isTruncated: true,
  };

  handleToggleTruncate = () => {
    this.setState(prevState => ({ isTruncated: !prevState.isTruncated }));
  };

  render() {
    const {
      actions = [],
      className,
      dateFormat = 'HH:mm [on] dddd, D MMMM',
      errors,
      isDraft,
      isInvalid,
      metaPreview,
      notesAction,
      notesCount = 0,
      post,
      ...other
    } = this.props;
    const classes = classNames(
      className,
      'post-card shadow',
      { 'post-card--draft': isDraft },
      { 'post-card--invalid': isInvalid }
    );

    if (!post) return null;

    const showMetaPreview =
      (!post.media || (post.media && post.media.length === 0)) && metaPreview && metaPreview.url;
    const showMediaEmpty =
      post.media && post.media.length === 0 && (!metaPreview || (metaPreview && !metaPreview.url));
    // const showPostErrors = errors && errors.length > 0;

    const defaultLineClamp = 3;
    const allLinesClamp = 9999;

    let borderColor;

    switch (post.state) {
      case 'scheduled':
        borderColor = 'info';
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
        <div className={`bg-${borderColor} rounded-top-sm`} style={{ height: '3px' }} />
        {errors && errors.length > 0 && (
          <div className="mt-1">
            {errors.map((error, i) => (
              <div
                key={i}
                className={classNames(
                  'd-flex align-items-center text-sm font-weight-bold mx-2 alert-danger py-half px-1 rounded-sm',
                  { 'mb-1': i < errors.length - 1 }
                )}
                style={{ lineHeight: 1 }}
              >
                <Icon className="mr-half flex-shrink-0" name="alert" theme="danger" size={18} />
                {error}
              </div>
            ))}
          </div>
        )}
        <div className="d-flex flex-column flex-md-row justify-content-between p-2 border-bottom">
          <div className="flex-fill">
            <div className="d-flex mb-1">
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
                  {post.date
                    ? `${post.state === 'published' ? 'Published' : 'Scheduled for'} ${formatDate(
                        post.date,
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
              className="text-sm mb-1"
              data-test-id="post-card-content"
              onClick={this.handleToggleTruncate}
            >
              <ResponsiveHTMLEllipsis
                unsafeHTML={post.content.replace(/\n/g, '<br />')}
                maxLine={this.state.isTruncated ? defaultLineClamp : allLinesClamp}
                ellipsisHTML='<span class="text-underline cursor-pointer">See more</span>'
                basedOn="words"
              />
            </div>
            <div className="d-flex flex-wrap">
              {post.campaign && (
                <Badge
                  className="d-flex align-items-center mb-1 mb-lg-0 mr-1 badge-pill"
                  color={post.campaign.color}
                >
                  <Icon className="mr-half" name="storyBuilder" />
                  Story: {post.campaign.name}
                </Badge>
              )}
              {post.tags &&
                post.tags.length > 0 &&
                post.tags.map((tag, i) => (
                  <Tag
                    className={`text-xs mr-half mb-1 mb-lg-0 ${i === 0 ? '' : ''}`}
                    isOutline
                    key={i}
                    theme="gray-600"
                  >
                    {tag}
                  </Tag>
                ))}
            </div>
          </div>
          <div className="post-card__media-wrap flex-shrink-0 overflow-hidden">
            {post.media && post.media.length > 0 && <PostMedia media={post.media} />}
            {showMetaPreview && (
              <URLMetaPreview {...metaPreview} className="border-top border-bottom" />
            )}
            {showMediaEmpty && <div className="post-media--empty">No media</div>}
          </div>
        </div>
        <div className="py-1 px-2 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex align-items-center flex-wrap mt-1 mt-md-0 mb-2 mb-md-0">
            {notesAction ? (
              <div
                className="d-flex align-items-center cursor-pointer"
                data-test-id="post-card-notes"
                onClick={notesAction}
              >
                <Icon className="mr-half" name="comment" />{' '}
                <span className="text-underline text-sm font-weight-bold" style={{ lineHeight: 1 }}>
                  View notes ({notesCount.toString()})
                </span>
              </div>
            ) : (
              post.metrics &&
              post.metrics.length > 0 &&
              post.metrics.map(metric => (
                <div
                  className="d-flex align-items-center text-sm mr-1"
                  data-test-id="post-card-metric"
                  key={metric.key}
                >
                  {metric.icon && (
                    <Icon className="mr-half" isActive name={metric.icon} size={20} />
                  )}{' '}
                  {metric.value} {metric.key}
                </div>
              ))
            )}
          </div>
          <div className="d-flex flex-wrap">
            {actions.length > 0 &&
              actions.map((action, i) => (
                <Button
                  key={i}
                  theme="gray-600"
                  isOutline
                  size="sm"
                  className="mr-1 mb-1 mr-md-0 ml-md-1 mb-lg-0"
                  data-test-id="post-card-action"
                  {...action}
                />
              ))}
          </div>
        </div>
      </Card>
    );
  }
}

export default PostCard;
