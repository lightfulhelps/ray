import * as React from 'react';
import { Props as ReactSelectProps } from 'react-select/src/Select';
interface Props extends ReactSelectProps {
    className?: string;
    isCreatable?: boolean;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: 'sm' | 'lg';
}
declare const FormSelect: React.FC<Props>;
export default FormSelect;
