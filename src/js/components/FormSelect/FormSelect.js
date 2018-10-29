// @flow
import * as React from 'react';
import classNames from 'classnames';
import Select from 'react-select';
import Creatable from 'react-select/lib/Creatable';
import { Icon, Tag } from '../../';
import SelectOption from './SelectOption';

type Props = {
  className?: string,
  isCreatable?: boolean,
  isInvalid?: boolean,
  isValid?: boolean,
  size?: 'sm' | 'lg',
};

export const getBorder = (
  isHovered: boolean | null | typeof undefined,
  isFocused: boolean | null | typeof undefined,
  isInvalid: boolean | typeof undefined
) => {
  if (isInvalid) return '#f25270';

  if (isFocused) return '#27b0cc';

  if (isHovered) return '#adb5bd';

  return '#dee2e6';
};

export const getSize = (size: 'sm' | 'md' | 'lg' | typeof undefined) => {
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

const FormSelect = ({ className, isCreatable, isInvalid, isValid, size, ...other }: Props) => {
  const classNamePrefix = 'form-select';

  const classes = classNames(
    className,
    size ? `${classNamePrefix}-${size}` : classNamePrefix,
    {
      'is-invalid': isInvalid,
    },
    { 'is-valid': isValid }
  );

  const Component = isCreatable ? Creatable : Select;

  const ClearIndicator = ({ innerProps }) => <Icon {...innerProps} name="close" />;

  const DropdownIndicator = () => <Icon name="caretDown" />;

  const MultiValue = props => (
    <Tag className="mr-1" onRemove={props.removeProps.onClick} theme="gray-900">
      {props.children}
    </Tag>
  );

  const { height, padding, fontSize } = getSize(size);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      height,
      padding,
      fontSize,
      'box-shadow': 'none',
      ':hover': {
        'border-color': getBorder(state.isFocused, true, isInvalid),
      },
      'border-color': getBorder(state.isFocused, null, isInvalid),
    }),
    valueContainer: base => ({
      ...base,
      padding: 'none',
    }),
    menu: base => ({
      ...base,
      'box-shadow': 'none',
      margin: '0',
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
    <Component
      {...other}
      className={classes}
      classNamePrefix={classNamePrefix}
      components={{
        ClearIndicator,
        DropdownIndicator,
        MultiValue,
        Option: SelectOption,
      }}
      styles={customStyles}
    />
  );
};

export default FormSelect;
