import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import Col from './Col';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: <div>Content</div>,
    },
    overrides
  );
  const utils = render(<Col {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('Col', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render children', () => {
    const { container } = setup({ children: 'Children' });

    expect(container.textContent).toBe('Children');
  });

  it('should handle the className prop', () => {
    const { container, rerender, props } = setup();

    rerender(<Col {...props} className="custom" />);

    const col = container.firstChild;
    expect(col).toHaveClass('col');
    expect(col).toHaveClass('custom');
  });

  it('should handle all recognised col widths', () => {
    const { container } = setup({ xs: 12, sm: 6, md: 4, lg: 2, xl: 1, xxl: 3 });

    const col = container.firstChild;
    expect(col).toHaveClass('col-12');
    expect(col).toHaveClass('col-sm-6');
    expect(col).toHaveClass('col-md-4');
    expect(col).toHaveClass('col-lg-2');
    expect(col).toHaveClass('col-xl-1');
    expect(col).not.toHaveClass('col-xxl-3');
  });

  it('should pass col size specific classes as Strings', () => {
    const { container } = setup({ sm: '6' });

    const col = container.firstChild;
    expect(col).toHaveClass('col-sm-6');
    expect(col).not.toHaveClass('col');
  });

  it('should pass col size specific classes as Numbers', () => {
    const { container } = setup({ sm: 6 });

    const col = container.firstChild;
    expect(col).toHaveClass('col-sm-6');
    expect(col).not.toHaveClass('col');
  });

  it('should pass col size specific classes via Objects', () => {
    const { container } = setup({ sm: { size: 6, order: 2, offset: 2 } });

    const col = container.firstChild;
    expect(col).toHaveClass('col-sm-6');
    expect(col).not.toHaveClass('col');
    expect(col).toHaveClass('order-sm-2');
    expect(col).toHaveClass('offset-sm-2');
  });

  it('should pass col size specific classes via Objects including 0', () => {
    const { container } = setup({ sm: { size: 6, order: 0, offset: 0 } });

    const col = container.firstChild;
    expect(col).toHaveClass('col-sm-6');
    expect(col).not.toHaveClass('col');
    expect(col).toHaveClass('order-sm-0');
    expect(col).toHaveClass('offset-sm-0');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let col = container.firstChild as Element;
    expect(col?.tagName.toLowerCase()).toBe('div');

    rerender(<Col {...props} tag="span" />);

    col = container.firstChild as Element;
    expect(col?.tagName.toLowerCase()).toBe('span');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const col = container.firstChild;
    expect(col).toHaveAttribute('tabIndex', '1');
    expect(col).toHaveAttribute('id', 'test');
  });
});
