import * as React from 'react';
interface Props {
    className?: string;
    isCreatable?: boolean;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: 'sm' | 'lg';
}
declare const FormSelect: React.FC<Props>;
export default FormSelect;
