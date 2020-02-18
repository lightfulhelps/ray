import * as React from 'react';
declare type ColSizeType = boolean | number | string;
declare type ColumnType = boolean | number | string | {
    offset: number | string;
    order: number | string;
    size: ColSizeType;
};
declare type Props = {
    children: React.ReactNode;
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
    lg?: ColumnType;
    md?: ColumnType;
    sm?: ColumnType;
    xl?: ColumnType;
    xs?: ColumnType;
};
declare const Col: React.FC<Props>;
export default Col;
