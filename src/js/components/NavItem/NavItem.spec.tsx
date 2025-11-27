import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import NavItem from './NavItem';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<NavItem {...props} />);

  return { ...utils, props };
};

describe('<NavItem />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<NavItem {...props} className="custom" />);

    const navItem = container.querySelector('.nav-item');
    expect(navItem).toHaveClass('nav-item');
    expect(navItem).toHaveClass('custom');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let navItem = container.querySelector('.nav-item');
    expect(navItem?.tagName.toLowerCase()).toBe('li');

    rerender(<NavItem {...props} tag="div" />);

    navItem = container.querySelector('.nav-item');
    expect(navItem?.tagName.toLowerCase()).toBe('div');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const navItem = container.querySelector('.nav-item');
    expect(navItem).toHaveAttribute('tabIndex', '1');
    expect(navItem).toHaveAttribute('id', 'test');
  });
});
