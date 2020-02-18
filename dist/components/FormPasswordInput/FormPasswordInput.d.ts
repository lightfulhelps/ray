import React from 'react';
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    className?: string;
    id?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    placeholder?: string;
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    name?: string;
}
declare const FormPasswordInput: React.FC<Props>;
export default FormPasswordInput;
