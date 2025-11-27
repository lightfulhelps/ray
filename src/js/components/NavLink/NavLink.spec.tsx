import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import NavLink from './NavLink';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<NavLink {...props} />);

  return { ...utils, props };
};

describe('<NavLink />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<NavLink {...props} className="custom" />);

    const navLink = container.querySelector('.nav-link');
    expect(navLink).toHaveClass('nav-link');
    expect(navLink).toHaveClass('custom');
  });

  it('should handle isActive', () => {
    const { container, rerender, props } = setup();

    let navLink = container.querySelector('.nav-link');
    expect(navLink).not.toHaveClass('active');

    rerender(<NavLink {...props} isActive />);

    navLink = container.querySelector('.nav-link');
    expect(navLink).toHaveClass('active');
  });

  it('should handle isDisabled', () => {
    const { container, rerender, props } = setup();

    let navLink = container.querySelector('.nav-link');
    expect(navLink).not.toHaveClass('disabled');

    rerender(<NavLink {...props} isDisabled />);

    navLink = container.querySelector('.nav-link');
    expect(navLink).toHaveClass('disabled');
  });

  it('should handle the theme prop', () => {
    const { container, rerender, props } = setup();

    let navLink = container.querySelector('.nav-link');
    expect(navLink).toHaveClass('nav-link-primary');

    rerender(<NavLink {...props} theme="secondary" />);

    navLink = container.querySelector('.nav-link');
    expect(navLink).not.toHaveClass('nav-link-primary');
    expect(navLink).toHaveClass('nav-link-secondary');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let navLink = container.querySelector('.nav-link');
    expect(navLink?.tagName.toLowerCase()).toBe('a');

    rerender(<NavLink {...props} tag="div" />);

    navLink = container.querySelector('.nav-link');
    expect(navLink?.tagName.toLowerCase()).toBe('div');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const navLink = container.querySelector('.nav-link');
    expect(navLink).toHaveAttribute('tabIndex', '1');
    expect(navLink).toHaveAttribute('id', 'test');
  });
});
