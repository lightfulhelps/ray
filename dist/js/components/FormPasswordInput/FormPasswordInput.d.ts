import React from 'react';
declare type Props = {
    className?: string;
    id?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    placeholder?: string;
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    name?: string;
    [key: string]: any;
};
declare const FormPasswordInput: React.FC<Props>;
export default FormPasswordInput;
