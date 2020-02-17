import * as React from 'react';
import { IconNameType } from '../Icon/icons';
declare type InspirationActionType = {
    activeColor?: string;
    color?: string;
    icon: IconNameType;
    isActive?: boolean;
    onClick: () => void;
    theme?: string;
};
declare type MediaType = {
    type: string;
    url: string;
};
declare type InspirationPostType = {
    content: string;
    creator?: string;
    date?: Date | number | string;
    id: string;
    media?: MediaType[];
    metrics?: {
        [key: string]: number;
    };
    socialIdentity?: {
        avatar?: string;
        displayName?: string;
        id: string;
        provider: 'facebook' | 'twitter' | 'linkedin';
        username?: string;
    };
    tags: [string];
    title: string;
};
declare type Props = {
    className?: string;
    dateFormat?: string;
    inspirationActions?: InspirationActionType[];
    metaPreview?: {
        description?: string;
        image?: string;
        title: string;
        url: string;
    };
    post: InspirationPostType;
};
export declare const config: {
    contentLines: number;
    tagLimit: number;
};
declare const InspirationPostCard: React.FC<Props>;
export default InspirationPostCard;
