import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    footer?: string;
    isOpen: boolean;
    onClick?: (event: React.MouseEvent) => void;
    position?: 'left' | 'right';
    tag?: keyof JSX.IntrinsicElements | typeof React.Component;
    theme?: 'light' | 'dark';
    [key: string]: any;
};
declare const DropdownMenu: React.FC<Props>;
export default DropdownMenu;
