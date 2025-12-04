import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import Badge from './Badge';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Badge',
    },
    overrides
  );
  const utils = render(<Badge {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Badge />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { container } = setup();

    expect(container.textContent).toEqual('Badge');
  });

  it('should handle the className prop', () => {
    const { container, rerender, props } = setup();

    let badge = container.querySelector('.badge');
    expect(badge).toHaveClass('badge');

    rerender(<Badge {...props} className="custom" />);

    badge = container.querySelector('.badge');
    expect(badge).toHaveClass('badge');
    expect(badge).toHaveClass('custom');
  });

  it('should handle the color prop', () => {
    const { container, rerender, props } = setup();

    rerender(<Badge {...props} color="#ff0000" />);

    const badge = container.querySelector('.badge');
    expect(badge).toHaveStyle({ backgroundColor: '#ff0000' });
  });

  it('should handle the isPill prop', () => {
    const { container, rerender, props } = setup();

    let badge = container.querySelector('.badge');
    expect(badge).not.toHaveClass('rounded-pill');

    rerender(<Badge {...props} isPill />);

    badge = container.querySelector('.badge');
    expect(badge).toHaveClass('rounded-pill');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let badge = container.querySelector('.badge');
    expect(badge?.tagName.toLowerCase()).toBe('div');

    rerender(<Badge {...props} tag="a" />);

    badge = container.querySelector('.badge');
    expect(badge?.tagName.toLowerCase()).toBe('a');

    rerender(<Badge {...props} tag="span" />);

    badge = container.querySelector('.badge');
    expect(badge?.tagName.toLowerCase()).toBe('span');
  });

  it('should handle the theme prop', () => {
    const { container, rerender, props } = setup();

    let badge = container.querySelector('.badge');
    expect(badge).toHaveClass('bg-primary');

    rerender(<Badge {...props} theme="secondary" />);

    badge = container.querySelector('.badge');
    expect(badge).not.toHaveClass('bg-primary');
    expect(badge).toHaveClass('bg-secondary');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const badge = container.querySelector('.badge');
    expect(badge).toHaveAttribute('tabIndex', '1');
    expect(badge).toHaveAttribute('id', 'test');
  });
});
