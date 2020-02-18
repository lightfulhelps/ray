import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLInputElement> {
    className?: string;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: 'sm' | 'md' | 'lg';
    type: string;
    name?: string;
    value?: string;
}
declare const FormInput: React.FC<Props>;
export default FormInput;
