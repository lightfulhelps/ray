// @flow
import React from 'react';
import classNames from 'classnames';
import createDeatultOrgAvatar from './createDeatultOrgAvatar';
import { Icon } from '../../';

type Props = {
  className?: string,
  isDisconnected?: boolean,
  orgName?: string,
  provider?: 'facebook' | 'twitter' | 'linkedin',
  url?: string,
};

const Avatar = ({ className, isDisconnected, url, provider, orgName, ...other }: Props) => {
  const classes = classNames(className, 'avatar', { 'avatar-disconnected': isDisconnected });

  return (
    <div {...other} className={classes}>
      <div className="avatar-image-wrap">
        {url && <img className="avatar-image" src={url} alt="" />}
        {orgName && !url && createDeatultOrgAvatar(orgName)}
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
