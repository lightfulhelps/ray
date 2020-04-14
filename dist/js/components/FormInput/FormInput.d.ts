import * as React from 'react';
interface Props {
    className?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: 'sm' | 'md' | 'lg';
    type?: string;
    [key: string]: any;
}
declare type InputAttribute = Omit<React.HTMLProps<HTMLInputElement>, 'size'>;
declare const FormInput: React.FC<Props & InputAttribute>;
export default FormInput;
