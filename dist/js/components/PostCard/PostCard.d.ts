import * as React from 'react';
import { IconNameType } from '../Icon/icons';
import { Props as ButtonProps } from '../Button/Button';
declare type MediaType = {
    id: string;
    type: string;
    url: string;
};
export declare type PostType = {
    campaign?: {
        color: string;
        name: string;
    };
    content: string;
    date?: Date | number | string;
    id: string;
    media?: MediaType[];
    metrics?: {
        icon?: IconNameType;
        key: string;
        value: number;
    }[];
    socialIdentity?: {
        avatar?: string;
        displayName?: string;
        id: string;
        provider: 'facebook' | 'twitter' | 'linkedin';
        username?: string;
    };
    state: string;
    tags: string[];
};
export declare type Props = {
    actions?: ButtonProps[];
    className?: string;
    dateFormat?: string;
    errors?: string[];
    isDraft?: boolean;
    isImported?: boolean;
    isInvalid?: boolean;
    metaPreview?: {
        description?: string;
        image?: string;
        title: string;
        url: string;
    };
    notesAction?: () => void;
    notesCount?: number;
    post: PostType;
    [key: string]: any;
};
declare type State = {
    isTruncated: boolean;
};
declare class PostCard extends React.Component<Props, State> {
    state: {
        isTruncated: boolean;
    };
    handleToggleTruncate: () => void;
    render(): JSX.Element;
}
export default PostCard;
