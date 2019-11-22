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
  const defaultAvatar = orgName && createDeatultOrgAvatar(orgName);

  const classes = classNames(className, 'avatar', { 'avatar-disconnected': isDisconnected });

  return (
    <div {...other} className={classes}>
      <div className="avatar-image-wrap">
        {url && <img className="avatar-image" src={url} alt="" />}
        {defaultAvatar && (
          <div
            className={`avatar d-flex align-items-center justify-content-center text-white bold ${
              defaultAvatar.bgClass
            }`}
          >
            <span className="avatar-default-org">{defaultAvatar.letter}</span>
          </div>
        )}
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
