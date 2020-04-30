import * as React from 'react';
declare type StepType = {
    label: string;
    onClick?: (event: React.MouseEvent) => void;
    value: number | string;
};
declare type Props = {
    activeStep: number;
    className?: string;
    steps: Array<StepType>;
    [key: string]: any;
};
declare const Stepper: React.FC<Props>;
export default Stepper;
