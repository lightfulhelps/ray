import * as React from 'react';
declare type Props = {
    activeStep: number;
    isLast: boolean;
    label: string;
    onClick?: (event: React.MouseEvent) => void;
    thisStep: number;
    value: number | string;
};
declare const Step: React.FC<Props>;
export default Step;
