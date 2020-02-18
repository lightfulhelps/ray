import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    color?: string;
    isOutline?: boolean;
    isPill?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    theme?: string;
};
declare const Badge: React.FC<Props>;
export default Badge;
