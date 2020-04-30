import * as React from 'react';
export declare type Props = {
    children: React.ReactNode;
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    isHeader?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    tag?: keyof JSX.IntrinsicElements | typeof React.Component;
    [key: string]: any;
};
declare const DropdownItem: React.FC<Props>;
export default DropdownItem;
