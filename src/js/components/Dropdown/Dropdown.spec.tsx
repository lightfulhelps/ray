import React from 'react';
import merge from 'lodash/merge';
import { render } from '@testing-library/react';
import { Dropdown } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      render: jest.fn(),
    },
    overrides
  );
  const utils = render(<Dropdown {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Dropdown />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { container, rerender, props } = setup();

    rerender(<Dropdown {...props} className="custom" />);

    const dropdown = container.querySelector('.dropdown');
    expect(dropdown).toHaveClass('dropdown');
    expect(dropdown).toHaveClass('custom');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const dropdown = container.querySelector('.dropdown');
    expect(dropdown).toHaveAttribute('tabIndex', '1');
    expect(dropdown).toHaveAttribute('id', 'test');
  });
});
