// @flow
import * as React from 'react';
import classNames from 'classnames';
import CreatableSelect from 'react-select/lib/Creatable';

type Props = {
  children: React.ChildrenArray<React.Element<'option'>>,
  className?: string,
  isClearable?: boolean,
  isInvalid?: boolean,
  isMulti?: boolean,
  isValid?: boolean,
  options: { [string]: any },
  size?: 'sm' | 'md' | 'lg',
};

const FormSelect = ({
  options,
  className,
  isInvalid,
  isValid,
  size,
  isMulti,
  isClearable,
  ...other
}: Props) => {
  const classes = classNames(
    className,
    // to do; put these styles in:
    // 'form-control',
    // size ? `form-control-${size}` : false,
    {
      'is-invalid': isInvalid,
    },
    { 'is-valid': isValid }
  );

  return (
    <CreatableSelect
      isMulti={isMulti}
      isClearable={isClearable}
      className={classes}
      options={options}
      {...other}
    />
  );
};

export default FormSelect;
