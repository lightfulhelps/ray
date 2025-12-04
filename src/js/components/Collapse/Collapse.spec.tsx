import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import Collapse from './Collapse';

const setup = (overrides = {}) => {
  const props = merge(
    {
      label: 'Click me',
      children: '',
    },
    overrides
  );
  const utils = render(<Collapse {...props} />);

  return { ...utils, props };
};

describe('<Collapse />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<Collapse {...props} className="custom" />);

    const collapse = container.firstChild;
    expect(collapse).toHaveClass('custom');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const collapse = container.firstChild;
    expect(collapse).toHaveAttribute('tabIndex', '1');
    expect(collapse).toHaveAttribute('id', 'test');
  });

  it('should toggle display of children', async () => {
    const user = userEvent.setup();
    const { container } = setup({ children: <div>My test content</div> });

    expect(container.querySelector('[data-testid="collapse-children"]')).not.toBeInTheDocument();

    const toggle = container.querySelector('[data-testid="collapse-toggle"]');
    await user.click(toggle!);

    expect(container.querySelector('[data-testid="collapse-children"]')).toBeInTheDocument();

    await user.click(toggle!);

    expect(container.querySelector('[data-testid="collapse-children"]')).not.toBeInTheDocument();
  });

  it('should toggle icon', async () => {
    const user = userEvent.setup();
    const { container } = setup();

    const toggle = container.querySelector('[data-testid="collapse-toggle"]');
    let icon = container.querySelector('.icon');
    expect(icon).toBeInTheDocument();

    await user.click(toggle!);

    icon = container.querySelector('.icon');
    expect(icon).toBeInTheDocument();

    await user.click(toggle!);

    icon = container.querySelector('.icon');
    expect(icon).toBeInTheDocument();
  });

  it('should be open if defaultOpen is true', () => {
    const { container } = setup({ defaultOpen: true });

    expect(container.querySelector('[data-testid="collapse-children"]')).toBeInTheDocument();
  });
});
