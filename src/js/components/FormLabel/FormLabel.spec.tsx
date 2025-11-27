import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import FormLabel from './FormLabel';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Email',
    },
    overrides
  );
  const utils = render(<FormLabel {...props} />);

  return { ...utils, props };
};

describe('<FormLabel />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle children', () => {
    const { container } = setup({ children: 'Children' });

    expect(container.textContent).toBe('Children');
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<FormLabel {...props} className="custom" />);

    const label = container.querySelector('label');
    expect(label).toHaveClass('form-label');
    expect(label).toHaveClass('custom');
  });

  it('should handle isCheck', () => {
    const { container, rerender, props } = setup();

    let label = container.querySelector('label');
    expect(label).toHaveClass('form-label');
    expect(label).not.toHaveClass('form-check-label');

    rerender(<FormLabel {...props} isCheck />);

    label = container.querySelector('label');
    expect(label).not.toHaveClass('form-label');
    expect(label).toHaveClass('form-check-label');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const label = container.querySelector('label');
    expect(label).toHaveAttribute('tabIndex', '1');
    expect(label).toHaveAttribute('id', 'test');
  });
});
