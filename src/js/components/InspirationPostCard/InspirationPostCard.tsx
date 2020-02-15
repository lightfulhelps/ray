import * as React from 'react';
import classNames from 'classnames';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import formatDate from 'date-fns/format';
import { Card, Avatar, Icon, PostMedia, URLMetaPreview, Tag } from '../..';
import { IconNameType } from '../Icon/icons';

type InspirationActionType = {
  activeColor?: string;
  color?: string;
  icon: IconNameType;
  isActive?: boolean;
  onClick: () => void;
  theme?: string;
};

type MediaType = {
  type: string;
  url: string;
};

type InspirationPostType = {
  content: string;
  creator?: string;
  date?: Date | number | string;
  id: string;
  media?: MediaType[];
  metrics?: {
    [key: string]: number;
  };
  socialIdentity?: {
    avatar?: string;
    displayName?: string;
    id: string;
    provider: 'facebook' | 'twitter' | 'linkedin';
    username?: string;
  };
  tags: [string];
  title: string;
};

type Props = {
  className?: string;
  dateFormat?: string;
  inspirationActions?: InspirationActionType[];
  metaPreview?: {
    description?: string;
    image?: string;
    title: string;
    url: string;
  };
  post: InspirationPostType;
};

export const config = {
  contentLines: 5,
  tagLimit: 3,
};

const ResponsiveHTMLEllipsis = responsiveHOC()(HTMLEllipsis);

const InspirationPostCard: React.FC<Props> = ({
  className,
  dateFormat = 'D MMM YY [-] HH:mm',
  inspirationActions,
  metaPreview,
  post,
  ...other
}: Props) => {
  const blockClass = 'inspiration-post-card';
  const classes = classNames(className, blockClass);
  const showMetaPreview =
    (!post.media || (post.media && post.media.length === 0)) && metaPreview && metaPreview.url;
  const showMediaEmpty =
    post.media && post.media.length === 0 && (!metaPreview || (metaPreview && !metaPreview.url));

  return (
    <Card {...other} className={classes}>
      <div className={`${blockClass}__header`}>
        {post.socialIdentity && (
          <div style={{ width: '35px', height: '35px', minWidth: '35px', minHeight: '35px' }}>
            <Avatar url={post.socialIdentity.avatar} provider={post.socialIdentity.provider} />
          </div>
        )}
        <div className="mx-1" style={{ minWidth: 0, flex: 1 }}>
          <h1 className={`${blockClass}__title`}>{post.title}</h1>
          <div className={`${blockClass}__date`}>
            {post.date ? formatDate(post.date, dateFormat) : 'Unscheduled'}
          </div>
        </div>
      </div>
      <div className={`${blockClass}__content`}>
        <ResponsiveHTMLEllipsis
          unsafeHTML={post.content.replace(/\n/g, '<br />')}
          maxLine={config.contentLines}
          ellipsis="..."
          basedOn="words"
        />
      </div>
      <div className={`${blockClass}__media`}>
        {post.media && post.media.length > 0 && <PostMedia media={post.media} />}
        {showMetaPreview && (
          <URLMetaPreview {...metaPreview} className="border-top border-bottom" />
        )}
        {showMediaEmpty && <div className="post-media--empty">No media</div>}
      </div>
      {post.tags && post.tags.length > 0 && (
        <div className={`${blockClass}__tags d-flex align-items-center bg-gray-200 px-2 py-1`}>
          <div className="d-flex align-items-center text-gray-900 font-weight-bold mr-1">
            {post.tags.length}{' '}
            <Icon name="tag" theme="gray-500" isActive style={{ marginLeft: '2px' }} />
          </div>
          <div className="d-flex flex-fill" style={{ minWidth: 0 }}>
            {post.tags.slice(0, config.tagLimit).map((tag, i) => (
              <Tag
                className={`text-xs ${i < config.tagLimit - 1 ? 'mr-1' : ''}`}
                key={i}
                theme="light"
              >
                {tag}
              </Tag>
            ))}
          </div>
          {post.tags.length > config.tagLimit && (
            <div className={`${blockClass}__tags-more`}>+{post.tags.length - config.tagLimit}</div>
          )}
        </div>
      )}
      {post.metrics && Object.keys(post.metrics).length > 0 && (
        <div className={`${blockClass}__metrics`}>
          {Object.keys(post.metrics).map(key => (
            <div key={key} className={`${blockClass}__metric`}>
              <span>{post.metrics && post.metrics[key]}</span> {key}
            </div>
          ))}
        </div>
      )}
      {inspirationActions && inspirationActions.length > 0 && (
        <div className={`${blockClass}__inspiration-actions`}>
          {inspirationActions.map((action, i) => (
            <Icon
              key={i}
              isActive={action.isActive}
              name={action.icon}
              title={action.icon}
              theme={action.theme}
              onClick={() => {
                if (!action.isActive) action.onClick();
              }}
            />
          ))}
        </div>
      )}
    </Card>
  );
};

export default InspirationPostCard;
