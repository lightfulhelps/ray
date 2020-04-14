import React from 'react';
import classNames from 'classnames';
import { Icon } from '../..';

type Props = {
  className?: string;
  isDisconnected?: boolean;
  provider?: 'facebook' | 'twitter' | 'linkedin' | 'tick';
  providerSize?: 'sm' | 'md' | 'lg';
  url?: string;
  style?: { [key: string]: number | string };
  [key: string]: any;
};

const Avatar: React.FC<Props> = ({
  className,
  isDisconnected,
  url = '',
  provider,
  providerSize = 'md',
  ...other
}: Props) => {
  const classes = classNames(className, 'avatar', `avatar-provider-${providerSize}`, {
    'avatar-disconnected': isDisconnected,
  });

  return (
    <div {...other} className={classes}>
      <div className="avatar-inner">
        <div className="avatar-image" style={{ backgroundImage: `url(${url})` }} />
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
