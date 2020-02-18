import React from 'react';
declare type Props = {
    className?: string;
    isBlock?: boolean;
    render: (arg0: boolean, arg1: () => void) => React.ReactNode;
};
declare const Dropdown: React.FC<Props>;
export default Dropdown;
