import * as React from 'react';
declare type Props = {
    children: string;
    className?: string;
    onRemove?: () => void;
    theme?: string;
    isOutline?: boolean;
    [key: string]: any;
};
declare const Tag: React.FC<Props>;
export default Tag;
