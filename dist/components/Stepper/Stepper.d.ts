import * as React from 'react';
declare type StepType = {
    label: string;
    onClick?: (arg0: React.MouseEvent) => void;
    value: number | string;
};
declare type Props = {
    activeStep: number;
    className?: string;
    steps: Array<StepType>;
};
declare const Stepper: React.FC<Props>;
export default Stepper;
