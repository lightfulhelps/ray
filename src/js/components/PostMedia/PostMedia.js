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
  const sharedClasses = classNames(className, 'post-media', `post-media--${media.length}`);
  const emptyClasses = classNames(
    sharedClasses,
    'd-flex justify-content-center align-items-center bg-gray-100 text-gray-300 h5'
  );
  const videoClasses = classNames(sharedClasses);
  const imageClasses = classNames(sharedClasses);

  if (!media.length) {
    return <div className={emptyClasses}>No media</div>;
  }

  const video = media.find(m => m.type === 'video');

  if (video) {
    return (
      <div className={videoClasses}>
        <video className="post-media__video" controls src={video.url} />
      </div>
    );
  }

  return (
    <div className={imageClasses}>
      {media.map((m, i) => (
        <div key={i} className="post-media__image" style={{ backgroundImage: `url(${m.url})` }} />
      ))}
    </div>
  );
};

export default PostMedia;
