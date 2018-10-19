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

  const customStyles = {
    control: (base, { isFocused }) => ({
      ...base,
      height: 'calc(2.875rem + 2px)',
      padding: '0.9375rem',
      'box-shadow': 'none',
      ':hover': {
        'border-color': isFocused ? '#27b0cc' : '#adb5bd',
      },
      'border-color': isFocused ? '#27b0cc' : '#dee2e6',
    }),
    valueContainer: base => ({
      ...base,
      padding: 'none',
    }),
    menu: base => ({
      ...base,
      'box-shadow': 'none',
      border: '1px solid #dee2e6',
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? '#f8f9fa' : 'inherit',
      borderBottom: '1px solid #e9ecef',
      ':last-child': {
        border: 'none',
      },
    }),
  };

  return (
    <CreatableSelect
      styles={customStyles}
      isMulti={isMulti}
      isClearable={isClearable}
      className={classes}
      options={options}
      {...other}
    />
  );
};

export default FormSelect;
