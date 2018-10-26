// @flow
import * as React from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';
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
} from '../../';
import { type IconNameType } from '../Icon/icons';

type InspirationActionType = {
  activeColor?: string,
  color?: string,
  icon: string,
  isActive?: boolean,
  onClick: () => void,
  theme?: string,
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
  footerButton?: React.Element<any>,
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

export const config = {
  contentLines: 5,
  tagLimit: 3,
};

const PostCard = ({
  actions = [],
  className,
  dateFormat = 'D MMM [-] HH:mm',
  footerButton,
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
  const showPostMedia = post.media && post.media.length > 0;
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
        <div className="mx-1" style={{ height: '72px', minWidth: 0, flex: 1 }}>
          <h1 className={`${blockClass}__title`}>{post.title}</h1>
          <div className={`${blockClass}__date`}>
            {(!post.date || isFuture(post.date)) && (
              <Icon name="schedule" size={20} color="#adb5bd" />
            )}
            {post.date ? formatDate(post.date, dateFormat) : 'Unscheduled'}
          </div>
          {post.campaign && (
            <Badge className={`${blockClass}__campaign`} color={post.campaign.color}>
              {post.campaign.name}
            </Badge>
          )}
        </div>
        {actions.length > 0 && (
          <Dropdown
            render={(isOpen, onToggle) => (
              <React.Fragment>
                <Button icon="menu" onClick={onToggle} size="sm" theme="light" />
                <DropdownMenu
                  footer={post.creator ? `Creator: ${post.creator}` : null}
                  isOpen={isOpen}
                  onClick={onToggle}
                  position="right"
                  theme="dark"
                >
                  {actions.map((action, i) => (
                    <DropdownItem key={i} onClick={action.onClick}>
                      {action.icon && <Icon name={action.icon} className="mr-1" />}
                      {action.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </React.Fragment>
            )}
          />
        )}
      </div>
      <div className={`${blockClass}__content`}>
        <Dotdotdot clamp={config.contentLines}>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </Dotdotdot>
      </div>
      <div className={`${blockClass}__media`}>
        {showPostMedia && <PostMedia media={post.media} />}
        {showMetaPreview && (
          <URLMetaPreview {...metaPreview} className="border-top border-bottom" />
        )}
        {showMediaEmpty && <div className="post-media--empty">No media</div>}
      </div>
      {post.tags &&
        post.tags.length > 0 && (
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
              <div className={`${blockClass}__tags-more`}>
                +{post.tags.length - config.tagLimit}
              </div>
            )}
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
      {footerButton && <div className={`${blockClass}__footer`}>{footerButton}</div>}
    </Card>
  );
};

export default PostCard;
