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
    {
      'is-invalid': isInvalid,
    },
    { 'is-valid': isValid }
  );

  const getSize = () => {
    if (size === 'lg') {
      return {
        padding: '.5rem 1rem',
        fontSize: '1.25rem',
        height: 'inherit',
      };
    }
    if (size === 'sm') {
      return {
        padding: '0 .5rem',
        fontSize: '.875rem',
        height: 'inherit',
      };
    }
    return {
      padding: '0.9375rem',
      fontSize: 'inherit',
      height: 'calc(2.875rem + 2px)',
    };
  };

  const getBorder = (isFocused, isHovered) => {
    if (isInvalid) return '#f25270';

    if (isHovered) return '#adb5bd';

    if (isFocused) return '#27b0cc';

    return '#dee2e6';
  };

  const { height, padding, fontSize } = getSize();

  const customStyles = {
    control: (base, state) => ({
      ...base,
      height,
      padding,
      fontSize,
      'box-shadow': 'none',
      ':hover': {
        'border-color': getBorder(null, true),
      },
      'border-color': getBorder(state.isFocused),
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
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f8f9fa' : 'inherit',
      color: 'inherit',
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
