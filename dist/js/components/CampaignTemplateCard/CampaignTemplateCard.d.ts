import * as React from 'react';
declare type Props = {
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
declare const CampaignTemplateCard: React.FC<Props>;
export default CampaignTemplateCard;
