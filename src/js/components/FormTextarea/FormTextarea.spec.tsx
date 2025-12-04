import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import FormTextarea from './FormTextarea';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<FormTextarea {...props} />);

  return { ...utils, props };
};

describe('<FormTextarea />', () => {
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

    rerender(<FormTextarea {...props} className="custom" />);

    const textarea = container.firstChild;
    expect(textarea).toHaveClass('form-control');
    expect(textarea).toHaveClass('custom');
  });

  it('should handle isInvalid', () => {
    const { container, rerender, props } = setup();

    let textarea = container.firstChild;
    expect(textarea).not.toHaveClass('is-invalid');

    rerender(<FormTextarea {...props} isInvalid />);

    textarea = container.firstChild;
    expect(textarea).toHaveClass('is-invalid');
  });

  it('should handle isValid', () => {
    const { container, rerender, props } = setup();

    let textarea = container.firstChild;
    expect(textarea).not.toHaveClass('is-valid');

    rerender(<FormTextarea {...props} isValid />);

    textarea = container.firstChild;
    expect(textarea).toHaveClass('is-valid');
  });

  it('should handle size', () => {
    const { container, rerender, props } = setup();

    rerender(<FormTextarea {...props} size="lg" />);

    let textarea = container.firstChild;
    expect(textarea).toHaveClass('form-control-lg');

    rerender(<FormTextarea {...props} size="sm" />);

    textarea = container.firstChild;
    expect(textarea).toHaveClass('form-control-sm');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const textarea = container.firstChild;
    expect(textarea).toHaveAttribute('tabIndex', '1');
    expect(textarea).toHaveAttribute('id', 'test');
  });
});
