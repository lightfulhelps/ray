// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  cover: string,
  status: string,
  tag?: string,
  title: string,
};

const CampaignCard = ({ className, cover, status, tag: Tag = 'div', title, ...other }: Props) => {
  const classes = classNames(
    className,
    'campaign-card',
    'card rounded-lg shadow text-decoration-none h-100'
  );
  const statusClasses = classNames(
    'text-xs font-weight-bold',
    { 'text-primary': status === 'Live' },
    { 'text-warning': status === 'Draft' }
  );

  return (
    <Tag {...other} className={classes} data-test-id="campaign-card">
      <div
        className="campaign-card-cover"
        data-test-id="campaign-card-cover"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
      <div className="px-2 py-1 h-100 d-flex flex-column justify-content-between">
        <div className="h6" data-test-id="campaign-card-title">
          {title}
        </div>
        <div className={statusClasses} data-test-id="campaign-card-status">
          {status}
        </div>
      </div>
    </Tag>
  );
};

export default CampaignCard;
