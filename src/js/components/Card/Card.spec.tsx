import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import Card from './Card';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: <p>Children</p>,
    },
    overrides
  );
  const utils = render(<Card {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Card />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { container } = setup();

    expect(container.textContent).toEqual('Children');
  });

  it('should handle the className prop', () => {
    const { container, rerender, props } = setup();

    rerender(<Card {...props} className="custom" />);

    const card = container.querySelector('.card');
    expect(card).toHaveClass('card');
    expect(card).toHaveClass('custom');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let card = container.querySelector('.card');
    expect(card?.tagName.toLowerCase()).toBe('div');

    rerender(<Card {...props} tag="a" />);

    card = container.querySelector('.card');
    expect(card?.tagName.toLowerCase()).toBe('a');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const card = container.querySelector('.card');
    expect(card).toHaveAttribute('tabIndex', '1');
    expect(card).toHaveAttribute('id', 'test');
  });
});
