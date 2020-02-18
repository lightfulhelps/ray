import * as React from 'react';
declare type Props = {
    className?: string;
    ctaText: string;
    ctaTextSelected?: string;
    description: string;
    image: string;
    isSelected?: boolean;
    onClick: (arg0: React.MouseEvent) => void;
    title: string;
};
declare const CampaignTemplateCard: React.FC<Props>;
export default CampaignTemplateCard;
