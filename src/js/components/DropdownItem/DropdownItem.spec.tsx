import React from 'react';
import merge from 'lodash/merge';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DropdownItem } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Test',
      onClick: jest.fn(),
    },
    overrides
  );
  const utils = render(<DropdownItem {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<DropdownItem />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { container } = setup();

    expect(container.textContent).toEqual('Test');
  });

  it('should handle the className prop', () => {
    const { container, rerender, props } = setup();

    rerender(<DropdownItem {...props} className="custom" />);

    const item = container.querySelector('.dropdown-item');
    expect(item).toHaveClass('dropdown-item');
    expect(item).toHaveClass('custom');
  });

  it('should handle the isActive prop', () => {
    const { container } = setup({ isActive: true });

    const item = container.querySelector('.dropdown-item');
    expect(item).toHaveClass('dropdown-item');
    expect(item).toHaveClass('active');
  });

  it('should handle the isDisabled prop', () => {
    const { container } = setup({ isDisabled: true });

    const item = container.querySelector('.dropdown-item');
    expect(item).toHaveClass('dropdown-item');
    expect(item).toHaveClass('disabled');
  });

  it('should handle the isHeader prop', () => {
    const { container } = setup({ isHeader: true });

    expect(container.querySelector('.dropdown-item')).not.toBeInTheDocument();
    expect(container.querySelector('.dropdown-header')).toBeInTheDocument();
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let item = container.firstChild as Element;
    expect(item?.tagName.toLowerCase()).toBe('div');

    rerender(<DropdownItem {...props} tag="a" />);

    item = container.firstChild as Element;
    expect(item?.tagName.toLowerCase()).toBe('a');
  });

  describe('onClick', () => {
    it('should call onClick with data provided', async () => {
      const onClick = jest.fn();
      const user = userEvent.setup();
      setup({ onClick });

      const item = screen.getByText('Test');
      await user.click(item);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should preventDefault if isDisabled', async () => {
      const onClick = jest.fn();
      const user = userEvent.setup();
      const { rerender, props } = setup({ onClick });

      const item = screen.getByText('Test');
      await user.click(item);

      expect(onClick).toHaveBeenCalledTimes(1);

      rerender(<DropdownItem {...props} onClick={onClick} isDisabled />);

      await user.click(item);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not error if onClick is not a function', async () => {
      const user = userEvent.setup();
      setup({ onClick: 'foo' as any });

      const item = screen.getByText('Test');
      await expect(user.click(item)).resolves.not.toThrow();
    });
  });
});
