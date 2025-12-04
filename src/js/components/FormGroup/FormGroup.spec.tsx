import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import FormGroup from './FormGroup';

const setup = (overrides = {}) => {
  const props = merge({ children: 'Default' }, overrides);
  const utils = render(<FormGroup {...props} />);

  return { ...utils, props };
};

describe('<FormGroup />', () => {
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

    rerender(<FormGroup {...props} className="custom" />);

    const group = container.firstChild;
    expect(group).toHaveClass('form-group');
    expect(group).toHaveClass('custom');
  });

  it('should handle isCheck', () => {
    const { container, rerender, props } = setup();

    let group = container.firstChild;
    expect(group).toHaveClass('form-group');
    expect(group).not.toHaveClass('form-check');

    rerender(<FormGroup {...props} isCheck />);

    group = container.firstChild;
    expect(group).not.toHaveClass('form-group');
    expect(group).toHaveClass('form-check');
  });

  it('should handle tag', () => {
    const { container, rerender, props } = setup();

    let group = container.firstChild as Element;
    expect(group?.tagName.toLowerCase()).toBe('div');

    rerender(<FormGroup {...props} tag="li" />);

    group = container.firstChild as Element;
    expect(group?.tagName.toLowerCase()).toBe('li');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const group = container.firstChild;
    expect(group).toHaveAttribute('tabIndex', '1');
    expect(group).toHaveAttribute('id', 'test');
  });
});
