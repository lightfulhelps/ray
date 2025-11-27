import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import SearchSuggest, { findMatches, highlightMatches } from './SearchSuggest';

const setup = (overrides = {}) => {
  const props = merge(
    {
      isLoading: false,
      onClear: jest.fn(),
      onClick: jest.fn(),
      onRemove: jest.fn(),
      onSelect: jest.fn(),
      options: [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Eleven',
        'Twelve',
      ],
      search: 't',
      title: 'Recent Searches',
      isOpen: true,
      exclude: '',
    },
    overrides
  );

  const renderResult = render(<SearchSuggest {...props} />);

  return { ...renderResult, props };
};

describe('<SearchSuggest />', () => {
  it('should return null if not loading and no options', () => {
    const { rerender, props, container } = setup();

    rerender(<SearchSuggest {...props} isLoading search="" options={[]} />);
    expect(container.querySelector('[data-testid="search-suggest"]')).toBeInTheDocument();

    rerender(<SearchSuggest {...props} isLoading={false} search="" options={[]} />);
    expect(container.querySelector('[data-testid="search-suggest"]')).not.toBeInTheDocument();
  });

  it('should return null if search value and no matching options', () => {
    const { rerender, props, container } = setup();

    rerender(<SearchSuggest {...props} search="a" options={['a', 'b', 'c']} />);
    expect(container.querySelector('[data-testid="search-suggest"]')).toBeInTheDocument();

    rerender(<SearchSuggest {...props} search="d" options={['a', 'b', 'c']} />);
    expect(container.querySelector('[data-testid="search-suggest"]')).not.toBeInTheDocument();
  });

  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container } = setup({ className: 'custom' });

    const searchSuggest = container.querySelector('[data-testid="search-suggest"]');
    expect(searchSuggest).toHaveClass('search-suggest');
    expect(searchSuggest).toHaveClass('custom');
  });

  it('should handle isLoading', () => {
    const { rerender, props, container } = setup({ isLoading: true });

    expect(container.querySelector('[data-testid="search-suggest-loading"]')).toBeInTheDocument();

    rerender(<SearchSuggest {...props} isLoading={false} />);

    expect(
      container.querySelector('[data-testid="search-suggest-loading"]')
    ).not.toBeInTheDocument();
  });

  it('should handle isOpen', () => {
    const { rerender, props, container } = setup({ isOpen: true });

    let searchSuggest = container.querySelector('[data-testid="search-suggest"]');
    expect(searchSuggest).toHaveClass('show');

    rerender(<SearchSuggest {...props} isOpen={false} />);

    searchSuggest = container.querySelector('[data-testid="search-suggest"]');
    expect(searchSuggest).not.toHaveClass('show');
  });

  it('should handle limit', () => {
    const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
    const { rerender, props, container } = setup({ options, search: '' });

    expect(container.querySelectorAll('[data-testid="search-suggest-item"]')).toHaveLength(10);

    rerender(<SearchSuggest {...props} options={options} search="" limit={5} />);

    expect(container.querySelectorAll('[data-testid="search-suggest-item"]')).toHaveLength(5);

    rerender(<SearchSuggest {...props} options={options} search="" limit={null} />);

    expect(container.querySelectorAll('[data-testid="search-suggest-item"]')).toHaveLength(10);
  });

  it('should handle onClear', async () => {
    const { container, props } = setup();

    const clearButton = container.querySelector('[data-testid="search-suggest-clear"]');
    await userEvent.click(clearButton);

    expect(props.onClear).toHaveBeenCalledTimes(1);
  });

  it('should handle onClick', async () => {
    const { container, props } = setup();

    const searchSuggest = container.querySelector('[data-testid="search-suggest"]');
    await userEvent.click(searchSuggest);

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should handle onRemove', async () => {
    const { container, props } = setup();

    const removeButtons = container.querySelectorAll('[data-testid="search-suggest-remove"]');
    await userEvent.click(removeButtons[0]);
    await userEvent.click(removeButtons[1]);

    expect(props.onRemove).toHaveBeenCalledTimes(2);
    expect(props.onRemove).toHaveBeenNthCalledWith(1, 0);
    expect(props.onRemove).toHaveBeenNthCalledWith(2, 1);
  });

  it('should handle onSelect', async () => {
    const options = ['A', 'B', 'C'];
    const { container, props } = setup({ options, search: '' });

    const items = container.querySelectorAll('[data-testid="search-suggest-item"]');
    await userEvent.click(items[0]);
    await userEvent.click(items[1]);

    expect(props.onSelect).toHaveBeenCalledTimes(2);
    expect(props.onSelect).toHaveBeenNthCalledWith(1, options[0], 0);
    expect(props.onSelect).toHaveBeenNthCalledWith(2, options[1], 1);
  });

  it('should handle options', () => {
    const options = ['A', 'b', 'c'];
    const { rerender, props, container } = setup();

    rerender(<SearchSuggest {...props} options={options} search="" />);

    expect(container.querySelectorAll('[data-testid="search-suggest-item"]')).toHaveLength(3);
  });

  it('should handle search', () => {
    const options = ['A', 'a', 'B', 'C'];
    const { rerender, props, container } = setup({ options, search: 'a' });

    expect(container.querySelectorAll('[data-testid="search-suggest-item"]')).toHaveLength(2);

    rerender(<SearchSuggest {...props} options={options} search="b" />);

    expect(container.querySelectorAll('[data-testid="search-suggest-item"]')).toHaveLength(1);
  });

  it('should handle title', () => {
    const { rerender, props, container } = setup({ title: '' });

    expect(
      container.querySelector('[data-testid="search-suggest-header"]')
    ).not.toBeInTheDocument();

    rerender(<SearchSuggest {...props} title="Test" />);

    expect(container.querySelector('[data-testid="search-suggest-header"]')).toBeInTheDocument();
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const searchSuggest = container.querySelector('[data-testid="search-suggest"]');
    expect(searchSuggest).toHaveAttribute('tabIndex', '1');
    expect(searchSuggest).toHaveAttribute('id', 'test');
  });
});

