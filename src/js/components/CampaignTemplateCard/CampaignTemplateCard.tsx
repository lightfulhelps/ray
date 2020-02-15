import * as React from 'react';
import classNames from 'classnames';
import { Button } from '../..';
import { Props as ButtonProps } from '../Button/Button';

type Props = {
  className?: string;
  ctaText: string;
  ctaTextSelected?: string;
  description: string;
  image: string;
  isSelected?: boolean;
  onClick: (arg0: React.MouseEvent) => void;
  title: string;
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

  const btnProps: ButtonProps & { 'data-test-id': string } = {
    'data-test-id': 'campaign-template-card-button',
    className: 'mt-2',
    onClick,
    isBlock: true,
    isDisabled: false,
    theme: 'primary',
    children: ctaText,
  };

  if (isSelected) {
    btnProps.isDisabled = true;
    btnProps.theme = 'success';
    btnProps.icon = 'tick';
    btnProps.children = ctaTextSelected;
  }

  return (
    <div {...other} className={classes}>
      <div
        style={imgStyles}
        className="bg-cover bg-gray-900 w-100 rounded-top-lg"
        data-test-id="campaign-template-card-image"
      />
      <div className="p-2 d-flex h-100 flex-column justify-content-between">
        <div>
          <h5 data-test-id="campaign-template-card-title">{title}</h5>
          <div className="text-sm" data-test-id="campaign-template-card-description">
            {description}
          </div>
        </div>
        <Button {...btnProps} />
      </div>
    </div>
  );
};

export default CampaignTemplateCard;
