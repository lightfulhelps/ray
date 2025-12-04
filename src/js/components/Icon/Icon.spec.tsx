import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import merge from 'lodash/merge';
import Icon from './Icon';

const setup = (overrides = {}) => {
  const props = merge(
    {
      name: 'analytics' as const,
      size: 30,
    },
    overrides
  );
  const utils = render(<Icon {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Icon />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { container } = setup({ className: 'custom' });

    const icon = container.querySelector('.icon');
    expect(icon).toHaveClass('icon');
    expect(icon).toHaveClass('custom');
  });

  it('should handle the name prop', () => {
    const { container, rerender, props } = setup({ name: 'analytics' });

    expect(container.querySelector('svg')).toBeInTheDocument();

    rerender(<Icon {...props} name="comment" />);

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('should handle the size prop', () => {
    const { container } = setup({ size: 20 });

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '20');
    expect(svg).toHaveAttribute('height', '20');
  });

  it('should handle the viewBox prop', () => {
    const { container } = setup({ viewBox: '0 0 16 16' });

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 16 16');
  });

  it('should handle the style prop', () => {
    const { container } = setup({ style: { marginTop: '5px' } });

    const svg = container.querySelector('svg') as SVGElement;
    expect(svg.style.fill).toBe('currentColor');
    expect(svg.style.marginTop).toBe('5px');
  });

  it('should handle the color prop', () => {
    const { container } = setup({ color: '#ffff00' });

    const svg = container.querySelector('svg') as SVGElement;
    // Color can be in hex or rgb format depending on the browser/test environment
    expect(svg.style.fill).toBeTruthy();
    expect(['#ffff00', 'rgb(255, 255, 0)']).toContain(svg.style.fill);
  });

  it('should handle the theme prop', () => {
    const { container, rerender, props } = setup();

    let icon = container.querySelector('.icon');
    expect(icon).not.toHaveClass('icon-primary');

    rerender(<Icon {...props} theme="primary" />);

    icon = container.querySelector('.icon');
    expect(icon).toHaveClass('icon-primary');
  });

  it('should not use color if theme is provided', () => {
    const { container, rerender, props } = setup({ color: 'blue' });

    let svg = container.querySelector('svg') as SVGElement;
    expect(svg.style.fill).toBe('blue');

    rerender(<Icon {...props} color="blue" theme="primary" />);

    svg = container.querySelector('svg') as SVGElement;
    expect(svg.style.fill).toBe('');
  });

  it('should not use hoverColor if theme is provided', () => {
    const { container, rerender, props } = setup({ hoverColor: 'blue' });

    const svg = container.querySelector('svg');
    fireEvent.mouseEnter(svg!);

    let svgElement = container.querySelector('svg') as SVGElement;
    expect(svgElement.style.fill).toBe('blue');

    rerender(<Icon {...props} hoverColor="blue" theme="primary" />);

    svgElement = container.querySelector('svg') as SVGElement;
    expect(svgElement.style.fill).toBe('');
  });

  it('should not update fill color on hover if hoverColor is not provided', () => {
    const { container } = setup({ color: 'red', hoverColor: null });

    const svg = container.querySelector('svg') as SVGElement;
    expect(svg.style.fill).toBe('red');

    fireEvent.mouseEnter(svg);
    expect(svg.style.fill).toBe('red');

    fireEvent.mouseLeave(svg);
    expect(svg.style.fill).toBe('red');
  });

  it('should update fill color on hover if hoverColor is provided', () => {
    const { container } = setup({ color: 'red', hoverColor: 'blue' });

    const svg = container.querySelector('svg') as SVGElement;
    expect(svg.style.fill).toBe('red');

    fireEvent.mouseEnter(svg);
    expect(svg.style.fill).toBe('blue');

    fireEvent.mouseLeave(svg);
    expect(svg.style.fill).toBe('red');
  });

  it('should pass through other props', () => {
    const { container } = setup({ id: 'test', 'data-testid': 'icon-test' });

    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('id', 'test');
    expect(svg).toHaveAttribute('data-testid', 'icon-test');
  });

  it('should have cursor pointer if onClick and not disabled', () => {
    const { container, rerender, props } = setup();

    let icon = container.querySelector('.icon');
    expect(icon).not.toHaveClass('cursor-pointer');

    rerender(<Icon {...props} onClick={jest.fn()} />);

    icon = container.querySelector('.icon');
    expect(icon).toHaveClass('cursor-pointer');

    rerender(<Icon {...props} onClick={jest.fn()} isDisabled />);

    icon = container.querySelector('.icon');
    expect(icon).not.toHaveClass('cursor-pointer');
  });

  it('should add the with-hover class if withHover is true', () => {
    const { container, rerender, props } = setup();

    let icon = container.querySelector('.icon');
    expect(icon).not.toHaveClass('with-hover');

    rerender(<Icon {...props} withHover />);

    icon = container.querySelector('.icon');
    expect(icon).toHaveClass('with-hover');

    rerender(<Icon {...props} withHover={false} />);

    icon = container.querySelector('.icon');
    expect(icon).not.toHaveClass('with-hover');
  });
});
