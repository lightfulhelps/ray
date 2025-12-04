import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import FormFeedback from './FormFeedback';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Invalid value for...',
    },
    overrides
  );
  const utils = render(<FormFeedback {...props} />);

  return { ...utils, props };
};

describe('<FormFeedback />', () => {
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

    rerender(<FormFeedback {...props} className="custom" />);

    const feedback = container.firstChild;
    expect(feedback).toHaveClass('invalid-feedback');
    expect(feedback).toHaveClass('custom');
  });

  it('should handle isValid', () => {
    const { container, rerender, props } = setup();

    let feedback = container.firstChild;
    expect(feedback).toHaveClass('invalid-feedback');
    expect(feedback).not.toHaveClass('valid-feedback');

    rerender(<FormFeedback {...props} isValid />);

    feedback = container.firstChild;
    expect(feedback).not.toHaveClass('invalid-feedback');
    expect(feedback).toHaveClass('valid-feedback');
  });

  it('should handle tag', () => {
    const { container, rerender, props } = setup();

    let feedback = container.firstChild as Element;
    expect(feedback?.tagName.toLowerCase()).toBe('div');

    rerender(<FormFeedback {...props} tag="span" />);

    feedback = container.firstChild as Element;
    expect(feedback?.tagName.toLowerCase()).toBe('span');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const feedback = container.firstChild;
    expect(feedback).toHaveAttribute('tabIndex', '1');
    expect(feedback).toHaveAttribute('id', 'test');
  });
});
