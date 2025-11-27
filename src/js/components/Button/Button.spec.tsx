import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import Button from './Button';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Click Me',
      onClick: jest.fn(),
    },
    overrides
  );
  const utils = render(<Button {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Button />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render with an icon', () => {
    const { container } = setup({ icon: 'create' });

    expect(container).toMatchSnapshot();
  });

  it('should handle the iconTheme props', () => {
    const { container } = setup({ icon: 'create', iconTheme: 'primary' });

    expect(container).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { container } = setup();

    expect(container.textContent).toContain('Click Me');
  });

  it('should handle the className prop', () => {
    const { container, rerender, props } = setup();

    rerender(<Button {...props} className="custom" />);

    const button = container.querySelector('.btn');
    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('custom');
  });

  it('should handle the isBlock prop', () => {
    const { container, rerender, props } = setup();

    expect(container.querySelector('div.d-grid')).not.toBeInTheDocument();

    rerender(<Button {...props} isBlock />);

    expect(container.querySelector('div.d-grid')).toBeInTheDocument();
  });

  it('should handle the isDisabled prop', () => {
    const { container, rerender, props } = setup();

    let button = container.querySelector('.btn');
    expect(button).not.toHaveClass('disabled');

    rerender(<Button {...props} isDisabled />);

    button = container.querySelector('.btn');
    expect(button).toHaveClass('disabled');
  });

  it('should handle the isOutline prop', () => {
    const { container, rerender, props } = setup();

    let button = container.querySelector('.btn');
    expect(button).not.toHaveClass('btn-outline-primary');
    expect(button).toHaveClass('btn-primary');

    rerender(<Button {...props} isOutline />);

    button = container.querySelector('.btn');
    expect(button).toHaveClass('btn-outline-primary');
    expect(button).not.toHaveClass('btn-primary');
  });

  it('should handle the size prop', () => {
    const { container, rerender, props } = setup();

    rerender(<Button {...props} size="lg" />);

    let button = container.querySelector('.btn');
    expect(button).toHaveClass('btn-lg');

    rerender(<Button {...props} size="sm" />);

    button = container.querySelector('.btn');
    expect(button).toHaveClass('btn-sm');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let button = container.querySelector('.btn');
    expect(button?.tagName.toLowerCase()).toBe('button');

    rerender(<Button {...props} tag="a" />);

    button = container.querySelector('.btn');
    expect(button?.tagName.toLowerCase()).toBe('a');

    rerender(<Button {...props} tag="div" />);

    button = container.querySelector('.btn');
    expect(button?.tagName.toLowerCase()).toBe('div');
  });

  it('should handle the theme prop', () => {
    const { container, rerender, props } = setup();

    let button = container.querySelector('.btn');
    expect(button).toHaveClass('btn-primary');

    rerender(<Button {...props} theme="secondary" />);

    button = container.querySelector('.btn');
    expect(button).not.toHaveClass('btn-primary');
    expect(button).toHaveClass('btn-secondary');
  });

  it('should default the type prop to button if Tag is button', () => {
    const { container, rerender, props } = setup();

    rerender(<Button {...props} tag="button" />);

    let button = container.querySelector('.btn');
    expect(button).toHaveAttribute('type', 'button');

    rerender(<Button {...props} type="submit" />);

    button = container.querySelector('.btn');
    expect(button).toHaveAttribute('type', 'submit');

    rerender(<Button {...props} tag="a" />);

    button = container.querySelector('.btn');
    expect(button).not.toHaveAttribute('type');
  });

  it('should handle the iconPosition prop', () => {
    const { container, rerender, props } = setup({ icon: 'create' });

    let button = container.querySelector('.btn');
    expect(button).toHaveClass('btn-icon-left');

    rerender(<Button {...props} icon="create" iconPosition="right" />);

    button = container.querySelector('.btn');
    expect(button).toHaveClass('btn-icon-right');

    rerender(<Button {...props} icon="create" iconPosition="left" />);

    button = container.querySelector('.btn');
    expect(button).toHaveClass('btn-icon-left');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const button = container.querySelector('.btn');
    expect(button).toHaveAttribute('tabIndex', '1');
    expect(button).toHaveAttribute('id', 'test');
  });

  describe('onClick', () => {
    it('should call onClick with data provided', async () => {
      const onClick = jest.fn();
      const user = userEvent.setup();
      setup({ onClick });

      const button = screen.getByRole('button');
      await user.click(button);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should preventDefault if isDisabled', async () => {
      const onClick = jest.fn();
      const user = userEvent.setup();
      const { rerender, props } = setup({ onClick });

      const button = screen.getByRole('button');
      await user.click(button);

      expect(onClick).toHaveBeenCalledTimes(1);

      rerender(<Button {...props} onClick={onClick} isDisabled />);

      await user.click(button);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should not error if onClick is not a function', async () => {
      const user = userEvent.setup();
      setup({ onClick: 'foo' as any });

      const button = screen.getByRole('button');
      await expect(user.click(button)).resolves.not.toThrow();
    });
  });
});
