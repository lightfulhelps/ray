import React from 'react';
interface Props {
    className?: string;
    id?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    placeholder?: string;
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    name?: string;
    [key: string]: any;
}
declare const FormPasswordInput: React.FC<Props>;
export default FormPasswordInput;
