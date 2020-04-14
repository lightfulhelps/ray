import React from 'react';
declare type Props = {
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
    theme?: string;
    children: React.ReactNode;
    [key: string]: any;
};
declare const Alert: React.FC<Props>;
export default Alert;
