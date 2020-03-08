import * as React from 'react';
interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
    children?: string;
    className?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    size?: 'sm' | 'md' | 'lg';
}
declare type TextAreaAttribute = Omit<React.HTMLProps<HTMLTextAreaElement>, 'size'>;
declare const FormTextarea: React.FC<Props & TextAreaAttribute>;
export default FormTextarea;
