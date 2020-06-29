import * as React from 'react';
declare type Props = {
    checked: boolean;
    className?: string;
    id?: string;
    isDisabled?: boolean;
    label?: string;
    labelAlign?: string;
    onChange?: () => void;
    onClick?: (event: React.MouseEvent) => void;
    [key: string]: any;
};
declare const ToggleSwitch: React.FC<Props>;
export default ToggleSwitch;
