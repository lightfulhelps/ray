// @flow
import * as React from 'react';
import classNames from 'classnames';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import formatDate from 'date-fns/format';
import isFuture from 'date-fns/is_future';
import {
  Card,
  Avatar,
  Badge,
  Icon,
  PostMedia,
  URLMetaPreview,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  Tag,
} from '../..';
import { type IconNameType } from '../Icon/icons';
import DropdownToggle from '../DropdownToggle/DropdownToggle';

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
  creator?: string,
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
  tags: [string],
  title: string,
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
  const showPostErrors = errors && errors.length > 0;
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
  }

  return (
    <Card {...other} className={classes}>
      <div className={`bg-${borderColor} rounded-top-sm`} style={{ height: '4px' }} />
      <div className="d-flex px-2 py-1 border-bottom">
        <div>
          <div className="d-flex mb-half">
            <Avatar
              className="flex-shrink-0"
              url={post.socialIdentity.avatar}
              provider={post.socialIdentity.provider}
              style={{ width: '40px', height: '40px' }}
            />
            <div className="ml-1">
              <div className="h6 mb-0">
                {post.date ? `Scheduled for ${formatDate(post.date, dateFormat)}` : 'Unscheduled'}
              </div>
              <div className="text-sm">{post.socialIdentity.displayName}</div>
            </div>
          </div>
          <div className="text-sm mb-1">
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
                <Tag className={`text-xs ${i === 0 ? '' : 'ml-half  '}`} key={i}>
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        </div>
        <div
          className="ml-1 flex-shrink-0 rounded-sm overflow-hidden"
          style={{ width: '130px', height: '130px' }}
        >
          {post.media && post.media.length > 0 && <PostMedia media={post.media} />}
          {showMetaPreview && (
            <URLMetaPreview {...metaPreview} className="border-top border-bottom" />
          )}
          {showMediaEmpty && <div className="post-media--empty">No media</div>}
        </div>
      </div>
      <div className="py-1 px-2 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          {post.metrics && Object.keys(post.metrics).length > 0 && (
            <React.Fragment>
              {Object.keys(post.metrics).map(key => (
                <div className="text-sm mr-1" key={key}>
                  <span>{post.metrics && post.metrics[key]}</span> {key}
                </div>
              ))}
            </React.Fragment>
          )}
        </div>
        <div>
          <Button theme="dark" size="sm" isOutline className="ml-1">
            Delete
          </Button>
          <Button theme="dark" size="sm" isOutline className="ml-1">
            Preview
          </Button>
          <Button theme="dark" size="sm" isOutline className="ml-1">
            Reschedule
          </Button>
          <Button theme="dark" size="sm" isOutline className="ml-1">
            Edit
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
