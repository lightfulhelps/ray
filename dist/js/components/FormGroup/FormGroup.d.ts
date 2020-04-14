import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    isCheck?: boolean;
    tag?: keyof JSX.IntrinsicElements;
    [key: string]: any;
};
declare const FormGroup: React.FC<Props>;
export default FormGroup;
