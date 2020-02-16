import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../..';

type Props = {
  campaign: string;
  className?: string;
  gradientEnd?: string;
  gradientStart?: string;
  imageForBackground?: string;
  resource: string;
  tag?: keyof JSX.IntrinsicElements;
  title: string;
};

export const isHex = (string: string): boolean => /^#([0-9A-F]{3}){1,2}$/i.test(string);

const ResourceCard: React.FC<Props> = ({
  campaign,
  className,
  gradientEnd,
  gradientStart,
  tag: Tag = 'a',
  title,
  imageForBackground,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'resource-card',
    'card p-1 rounded shadow h-100 bg-gray-900 text-decoration-none'
  );
  const style: { [key: string]: string | number } = {};

  if (imageForBackground) {
    style.backgroundImage = `url('${imageForBackground}')`;
    style.backgroundPosition = 'center';
    style.backgroundSize = 'cover';
    style.backgroundRepeat = 'no-repeat';
  } else if (gradientStart && isHex(gradientStart) && gradientEnd && isHex(gradientEnd)) {
    style.backgroundImage = `linear-gradient(90deg, ${gradientStart} 0%, ${gradientEnd} 100%)`;
  }

  return (
    <Tag {...other} className={classes} style={style}>
      <div className="d-flex align-items-center mb-2">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center mr-1 flex-shrink-0"
          style={{ width: '24px', height: '24px', background: 'rgba(255, 255, 255, 0.2)' }}
        >
          <Icon isActive name="download" theme="white" />
        </div>
        <div className="text-xs text-white" data-test-id="resource-card-campaign">
          {campaign}
        </div>
      </div>
      <div className="text-sm font-weight-bold text-white" data-test-id="resource-card-title">
        {title}
      </div>
    </Tag>
  );
};

export default ResourceCard;
