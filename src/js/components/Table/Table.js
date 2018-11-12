// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  isBordered?: boolean,
  isBorderless?: boolean,
  isHoverable?: boolean,
  isResponsive?: boolean,
  isStriped?: boolean,
  size?: 'lg' | 'sm',
};

const Table = ({
  className,
  isBordered,
  isBorderless,
  isHoverable,
  isResponsive,
  isStriped,
  size,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'table',
    size ? `table-${size}` : false,
    { 'table-bordered': isBordered && !isBorderless },
    { 'table-borderless': isBorderless && !isBordered },
    { 'table-striped': isStriped },
    { 'table-hover': isHoverable },
    { 'table-responsive': isResponsive }
  );

  return <table {...other} className={classes} />;
};

export default Table;
