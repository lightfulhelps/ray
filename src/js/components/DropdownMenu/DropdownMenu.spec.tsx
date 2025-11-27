import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import merge from 'lodash/merge';
import { DropdownMenu } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Children',
      footer: 'Footer',
      isOpen: false,
    },
    overrides
  );
  const utils = render(<DropdownMenu {...props} />);

  return { ...utils, props };
};

describe('<DropdownMenu />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { container } = setup();

    expect(container.textContent).toContain('Children');
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<DropdownMenu {...props} className="custom" />);

    const menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('dropdown-menu');
    expect(menu).toHaveClass('custom');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const menu = container.firstChild;
    expect(menu).toHaveAttribute('tabIndex', '1');
    expect(menu).toHaveAttribute('id', 'test');
  });

  it('should optionally display the footer', () => {
    const { container, rerender, props } = setup({ footer: null });

    expect(container.querySelector('.dropdown-footer')).not.toBeInTheDocument();

    rerender(<DropdownMenu {...props} footer="Test" />);

    const footer = container.querySelector('.dropdown-footer');
    expect(footer).toBeInTheDocument();
    expect(footer?.textContent).toEqual('Test');
  });

  it('should handle the isOpen prop', () => {
    const { container, rerender, props } = setup();

    let menu = container.querySelector('.dropdown-menu');
    expect(menu).not.toHaveClass('show');

    rerender(<DropdownMenu {...props} isOpen />);

    menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('show');
  });

  it('should handle the onClick prop', () => {
    const onClick = jest.fn();
    const { container } = setup({ onClick });

    const menu = container.firstChild;
    fireEvent.click(menu!);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not error if onClick is not a function', () => {
    const { container } = setup({ onClick: 'foo' as any });

    const menu = container.firstChild;
    expect(() => {
      fireEvent.click(menu!);
    }).not.toThrow();
  });

  it('should handle the position prop', () => {
    const { container, rerender, props } = setup();

    let menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('dropdown-menu-left');

    rerender(<DropdownMenu {...props} position="right" />);

    menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('dropdown-menu-right');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let menu = container.firstChild as Element;
    expect(menu?.tagName.toLowerCase()).toBe('div');

    rerender(<DropdownMenu {...props} tag="a" />);

    menu = container.firstChild as Element;
    expect(menu?.tagName.toLowerCase()).toBe('a');
  });

  it('should handle the theme prop', () => {
    const { container, rerender, props } = setup();

    let menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('dropdown-menu-light');

    rerender(<DropdownMenu {...props} theme="dark" />);

    menu = container.querySelector('.dropdown-menu');
    expect(menu).toHaveClass('dropdown-menu-dark');
  });
});
