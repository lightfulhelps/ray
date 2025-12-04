import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import DropdownToggle from './DropdownToggle';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const utils = render(<DropdownToggle {...props} />);

  return { ...utils, props };
};

describe('<DropdownToggle />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<DropdownToggle {...props} className="custom" />);

    const toggle = container.querySelector('.dropdown-toggle');
    expect(toggle).toHaveClass('dropdown-toggle');
    expect(toggle).toHaveClass('custom');
  });

  it('should handle isOpen', () => {
    const { container, rerender, props } = setup();

    let icon = container.querySelector('.icon');
    expect(icon).toBeInTheDocument();

    rerender(<DropdownToggle {...props} isOpen />);

    icon = container.querySelector('.icon');
    expect(icon).toBeInTheDocument();
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const toggle = container.querySelector('.dropdown-toggle');
    expect(toggle).toHaveAttribute('tabIndex', '1');
    expect(toggle).toHaveAttribute('id', 'test');
  });
});
