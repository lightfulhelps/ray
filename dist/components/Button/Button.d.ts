import * as React from 'react';
import { IconNameType } from '../Icon/icons';
export declare type Props = {
    children?: React.ReactNode;
    className?: string;
    icon?: IconNameType;
    iconPosition?: 'left' | 'right';
    iconTheme?: string;
    isBlock?: boolean;
    isDisabled?: boolean;
    isOutline?: boolean;
    onClick?: (arg0: React.MouseEvent) => void;
    size?: 'lg' | 'md' | 'sm';
    tag?: keyof JSX.IntrinsicElements;
    theme?: string;
    type?: 'button' | 'submit' | 'reset';
};
declare const Button: React.FC<Props>;
export default Button;
