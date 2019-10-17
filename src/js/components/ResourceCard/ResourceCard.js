// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';

type Props = {
  campaign: string,
  className?: string,
  gradientStart?: string,
  gradientEnd?: string,
  resource: string,
  title: string,
};

const ResourceCard = ({
  campaign,
  className,
  gradientStart = '#27B0CC',
  gradientEnd = '#4513BB',
  resource,
  title,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'resource-card card p-1 rounded shadow h-100 d-flex flex-column justify-content-between'
  );

  return (
    <div
      {...other}
      className={classes}
      style={{
        backgroundImage: `linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
      }}
    >
      <div className="d-flex align-items-center mb-2">
        <div
          className="rounded-circle bg-gray-300 d-flex align-items-center justify-content-center mr-1"
          style={{ width: '24px', height: '24px' }}
        >
          <Icon name="chevronDown" theme="white" />
        </div>
        <div className="text-xs text-white">{campaign}</div>
      </div>
      <div className="text-sm font-weight-bold text-white">{title}</div>
    </div>
  );
};

export default ResourceCard;
