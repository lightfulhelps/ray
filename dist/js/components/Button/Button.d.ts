import * as React from 'react';
import { IconNameType } from '../Icon/icons';
declare type ButtonAttributes = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>;
export interface Props {
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
    tag?: keyof JSX.IntrinsicElements | typeof React.Component;
    theme?: string;
    type?: 'button' | 'submit' | 'reset';
    [key: string]: any;
}
declare const Button: React.FC<ButtonAttributes & Props>;
export default Button;
