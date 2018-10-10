// @flow
import * as React from 'react';
import classNames from 'classnames';
import { FormInput, Button } from '../../';

type Props = {
  className?: string,
  onChange: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  onSearch: (
    SyntheticKeyboardEvent<HTMLInputElement> | SyntheticMouseEvent<HTMLButtonElement>
  ) => void,
  placeholder?: string,
  value: string,
};

const SearchInput = ({
  className,
  onChange,
  onSearch,
  placeholder = 'Search...',
  value,
  ...other
}: Props) => {
  const classes = classNames(className, 'search-input input-group shadow');
  const handleKeyPress = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(e);
    }
  };

  return (
    <div {...other} className={classes}>
      <FormInput
        data-test-id="search-input"
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        value={value}
      />
      <div className="input-group-append">
        <Button
          data-test-id="search-input-button"
          icon="search"
          isOutline
          onClick={onSearch}
          theme="gray-600"
        />
      </div>
    </div>
  );
};

export default SearchInput;
