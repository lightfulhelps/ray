import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  cover: string;
  state: string;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  title: string;
  [key: string]: any;
};

const CampaignCard: React.FC<Props> = ({
  className,
  cover,
  state = '',
  tag: Tag = 'div',
  title,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'campaign-card',
    'card rounded-lg shadow text-decoration-none h-100'
  );
  const stateClasses = classNames(
    'text-xs',
    { 'text-primary': state.toLowerCase() === 'live' },
    { 'text-warning': state.toLowerCase() === 'draft' }
  );

  return (
    <Tag {...other} className={classes} data-testid="campaign-card">
      <div
        className="campaign-card-cover"
        data-testid="campaign-card-cover"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
      <div className="px-3 pt-2 pb-3 h-100 d-flex flex-column justify-content-between">
        <div className="h5" data-testid="campaign-card-title">
          {title}
        </div>
        <div className={stateClasses} data-testid="campaign-card-state">
          {state}
        </div>
      </div>
    </Tag>
  );
};

export default CampaignCard;
