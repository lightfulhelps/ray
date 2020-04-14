import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    isFluid?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    [key: string]: any;
};
declare const Container: React.FC<Props>;
export default Container;
