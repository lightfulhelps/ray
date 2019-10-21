// @flow
import React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';

type Props = {
  className?: string,
  isDisconnected?: boolean,
  provider?: 'facebook' | 'twitter' | 'linkedin',
  providerSize?: 'sm' | 'md' | 'lg',
  url?: string,
};

const Avatar = ({
  className,
  isDisconnected,
  url,
  provider,
  providerSize = 'md',
  ...other
}: Props) => {
  const classes = classNames(className, 'avatar', `avatar-provider-${providerSize}`, {
    'avatar-disconnected': isDisconnected,
  });

  return (
    <div {...other} className={classes}>
      <div className="avatar-image-wrap">
        {url && <img className="avatar-image" src={url} alt="" />}
      </div>
      {provider && (
        <div className={`avatar-provider avatar-provider-${provider}`}>
          <Icon name={provider} color="#ffffff" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
