import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import { Nav } from './Nav';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<Nav withoutWrapper {...props} />);

  return { ...utils, props };
};

describe('<Nav />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render with a wrapper', () => {
    const { container } = setup({ withoutWrapper: false });

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<Nav withoutWrapper {...props} className="custom" />);

    const nav = container.querySelector('.nav');
    expect(nav).toHaveClass('nav');
    expect(nav).toHaveClass('custom');
  });

  it('should handle isFill', () => {
    const { container, rerender, props } = setup();

    let nav = container.querySelector('.nav');
    expect(nav).not.toHaveClass('nav-fill');

    rerender(<Nav withoutWrapper {...props} isFill />);

    nav = container.querySelector('.nav');
    expect(nav).toHaveClass('nav-fill');
  });

  it('should handle isPills', () => {
    const { container, rerender, props } = setup();

    let nav = container.querySelector('.nav');
    expect(nav).not.toHaveClass('nav-pills');

    rerender(<Nav withoutWrapper {...props} isPills />);

    nav = container.querySelector('.nav');
    expect(nav).toHaveClass('nav-pills');
  });

  it('should handle isTabs', () => {
    const { container, rerender, props } = setup();

    let nav = container.querySelector('.nav');
    expect(nav).not.toHaveClass('nav-tabs');

    rerender(<Nav withoutWrapper {...props} isTabs />);

    nav = container.querySelector('.nav');
    expect(nav).toHaveClass('nav-tabs');
  });

  it('should handle tag', () => {
    const { container, rerender, props } = setup();

    let nav = container.querySelector('.nav');
    expect(nav?.tagName.toLowerCase()).toBe('ul');

    rerender(<Nav withoutWrapper {...props} tag="nav" />);

    nav = container.querySelector('.nav');
    expect(nav?.tagName.toLowerCase()).toBe('nav');

    rerender(<Nav withoutWrapper {...props} tag="div" />);

    nav = container.querySelector('.nav');
    expect(nav?.tagName.toLowerCase()).toBe('div');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const nav = container.querySelector('.nav');
    expect(nav).toHaveAttribute('tabIndex', '1');
    expect(nav).toHaveAttribute('id', 'test');
  });
});
