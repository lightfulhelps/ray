import * as React from 'react';
declare type Props = {
    children?: string;
    className?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: 'sm' | 'md' | 'lg';
    [key: string]: any;
};
declare type TextAreaAttribute = Omit<React.HTMLProps<HTMLTextAreaElement>, 'size'>;
declare const FormTextarea: React.FC<Props & TextAreaAttribute>;
export default FormTextarea;
