import React from 'react';
declare type Props = {
    className?: string;
    isDisconnected?: boolean;
    provider?: 'facebook' | 'twitter' | 'linkedin' | 'tick';
    providerSize?: 'sm' | 'md' | 'lg';
    url?: string;
    style?: {
        [key: string]: number | string;
    };
};
declare const Avatar: React.FC<Props>;
export default Avatar;
