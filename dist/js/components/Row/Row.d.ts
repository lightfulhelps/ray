import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    noGutters?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    [key: string]: any;
};
declare const Row: React.FC<Props>;
export default Row;
