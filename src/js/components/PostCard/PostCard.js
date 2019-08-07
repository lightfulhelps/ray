// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Avatar, Badge, Col, Row, Icon, Tag, Button } from '../..';

type Props = {
  className?: string,
};

// const PostCard = ({ className, ...other }: Props) => {
//   const classes = classNames(className, 'post-card');

//   return (
//     <div {...other} className={classes}>
//       Post card
//     </div>
//   );
// };

const PostCard = ({ postContent, editButtonOnClick, postType }) => {
  const { externalConnection, media, content, post } = postContent;
  console.log('TCL: PostCard -> postContent', postContent);
  const getPostType = () => {
    switch (postType) {
      case 'scheduled':
        return { color: '#f0b954', theme: 'warning', label: 'Scheduled' };
      case 'to-approve':
        return { color: '#f25270', theme: 'danger', label: 'To approve' };
      default:
        return { color: '#0095f1', theme: 'info', label: 'Published' };
    }
  };

  return (
    <div
      className="bg-white rounded-sm shadow border-right border-bottom border-left"
      style={{ borderTop: `4px solid ${getPostType().color}` }}
    >
      <Row sm={12} className="p-1">
        <Col sm={1}>
          <Avatar
            url={externalConnection.avatar}
            provider={externalConnection.provider.toLowerCase()}
            style={{ width: '50px', height: '50px' }}
          />
        </Col>
        <Col sm={2}>
          <div
            style={{
              backgroundImage: `url(${media.nodes[0] && media.nodes[0].mediaByMediaId.url})`,
              height: '100%',
              width: '100%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className="rounded-sm"
          />
        </Col>

        <Col sm={9}>
          <div className="h-100 d-flex flex-column justify-content-between align-items-start">
            <div className="d-flex flex-direction-column justify-content-between w-100">
              <div className="d-flex align-items-center">
                <Badge className="font-weight-bold mr-1" theme={getPostType().theme}>
                  {getPostType().label}
                </Badge>
                <Icon name="user" />
                <span className="small">Created by {post.user.displayName}</span>
              </div>
              {postType === 'scheduled' && <Icon name="link" />}
            </div>

            <div className="d-flex flex-column align-items-start py-1">{content}</div>
            <div className="d-flex">
              {post.tags &&
                post.tags.nodes.map((tag, i) => (
                  <Tag key={i} className="text-xs mr-1 border" theme="light">
                    {tag.userTag.name}
                  </Tag>
                ))}
            </div>
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-between p-1 border-top align-items-center">
        <div className="d-flex flex-direction-column">
          {postType === 'sent' &&
            ['like', 'click', 'repost'].map((iconName, i) => (
              <div key={i} className="mr-1 d-flex align-items-center">
                <Icon key={i} name={iconName} />
                <span className="small">{` 0 ${iconName}s`}</span>
              </div>
            ))}
        </div>
        <div>
          {postType !== 'sent' && [
            <Button key={1} theme="dark" size="sm" isOutline className="ml-1">
              Delete
            </Button>,
            <Button key={2} theme="dark" size="sm" isOutline className="ml-1">
              Preview
            </Button>,
          ]}
          {postType === 'sent' && (
            <Button theme="dark" size="sm" isOutline className="ml-1">
              Reschedule
            </Button>
          )}
          {editButtonOnClick && (
            <Button theme="dark" size="sm" isOutline className="ml-1" onClick={editButtonOnClick}>
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
