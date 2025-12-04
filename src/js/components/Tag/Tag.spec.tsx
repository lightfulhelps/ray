import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import Tag from './Tag';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Social For Good',
    },
    overrides
  );
  const utils = render(<Tag {...props} />);

  return { ...utils, props };
};

describe('<Tag />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render with a remove Icon', () => {
    const { container } = setup({ onRemove: jest.fn() });

    expect(container).toMatchSnapshot();
  });

  it('should handle children', () => {
    const { container } = setup({ children: 'Test' });

    expect(container.textContent).toContain('Test');
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<Tag {...props} className="custom" />);

    const tag = container.querySelector('.tag');
    expect(tag).toHaveClass('tag');
    expect(tag).toHaveClass('custom');
  });

  it('should handle onRemove', async () => {
    const onRemove = jest.fn();
    const user = userEvent.setup();
    setup({ onRemove });

    const removeIcon = screen.getByTestId('tag-remove-icon');
    await user.click(removeIcon);

    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const tag = container.querySelector('.tag');
    expect(tag).toHaveAttribute('tabIndex', '1');
    expect(tag).toHaveAttribute('id', 'test');
  });
});
