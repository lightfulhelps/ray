import * as React from 'react';
import classNames from 'classnames';
import { FormInput, Button } from '../..';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
  onSearch: (arg0: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent) => void;
  placeholder?: string;
  value: string;
}

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
