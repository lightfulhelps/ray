import * as React from 'react';
import classNames from 'classnames';

const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];

type ColSizeType = boolean | number | string;

type ColumnType =
  | boolean
  | number
  | string
  | {
      offset: number | string;
      order: number | string;
      size: ColSizeType;
    };

type Props = {
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  lg?: ColumnType;
  md?: ColumnType;
  sm?: ColumnType;
  xl?: ColumnType;
  xs?: ColumnType;
  [key: string]: any;
};

const getColumnSizeClass = (isXs: boolean, colWidth: string, colSize: ColSizeType): string => {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : `col-${colWidth}`;
  }

  if (colSize === 'auto') {
    return isXs ? 'col-auto' : `col-${colWidth}-auto`;
  }

  if (colSize === false) return '';

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

const Col: React.FC<Props> = props => {
  const { children, className, tag: Tag = 'div', ...other } = props;
  const colClasses = [];

  colWidths.forEach((colWidth, i) => {
    const columnProp = props[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    const isXs = !i;

    if (typeof columnProp === 'object') {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push(
        classNames({
          [colClass]: columnProp.size || columnProp.size === '',
          [`order${colSizeInterfix}${columnProp.order}`]:
            columnProp.order || columnProp.order === 0,
          [`offset${colSizeInterfix}${columnProp.offset}`]:
            columnProp.offset || columnProp.offset === 0,
        })
      );
    } else {
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  const classes = classNames(className, colClasses);

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default Col;
