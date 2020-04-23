import * as React from 'react';
declare type Props = {
    className?: string;
    isFill?: boolean;
    isPills?: boolean;
    isTabs?: boolean;
    tag?: keyof JSX.IntrinsicElements | typeof React.Component;
    [key: string]: any;
};
declare const Nav: React.FC<Props>;
export default Nav;
