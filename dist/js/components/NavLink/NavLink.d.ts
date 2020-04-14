import * as React from 'react';
declare type Props = {
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    theme?: string;
    [key: string]: any;
};
declare const NavLink: React.FC<Props>;
export default NavLink;
