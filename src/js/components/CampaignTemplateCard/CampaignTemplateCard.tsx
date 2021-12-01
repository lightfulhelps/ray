import * as React from 'react';
import classNames from 'classnames';
import { Button } from '../..';
import { Props as ButtonProps } from '../Button/Button';

type Props = {
  className?: string;
  ctaText?: string;
  ctaTextSelected?: string;
  description: string;
  image: string;
  isSelected?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  title: string;
  [key: string]: any;
};

const CampaignTemplateCard: React.FC<Props> = ({
  className,
  ctaText = 'Use this template',
  ctaTextSelected = 'Selected',
  onClick,
  title,
  description,
  image,
  isSelected,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'card h-100 rounded-lg',
    { 'campaign-template-card--selected': isSelected },
    'campaign-template-card'
  );

  const imgStyles = {
    backgroundImage: `url(${image})`,
    height: 0,
    paddingBottom: '50%',
    backgroundPosition: 'center',
  };

  const btnProps: ButtonProps = {
    className: 'mt-3',
    onClick,
    isDisabled: false,
    theme: 'primary',
    children: ctaText,
    size: 'lg',
  };

  if (isSelected) {
    btnProps.isDisabled = true;
    btnProps.icon = 'approvalTick';
    btnProps.children = ctaTextSelected;
  }

  return (
    <div {...other} className={classes}>
      <div
        style={imgStyles}
        className="bg-cover bg-gray-900 w-100 campaign-template-card-image"
        data-test-id="campaign-template-card-image"
      />
      <div className="p-3 d-flex h-100 flex-column justify-content-between">
        <div>
          <h4 data-test-id="campaign-template-card-title">{title}</h4>
          <div className="text-sm" data-test-id="campaign-template-card-description">
            {description}
          </div>
        </div>
        <div>
          <Button data-test-id="campaign-template-card-button" {...btnProps} />
        </div>
      </div>
    </div>
  );
};

export default CampaignTemplateCard;
