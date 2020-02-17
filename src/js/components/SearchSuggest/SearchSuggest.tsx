import * as React from 'react';
import classNames from 'classnames';
import { DropdownMenu, DropdownItem, Icon } from '../..';

type ExcludeType = string | RegExp;

type Props = {
  className?: string;
  exclude: ExcludeType;
  isLoading?: boolean;
  isOpen: boolean;
  limit?: number;
  onClear?: () => void;
  onClick?: () => void;
  onRemove?: (arg0: number) => void;
  onSelect: (arg0: string, arg1: number) => void;
  options: string[];
  search: string;
  title?: string;
};

export const findMatches = (option: string, search: string, exclude: ExcludeType): boolean => {
  const normalize = (str: string) => str.replace(exclude, '').toLowerCase();

  return normalize(option).includes(normalize(search));
};

export const highlightMatches = (option: string, search: string, exclude: ExcludeType): string => {
  if (!search) return option;

  const regex = new RegExp(`(${search.replace(exclude, '')})`, 'gi');
  const ret = option.replace(regex, `<strong class="text-gray-900">$&</strong>`);

  return ret;
};

const SearchSuggest: React.FC<Props> = ({
  className,
  exclude,
  isLoading,
  isOpen,
  limit,
  onClear,
  onClick,
  onRemove,
  onSelect,
  options = [],
  search = '',
  title,
  ...other
}: Props) => {
  const classes = classNames(className, 'search-suggest');
  const count = limit && limit > 0 ? limit : 10;
  const filteredOptions = options.filter(option => findMatches(option, search, exclude));

  if (!isLoading && !options.length) return null;
  if (search.length > 0 && !filteredOptions.length) return null;

  return (
    <DropdownMenu
      {...other}
      className={classes}
      data-test-id="search-suggest"
      isOpen={isOpen}
      onClick={onClick}
    >
      {title && (
        <DropdownItem
          className="d-flex justify-content-between align-items-center"
          data-test-id="search-suggest-header"
          isHeader
        >
          {title}{' '}
          {!isLoading && onClear && (
            <div
              className="ml-1 text-danger cursor-pointer text-capitalize"
              data-test-id="search-suggest-clear"
              onClick={onClear}
            >
              Clear All
            </div>
          )}
        </DropdownItem>
      )}
      {isLoading && (
        <DropdownItem data-test-id="search-suggest-loading" isDisabled>
          Loading...
        </DropdownItem>
      )}
      {!isLoading &&
        filteredOptions.slice(0, count).map((option, i) => (
          <DropdownItem
            className="d-flex justify-content-between align-items-center text-body"
            data-test-id="search-suggest-item"
            key={i}
            onClick={() => onSelect(option, i)}
          >
            <div dangerouslySetInnerHTML={{ __html: highlightMatches(option, search, exclude) }} />
            {onRemove && (
              <Icon
                className="ml-1"
                data-test-id="search-suggest-remove"
                name="close"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  onRemove(i);
                }}
              />
            )}
          </DropdownItem>
        ))}
    </DropdownMenu>
  );
};

export default SearchSuggest;
