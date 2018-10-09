import React from 'react';
import { shallow } from 'enzyme';
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
    },
    overrides
  );
  const wrapper = shallow(<SearchSuggest {...props} />);

  return { wrapper, props };
};

describe('<SearchSuggest />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('search-suggest')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle isLoading', () => {
    const { wrapper } = setup({ isLoading: true });

    expect(wrapper.find('[data-test-id="search-suggest-loading"]')).toHaveLength(1);

    wrapper.setProps({ isLoading: false });

    expect(wrapper.find('[data-test-id="search-suggest-loading"]')).toHaveLength(0);
  });

  it('should handle isOpen', () => {
    const { wrapper } = setup({ isOpen: true });

    expect(wrapper.prop('isOpen')).toBe(true);

    wrapper.setProps({ isOpen: false });

    expect(wrapper.prop('isOpen')).toBe(false);
  });

  it('should handle limit', () => {
    const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
    const { wrapper } = setup({ options, search: '' });

    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(10);

    wrapper.setProps({ limit: 5 });

    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(5);

    wrapper.setProps({ limit: null });

    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(10);
  });

  it('should handle onClear', () => {
    const { wrapper, props } = setup();

    wrapper.find('[data-test-id="search-suggest-clear"]').simulate('click');

    expect(props.onClear).toHaveBeenCalledTimes(1);
  });

  it('should handle onClick', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should handle onRemove', () => {
    const { wrapper, props } = setup();
    const stopPropagation = jest.fn();

    wrapper
      .find('[data-test-id="search-suggest-item"]')
      .at(0)
      .find('[data-test-id="search-suggest-remove"]')
      .simulate('click', { stopPropagation });
    wrapper
      .find('[data-test-id="search-suggest-item"]')
      .at(1)
      .find('[data-test-id="search-suggest-remove"]')
      .simulate('click', { stopPropagation });

    expect(stopPropagation).toHaveBeenCalledTimes(2);
    expect(props.onRemove).toHaveBeenCalledTimes(2);
    expect(props.onRemove).toHaveBeenNthCalledWith(1, 0);
    expect(props.onRemove).toHaveBeenNthCalledWith(2, 1);
  });

  it('should handle onSelect', () => {
    const options = ['A', 'B', 'C'];
    const { wrapper, props } = setup({ options, search: '' });

    wrapper
      .find('[data-test-id="search-suggest-item"]')
      .at(0)
      .simulate('click');

    wrapper
      .find('[data-test-id="search-suggest-item"]')
      .at(1)
      .simulate('click');

    expect(props.onSelect).toHaveBeenCalledTimes(2);
    expect(props.onSelect).toHaveBeenNthCalledWith(1, options[0], 0);
    expect(props.onSelect).toHaveBeenNthCalledWith(2, options[1], 1);
  });

  it('should handle options', () => {
    const options = ['A', 'b', 'c'];
    const { wrapper } = setup();

    wrapper.setProps({ options, search: '' });

    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(3);
  });

  it('should handle search', () => {
    const options = ['A', 'a', 'B', 'C'];
    const { wrapper } = setup({ options, search: 'a' });

    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(2);

    wrapper.setProps({ search: 'b' });

    expect(wrapper.find('[data-test-id="search-suggest-item"]')).toHaveLength(1);
  });

  it('should handle title', () => {
    const { wrapper } = setup({ title: '' });

    expect(wrapper.find('[data-test-id="search-suggest-header"]')).toHaveLength(0);

    wrapper.setProps({ title: 'Test' });

    expect(wrapper.find('[data-test-id="search-suggest-header"]')).toHaveLength(1);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
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
});
