// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Button } from '../..';

type Props = {
  className?: string,
  description: string,
  image: string,
  onClick: (SyntheticMouseEvent<>) => void,
  title: string,
};

const CampaignTemplateCard = ({
  className,
  onClick,
  title,
  description,
  image,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'card shadow-lg h-100 rounded-lg',
    'campaign-template-card'
  );

  const imgStyles = {
    backgroundImage: `url(${image})`,
    height: 0,
    paddingBottom: '50%',
    backgroundPosition: 'center',
  };

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
          <div data-test-id="campaign-template-card-description">{description}</div>
        </div>
        <Button
          data-test-id="campaign-template-card-button"
          className="mt-2"
          onClick={onClick}
          isBlock
        >
          Use your template
        </Button>
      </div>
    </div>
  );
};

export default CampaignTemplateCard;