describe('findMatches()', () => {
  it('should return true if option string includes search value', () => {
    expect(findMatches('Test String', 't')).toBe(true);
    expect(findMatches('Test String', 'T')).toBe(true);
    expect(findMatches('Test String', 'est')).toBe(true);
    expect(findMatches('Test String', 'ing')).toBe(true);
    expect(findMatches('Test String', 'Test S')).toBe(true);
  });

  it('should return false if option string does not include search value', () => {
    expect(findMatches('Test String', 'a')).toBe(false);
    expect(findMatches('Test String', 'z')).toBe(false);
    expect(findMatches('Test String', 'Tests')).toBe(false);
    expect(findMatches('Test String', 'TestString')).toBe(false);
  });

  it('should exclude specified string when searching', () => {
    expect(findMatches('test', '#test')).toBe(false);
    expect(findMatches('test', '#test', '#')).toBe(true);
    expect(findMatches('test #string', 'test string', '#')).toBe(true);
    // Only first occurence of a string will be replaced - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Parameters
    expect(findMatches('test', '#test#', '#')).toBe(false);
    expect(findMatches('test #str#ing', 'test string', '#')).toBe(false);
  });

  it('should exclude characters in specified regex when searching', () => {
    expect(findMatches('test', '#t@e$s%t')).toBe(false);
    expect(findMatches('test', '#t@e$s%t', /[^a-z]/g)).toBe(true);
    expect(findMatches('t£e$s%t s$t)r*i*n&g', 'teststring', /[^a-z]/g)).toBe(true);
  });
});

describe('highlightMatches()', () => {
  it('should return the original string if no search value', () => {
    expect(highlightMatches('foo')).toEqual('foo');
    expect(highlightMatches('foo', '')).toEqual('foo');
  });

  it('should wrap matching strings in <strong class="text-gray-900"> tags', () => {
    expect(highlightMatches('Test', 'T')).toEqual(
      '<strong class="text-gray-900">T</strong>es<strong class="text-gray-900">t</strong>'
    );
    expect(highlightMatches('Test', 't')).toEqual(
      '<strong class="text-gray-900">T</strong>es<strong class="text-gray-900">t</strong>'
    );
    expect(highlightMatches('Test', 'te')).toEqual('<strong class="text-gray-900">Te</strong>st');
    expect(highlightMatches('Test', 'est')).toEqual('T<strong class="text-gray-900">est</strong>');
  });

  it('should exclude specified string from highlight', () => {
    expect(highlightMatches('test', '@test', '@')).toEqual(
      '<strong class="text-gray-900">test</strong>'
    );
  });

  it('should exclude characters in specified regex from highlight', () => {
    expect(highlightMatches('test', '@t£e$s%t', /[^a-z]/g)).toEqual(
      '<strong class="text-gray-900">test</strong>'
    );
  });
});
