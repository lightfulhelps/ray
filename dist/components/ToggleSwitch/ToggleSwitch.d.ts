import * as React from 'react';
declare type Props = {
    checked: boolean;
    className?: string;
    id?: string;
    isDisabled?: boolean;
    label?: string;
    labelAlign?: string;
    onChange?: () => void;
    onClick?: (arg0: React.MouseEvent) => void;
};
declare const ToggleSwitch: React.FC<Props>;
export default ToggleSwitch;
