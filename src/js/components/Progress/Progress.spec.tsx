import React from 'react';
import { render, screen } from '@testing-library/react';
import merge from 'lodash/merge';
import Progress from './Progress';

const setup = (overrides = {}) => {
  const props = merge({ value: 0 }, overrides);
  const utils = render(<Progress {...props} />);

  return { ...utils, props };
};

describe('<Progress />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { rerender, props } = setup();

    rerender(<Progress {...props} className="custom" />);

    const progress = screen.getByTestId('progress');
    expect(progress).toHaveClass('progress');
    expect(progress).toHaveClass('custom');
  });

  it('should handle the isAnimated prop', () => {
    const { rerender, props } = setup();

    let progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).not.toHaveClass('progress-bar-animated');

    rerender(<Progress {...props} isAnimated />);

    progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveClass('progress-bar-animated');
  });

  it('should handle the isStriped prop', () => {
    const { rerender, props } = setup();

    let progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).not.toHaveClass('progress-bar-striped');

    rerender(<Progress {...props} isStriped />);

    progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveClass('progress-bar-striped');
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

  it('should handle the small size prop', () => {
    const { rerender, props } = setup();

    let progress = screen.getByTestId('progress');
    expect(progress).toHaveStyle({ height: '1.25rem', fontSize: '0.75rem' });

    rerender(<Progress {...props} size="sm" />);

    progress = screen.getByTestId('progress');
    expect(progress).toHaveStyle({ height: '0.5rem', fontSize: '0.5rem' });
  });
  it('should handle the large size prop', () => {
    const { rerender, props } = setup();

    let progress = screen.getByTestId('progress');
    expect(progress).toHaveStyle({ height: '1.25rem', fontSize: '0.75rem' });

    rerender(<Progress {...props} size="lg" />);

    progress = screen.getByTestId('progress');
    expect(progress).toHaveStyle({ height: '1.5rem', fontSize: '1rem' });
  });

  it('should change to bg-danger when value is greater than 100', () => {
    const { rerender, props } = setup({ value: 25 });

    let progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).not.toHaveClass('bg-danger');

    rerender(<Progress {...props} value={101} />);

    progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveClass('bg-danger');
  });

  it('should pass through other props', () => {
    setup({ tabIndex: 1, id: 'test' });

    const progress = screen.getByTestId('progress');
    expect(progress).toHaveAttribute('tabIndex', '1');
    expect(progress).toHaveAttribute('id', 'test');
  });
});
