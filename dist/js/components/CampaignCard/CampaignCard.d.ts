import * as React from 'react';
declare type Props = {
    className?: string;
    cover: string;
    state: string;
    tag?: keyof JSX.IntrinsicElements | typeof React.Component;
    title: string;
    [key: string]: any;
};
declare const CampaignCard: React.FC<Props>;
export default CampaignCard;