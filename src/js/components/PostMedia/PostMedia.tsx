import React from 'react';
import classNames from 'classnames';

type MediaType = {
  type: string;
  url: string;
};

type Props = {
  className?: string;
  media: MediaType[];
};

const PostMedia: React.FC<Props> = ({ className, media, ...other }: Props) => {
  const blockClass = 'post-media';
  const classes = classNames(className, blockClass, `${blockClass}--${media.length}`);

  if (!media.length) {
    return (
      <div {...other} className={`${classes} ${blockClass}--empty`}>
        No media
      </div>
    );
  }

  const video = media.find(m => m.type === 'video');

  if (video) {
    return (
      <div {...other} className={classes}>
        <video className={`${blockClass}__video`} controls src={video.url} />
      </div>
    );
  }

  return (
    <div {...other} className={classes}>
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
