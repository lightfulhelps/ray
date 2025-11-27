import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import FormSelect from './FormSelect';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<FormSelect {...props} />);

  return { ...utils, props };
};

describe('<FormSelect />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<FormSelect {...props} className="custom" />);
    const select = container.firstChild;
    expect(select).toHaveClass('custom');
  });

  it('should handle isCreatable', () => {
    const { container, rerender, props } = setup();

    expect(container.querySelector('.form-select')).toBeInTheDocument();

    rerender(<FormSelect {...props} isCreatable />);

    expect(container.querySelector('.form-select')).toBeInTheDocument();
  });

  it('should handle isInvalid', () => {
    const { container, rerender, props } = setup();

    let select = container.firstChild;
    expect(select).not.toHaveClass('is-invalid');

    rerender(<FormSelect {...props} isInvalid />);

    select = container.firstChild;
    expect(select).toHaveClass('is-invalid');
  });

  it('should handle isValid', () => {
    const { container, rerender, props } = setup();

    let select = container.firstChild;
    expect(select).not.toHaveClass('is-valid');

    rerender(<FormSelect {...props} isValid />);

    select = container.firstChild;
    expect(select).toHaveClass('is-valid');
  });

  it('should handle size', () => {
    const { container, rerender, props } = setup();

    rerender(<FormSelect {...props} size="sm" />);

    let select = container.firstChild;
    expect(select).toHaveClass('form-select-sm');

    rerender(<FormSelect {...props} size="lg" />);

    select = container.firstChild;
    expect(select).toHaveClass('form-select-lg');
  });

  it('should pass through other props', () => {
    const { container } = setup({ id: 'test' });

    const select = container.firstChild;
    expect(select).toHaveAttribute('id', 'test');
  });
});
