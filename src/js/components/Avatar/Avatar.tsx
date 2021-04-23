import React from 'react';
import classNames from 'classnames';
import DBAvatars from '@dicebear/avatars';
import DBAvatarsInitialsSprites from '@dicebear/avatars-initials-sprites';
import { Icon } from '../..';

type Props = {
  className?: string;
  isDisconnected?: boolean;
  name?: string;
  provider?: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'tick';
  providerSize?: 'sm' | 'md' | 'lg';
  url?: string;
  style?: { [key: string]: number | string };
  [key: string]: any;
};

const Avatar: React.FC<Props> = ({
  className,
  isDisconnected,
  name = 'Lightful',
  provider,
  providerSize = 'md',
  url = '',
  ...other
}: Props) => {
  const classes = classNames(className, 'avatar', `avatar-provider-${providerSize}`, {
    'avatar-disconnected': isDisconnected,
  });
  const dbAvatars = new DBAvatars(DBAvatarsInitialsSprites, {});
  const initialsSvg = `data:image/svg+xml;utf8,${encodeURIComponent(dbAvatars.create(name))}`;

  return (
    <div {...other} className={classes}>
      <div className="avatar-inner">
        <div
          className="avatar-image"
          style={{
            backgroundImage: `url(${url || initialsSvg})`,
          }}
        />
        {provider && (
          <div className={`avatar-provider avatar-provider-${provider}`}>
            <Icon name={provider} color="#ffffff" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Avatar;
