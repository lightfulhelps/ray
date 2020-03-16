import * as React from 'react';
import { Props as ButtonProps } from '../Button/Button';
declare type Props = ButtonProps & {
    className?: string;
    isOpen?: boolean;
};
declare const DropdownToggle: React.FC<Props>;
export default DropdownToggle;
