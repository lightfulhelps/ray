import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    isValid?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    [key: string]: any;
};
declare const FormFeedback: React.FC<Props>;
export default FormFeedback;
