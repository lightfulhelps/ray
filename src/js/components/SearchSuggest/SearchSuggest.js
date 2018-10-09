// @flow
import * as React from 'react';
import classNames from 'classnames';
import { DropdownMenu, DropdownItem, Icon } from '../../';

type Props = {
  className?: string,
  isLoading?: boolean,
  isOpen: boolean,
  limit?: number,
  onClear?: () => void,
  onClick?: () => void,
  onRemove?: number => void,
  onSelect: (string, number) => void,
  options: string[],
  search: string,
  title?: string,
};

export const findMatches = (option: string, search: string): boolean =>
  option.toLowerCase().includes(search.toLowerCase());

export const highlightMatches = (option: string, search: string): string => {
  if (!search) return option;

  const regex = new RegExp(`(${search})`, 'gi');
  const ret = option.replace(regex, `<strong class="text-gray-900">$&</strong>`);

  return ret;
};

const SearchSuggest = ({
  className,
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
  const output = options.filter(option => findMatches(option, search)).splice(0, count);

  if (!search.length && !output.length) return null;

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
          {!isLoading &&
            onClear && (
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
        search.length > 0 &&
        output.length === 0 && (
          <DropdownItem data-test-id="search-suggest-empty">
            No results for &ldquo;
            {search}
            &rdquo;
          </DropdownItem>
        )}
      {!isLoading &&
        output.length > 0 &&
        output.map((option, i) => (
          <DropdownItem
            className="d-flex justify-content-between align-items-center text-body"
            data-test-id="search-suggest-item"
            key={i}
            onClick={() => onSelect(option, i)}
          >
            <div dangerouslySetInnerHTML={{ __html: highlightMatches(option, search) }} />
            {onRemove && (
              <Icon
                className="ml-1"
                data-test-id="search-suggest-remove"
                name="close"
                onClick={e => {
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
