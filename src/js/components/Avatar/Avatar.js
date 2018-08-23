// @flow
import React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';

type Props = {
  className?: string,
  provider?: 'facebook' | 'twitter' | 'linkedin',
  url?: string,
};

const Avatar = ({ className, url, provider }: Props) => {
  const classes = classNames(className, 'avatar');

  return (
    <div className={classes}>
      <div className="avatar-image-wrap">
        {url && <img className="avatar-image" src={url} alt="" />}
      </div>
      {provider && (
        <div className={`avatar-provider avatar-provider-${provider}`}>
          <Icon name={provider} color="#ffffff" size={16} />
        </div>
      )}
    </div>
  );
};

export default Avatar;
