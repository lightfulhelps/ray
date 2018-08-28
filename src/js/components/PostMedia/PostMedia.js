// @flow
import React from 'react';
import classNames from 'classnames';

type MediaType = {
  type: string,
  url: string,
};

type Props = {
  className?: string,
  media: MediaType[],
};

const PostMedia = ({ className, media }: Props) => {
  const blockClass = 'post-media';
  const classes = classNames(className, blockClass, `${blockClass}--${media.length}`);

  if (!media.length) {
    return <div className={`${classes} ${blockClass}--empty`}>No media</div>;
  }

  const video = media.find(m => m.type === 'video');

  if (video) {
    return (
      <div className={classes}>
        <video className={`${blockClass}__video`} controls src={video.url} />
      </div>
    );
  }

  return (
    <div className={classes}>
      {media.map((m, i) => (
        <div
          key={i}
          className={`${blockClass}__image`}
          style={{ backgroundImage: `url(${m.url})` }}
        />
      ))}
    </div>
  );
};

export default PostMedia;
