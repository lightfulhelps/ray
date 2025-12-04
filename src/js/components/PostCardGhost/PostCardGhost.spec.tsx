import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import PostCardGhost from './PostCardGhost';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<PostCardGhost {...props} />);

  return { ...utils, props };
};

describe('<PostCardGhost />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<PostCardGhost {...props} className="custom" />);

    const ghost = container.querySelector('.post-card-ghost');
    expect(ghost).toHaveClass('post-card-ghost');
    expect(ghost).toHaveClass('custom');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const ghost = container.querySelector('.post-card-ghost');
    expect(ghost).toHaveAttribute('tabIndex', '1');
    expect(ghost).toHaveAttribute('id', 'test');
  });
});
