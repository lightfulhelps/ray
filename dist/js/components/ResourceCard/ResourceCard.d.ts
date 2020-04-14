import * as React from 'react';
declare type Props = {
    campaign: string;
    className?: string;
    gradientEnd?: string;
    gradientStart?: string;
    imageForBackground?: string;
    resource: string;
    tag?: keyof JSX.IntrinsicElements;
    title: string;
    [key: string]: any;
};
export declare const isHex: (string: string) => boolean;
declare const ResourceCard: React.FC<Props>;
export default ResourceCard;
