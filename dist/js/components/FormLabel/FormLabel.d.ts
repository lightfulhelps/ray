import * as React from 'react';
declare type Props = {
    children: React.ReactNode;
    className?: string;
    isCheck?: boolean;
    [key: string]: any;
};
declare const FormLabel: React.FC<Props & React.HTMLProps<HTMLLabelElement>>;
export default FormLabel;
