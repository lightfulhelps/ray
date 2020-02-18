import * as React from 'react';
export declare type Props = {
    children: React.ReactNode;
    className?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    isHeader?: boolean;
    onClick?: (arg0: React.MouseEvent) => void;
    tag?: keyof JSX.IntrinsicElements;
};
declare const DropdownItem: React.FC<Props>;
export default DropdownItem;
