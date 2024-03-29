import * as React from 'react';
import classNames from 'classnames';
import { FormInput, Button } from '../..';

type Props = {
  className?: string;
  onSearch: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent) => void;
  placeholder?: string;
  value?: string;
  [key: string]: any;
};

const SearchInput: React.FC<Props> = ({
  className,
  onChange,
  onSearch,
  placeholder = 'Search...',
  value,
  ...other
}: Props) => {
  const classes = classNames(className, 'search-input input-group shadow');
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
        type="text"
        value={value}
      />
      <Button
        data-test-id="search-input-button"
        className="input-group-append"
        icon="search"
        isOutline
        onClick={onSearch}
        theme="gray-600"
      />
    </div>
  );
};

export default SearchInput;
