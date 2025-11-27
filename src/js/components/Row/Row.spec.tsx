import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import Row from './Row';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: <p>Children</p>,
    },
    overrides
  );
  const utils = render(<Row {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Row />', () => {
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

    rerender(<Row {...props} className="custom" />);

    const row = container.querySelector('.row');
    expect(row).toHaveClass('row');
    expect(row).toHaveClass('custom');
  });

  it('should handle the noGutter prop', () => {
    const { container, rerender, props } = setup();

    let row = container.querySelector('.row');
    expect(row).not.toHaveClass('no-gutters');

    rerender(<Row {...props} noGutters />);

    row = container.querySelector('.row');
    expect(row).toHaveClass('no-gutters');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let row = container.querySelector('.row');
    expect(row?.tagName.toLowerCase()).toBe('div');

    rerender(<Row {...props} tag="a" />);

    row = container.querySelector('.row');
    expect(row?.tagName.toLowerCase()).toBe('a');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const row = container.querySelector('.row');
    expect(row).toHaveAttribute('tabIndex', '1');
    expect(row).toHaveAttribute('id', 'test');
  });
});
