import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import SearchInput from './SearchInput';

const setup = (overrides = {}) => {
  const props = merge(
    {
      onChange: jest.fn(),
      onSearch: jest.fn(),
    },
    overrides
  );
  const utils = render(<SearchInput {...props} />);

  return { ...utils, props };
};

describe('<SearchInput />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<SearchInput {...props} className="custom" />);

    const searchInput = container.querySelector('.search-input');
    expect(searchInput).toHaveClass('search-input');
    expect(searchInput).toHaveClass('custom');
  });

  it('should handle onChange', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();
    const { container } = setup({ onChange });

    const input = container.querySelector('[data-testid="search-input"]') as HTMLInputElement;
    await user.type(input, 'Test');

    expect(onChange).toHaveBeenCalled();
  });

  describe('onSearch', () => {
    it('should call onSearch on button click', async () => {
      const onSearch = jest.fn();
      const user = userEvent.setup();
      const { container } = setup({ onSearch });

      const button = container.querySelector('[data-testid="search-input-button"]');
      await user.click(button!);

      expect(onSearch).toHaveBeenCalledTimes(1);
    });

    it('should call onSearch with event on Enter keypress', () => {
      const onSearch = jest.fn();
      const { container } = setup({ onSearch });

      const input = container.querySelector('[data-testid="search-input"]');
      fireEvent.keyDown(input!, { key: 'a' });

      expect(onSearch).toHaveBeenCalledTimes(0);

      fireEvent.keyDown(input!, { key: 'Enter' });

      expect(onSearch).toHaveBeenCalledTimes(1);
    });
  });

  it('should handle placeholder', () => {
    const { container, rerender, props } = setup();

    let input = container.querySelector('[data-testid="search-input"]');
    expect(input).toHaveAttribute('placeholder', 'Search...');

    rerender(<SearchInput {...props} placeholder="Search here..." />);

    input = container.querySelector('[data-testid="search-input"]');
    expect(input).toHaveAttribute('placeholder', 'Search here...');
  });

  it('should handle value', () => {
    const { container } = setup({ value: 'Test' });

    const input = container.querySelector('[data-testid="search-input"]') as HTMLInputElement;
    expect(input.value).toEqual('Test');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const searchInput = container.querySelector('.search-input');
    expect(searchInput).toHaveAttribute('tabIndex', '1');
    expect(searchInput).toHaveAttribute('id', 'test');
  });
});
