import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    tag?: keyof JSX.IntrinsicElements | typeof React.Component;
    [key: string]: any;
};
declare const Card: React.FC<Props>;
export default Card;
