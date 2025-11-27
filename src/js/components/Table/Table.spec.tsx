import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import Table from './Table';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<Table {...props} />);

  return { ...utils, props };
};

describe('<Table />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<Table {...props} className="custom" />);

    const table = container.querySelector('.table');
    expect(table).toHaveClass('table');
    expect(table).toHaveClass('custom');
  });

  it('should handle isBordered', () => {
    const { container, rerender, props } = setup();

    let table = container.querySelector('.table');
    expect(table).not.toHaveClass('table-bordered');

    rerender(<Table {...props} isBordered />);

    table = container.querySelector('.table');
    expect(table).toHaveClass('table-bordered');
  });

  it('should handle isBorderless', () => {
    const { container, rerender, props } = setup();

    let table = container.querySelector('.table');
    expect(table).not.toHaveClass('table-borderless');

    rerender(<Table {...props} isBorderless />);

    table = container.querySelector('.table');
    expect(table).toHaveClass('table-borderless');
  });

  it('should handle isHoverable', () => {
    const { container, rerender, props } = setup();

    let table = container.querySelector('.table');
    expect(table).not.toHaveClass('table-hover');

    rerender(<Table {...props} isHoverable />);

    table = container.querySelector('.table');
    expect(table).toHaveClass('table-hover');
  });

  it('should handle isResponsive', () => {
    const { container, rerender, props } = setup();

    let table = container.querySelector('.table');
    expect(table).not.toHaveClass('table-responsive');

    rerender(<Table {...props} isResponsive />);

    table = container.querySelector('.table');
    expect(table).toHaveClass('table-responsive');
  });

  it('should handle isStriped', () => {
    const { container, rerender, props } = setup();

    let table = container.querySelector('.table');
    expect(table).not.toHaveClass('table-striped');

    rerender(<Table {...props} isStriped />);

    table = container.querySelector('.table');
    expect(table).toHaveClass('table-striped');
  });

  it('should handle size', () => {
    const { container, rerender, props } = setup();

    let table = container.querySelector('.table');
    expect(table).toHaveClass('table');
    expect(table).not.toHaveClass('table-sm');
    expect(table).not.toHaveClass('table-lg');

    rerender(<Table {...props} size="sm" />);

    table = container.querySelector('.table');
    expect(table).toHaveClass('table');
    expect(table).toHaveClass('table-sm');
    expect(table).not.toHaveClass('table-lg');

    rerender(<Table {...props} size="lg" />);

    table = container.querySelector('.table');
    expect(table).toHaveClass('table');
    expect(table).not.toHaveClass('table-sm');
    expect(table).toHaveClass('table-lg');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const table = container.querySelector('.table');
    expect(table).toHaveAttribute('tabIndex', '1');
    expect(table).toHaveAttribute('id', 'test');
  });
});
