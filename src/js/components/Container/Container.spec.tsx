import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import Container from './Container';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: <p>Children</p>,
    },
    overrides
  );
  const utils = render(<Container {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Container />', () => {
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

    rerender(<Container {...props} className="custom" />);

    const containerEl = container.querySelector('.container');
    expect(containerEl).toHaveClass('container');
    expect(containerEl).toHaveClass('custom');
  });

  it('should handle the isFluid prop', () => {
    const { container, rerender, props } = setup();

    let containerEl = container.firstChild;
    expect(containerEl).toHaveClass('container');
    expect(containerEl).not.toHaveClass('container-fluid');

    rerender(<Container {...props} isFluid />);

    containerEl = container.firstChild;
    expect(containerEl).not.toHaveClass('container');
    expect(containerEl).toHaveClass('container-fluid');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let containerEl = container.firstChild as Element;
    expect(containerEl?.tagName.toLowerCase()).toBe('div');

    rerender(<Container {...props} tag="a" />);

    containerEl = container.firstChild as Element;
    expect(containerEl?.tagName.toLowerCase()).toBe('a');
  });
});
