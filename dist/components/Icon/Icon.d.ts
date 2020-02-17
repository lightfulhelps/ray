import React from 'react';
import { IconNameType } from './icons';
declare type Props = {
    className?: string;
    color?: string;
    hoverColor?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    name: IconNameType;
    onClick?: (arg0: React.MouseEvent) => void;
    size?: number;
    style?: {
        [key: string]: string | number;
    };
    theme?: string;
    title?: string;
    viewBox?: string;
};
declare const Icon: React.FC<Props>;
export default Icon;
