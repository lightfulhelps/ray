import React from 'react';
import { render, screen } from '@testing-library/react';
import merge from 'lodash/merge';
import Progress from './ProgressAlt';

const setup = (overrides = {}) => {
  const props = merge({ value: 0 }, overrides);
  const utils = render(<Progress {...props} />);

  return { ...utils, props };
};

describe('<ProgressAlt />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the theme prop', () => {
    const { rerender, props } = setup();

    let progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveClass('bg-primary');

    rerender(<Progress {...props} theme="secondary" />);

    progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveClass('bg-secondary');
  });

  it('should handle the value prop', () => {
    const { rerender, props } = setup();

    let progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle({ width: '0%' });

    rerender(<Progress {...props} value={30} />);

    progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle({ width: '30%' });
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const progress = container.firstChild;
    expect(progress).toHaveAttribute('tabIndex', '1');
    expect(progress).toHaveAttribute('id', 'test');
  });
});
