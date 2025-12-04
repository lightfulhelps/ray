import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import FormInput from './FormInput';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<FormInput {...props} />);

  return { ...utils, props };
};

describe('<FormInput />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<FormInput {...props} className="custom" />);

    const input = container.firstChild;
    expect(input).toHaveClass('form-control');
    expect(input).toHaveClass('custom');
  });

  it('should handle isInvalid', () => {
    const { container, rerender, props } = setup();

    let input = container.firstChild;
    expect(input).not.toHaveClass('is-invalid');

    rerender(<FormInput {...props} isInvalid />);

    input = container.firstChild;
    expect(input).toHaveClass('is-invalid');
  });

  it('should handle isValid', () => {
    const { container, rerender, props } = setup();

    let input = container.firstChild;
    expect(input).not.toHaveClass('is-valid');

    rerender(<FormInput {...props} isValid />);

    input = container.firstChild;
    expect(input).toHaveClass('is-valid');
  });

  it('should handle size', () => {
    const { container, rerender, props } = setup();

    rerender(<FormInput {...props} size="lg" />);

    let input = container.firstChild;
    expect(input).toHaveClass('form-control-lg');

    rerender(<FormInput {...props} size="sm" />);

    input = container.firstChild;
    expect(input).toHaveClass('form-control-sm');
  });

  it('should handle type', () => {
    const { container, rerender, props } = setup({ type: 'text' });

    let input = container.firstChild;
    expect(input).toHaveClass('form-control');

    rerender(<FormInput {...props} type="file" />);

    input = container.firstChild;
    expect(input).toHaveClass('form-control-file');

    rerender(<FormInput {...props} type="radio" />);

    input = container.firstChild;
    expect(input).toHaveClass('form-check-input');

    rerender(<FormInput {...props} type="checkbox" />);

    input = container.firstChild;
    expect(input).toHaveClass('form-check-input');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const input = container.firstChild;
    expect(input).toHaveAttribute('tabIndex', '1');
    expect(input).toHaveAttribute('id', 'test');
  });
});
