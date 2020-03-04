import React from 'react';
export {};
declare global {
    interface Window {
        [key: string]: any;
    }
}
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
