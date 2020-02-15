import * as React from 'react';
import classNames from 'classnames';
import Select from 'react-select';
import Creatable from 'react-select/lib/Creatable';
import ClearIndicator from './ClearIndicator';
import DropdownIndicator from './DropdownIndicator';
import MultiValue from './MultiValue';
import Option from './Option';

// Props introduced by Ray - everything else will be passed through
// See - https://react-select.com/props - for more information
type Props = {
  className?: string;
  isCreatable?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  size?: 'sm' | 'lg';
};

const FormSelect: React.FC<Props> = ({
  className,
  isCreatable,
  isInvalid,
  isValid,
  size,
  ...other
}: Props) => {
  const Component = isCreatable ? Creatable : Select;
  const classNamePrefix = 'form-select';
  const classes = classNames(
    className,
    classNamePrefix,
    size ? `${classNamePrefix}-${size}` : '',
    { 'is-invalid': isInvalid },
    { 'is-valid': isValid }
  );

  return (
    <Component
      {...other}
      className={classes}
      classNamePrefix={classNamePrefix}
      components={{
        ClearIndicator,
        DropdownIndicator,
        MultiValue,
        Option,
      }}
      styles={{
        clearIndicator: () => ({}),
        container: () => ({}),
        control: () => ({}),
        dropdownIndicator: () => ({}),
        group: () => ({}),
        groupHeading: () => ({}),
        indicatorsContainer: () => ({}),
        indicatorSeparator: () => ({}),
        input: () => ({}),
        // loadingIndicator: () => ({}),
        // loadingMessage: () => ({}),
        menu: () => ({}),
        menuList: () => ({}),
        multiValue: () => ({}),
        multiValueLabel: () => ({}),
        multiValueRemove: () => ({}),
        noOptionsMessage: () => ({}),
        option: () => ({}),
        placeholder: () => ({}),
        singleValue: () => ({}),
        valueContainer: () => ({}),
      }}
    />
  );
};

export default FormSelect;
