import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import FormPasswordInput from './FormPasswordInput';

const setup = (overrides = {}) => {
  const props = merge(
    {
      onBlur: jest.fn(),
      onChange: jest.fn(),
      value: 'Some value',
    },
    overrides
  );
  const renderResult = render(<FormPasswordInput {...props} />);

  return { ...renderResult, props };
};

describe('<FormPasswordInput />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container } = setup({ className: 'custom' });

    const input = container.querySelector('[data-testid="password-input"]');

    expect(input).toHaveClass('form-control');
    expect(input).toHaveClass('custom');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, 'data-test': 'test', className: 'custom' });

    const input = container.querySelector('[data-testid="password-input"]');
    expect(input).toHaveAttribute('tabIndex', '1');
    expect(input).toHaveAttribute('data-test', 'test');
  });

  it('defaults name parameter to password', () => {
    const { container } = setup();

    const input = container.querySelector('[data-testid="password-input"]');
    expect(input).toHaveAttribute('name', 'password');
  });

  describe('input pass throughs', () => {
    it('passes through placeholder', () => {
      const placeholder = 'Some placeholder';

      const { container } = setup({ placeholder });

      const input = container.querySelector('[data-testid="password-input"]');
      expect(input).toHaveAttribute('placeholder', placeholder);
    });

    it('passes through value', () => {
      const value = 'Some value';

      const { container } = setup({ value });

      const input = container.querySelector('[data-testid="password-input"]') as HTMLInputElement;
      expect(input.value).toEqual(value);
    });

    it('passes through onChange', async () => {
      const { container, props } = setup();

      const input = container.querySelector('[data-testid="password-input"]');
      await userEvent.type(input, 'a');

      expect(props.onChange).toHaveBeenCalled();
    });

    it('passes through onBlur', () => {
      const { container, props } = setup();

      const input = container.querySelector('[data-testid="password-input"]') as HTMLInputElement;
      fireEvent.blur(input);

      expect(props.onBlur).toHaveBeenCalledTimes(1);
    });

    it('passes through name', () => {
      const name = 'secretPassword';
      const { container } = setup({ name });

      const input = container.querySelector('[data-testid="password-input"]');
      expect(input).toHaveAttribute('name', name);
    });

    it('passes through id', () => {
      const id = 'secretPassword';
      const { container } = setup({ id });

      const input = container.querySelector('[data-testid="password-input"]');
      expect(input).toHaveAttribute('id', id);
    });
  });

  describe('end to end test helpers', () => {
    it('has a data-testid for the input', () => {
      const { container } = setup();

      const input = container.querySelector('[data-testid="password-input"]');
      expect(input).toBeInTheDocument();
    });

    it('has a data-testid for the button', () => {
      const { container } = setup();

      const button = container.querySelector('[data-testid="password-input-button"]');
      expect(button).toBeInTheDocument();
    });
  });

  describe('show password toggle', () => {
    it('hides password by default', () => {
      const { container } = setup();

      const input = container.querySelector('[data-testid="password-input"]');
      expect(input).toHaveAttribute('type', 'password');
    });

    it('shows password when state is set', async () => {
      const { container } = setup();

      const button = container.querySelector('[data-testid="password-input-button"]');
      await userEvent.click(button);

      const input = container.querySelector('[data-testid="password-input"]');
      expect(input).toHaveAttribute('type', 'text');
    });

    describe('icon toggle', () => {
      it('has button for toggle', () => {
        const { container } = setup();

        const button = container.querySelector('[data-testid="password-input-button"]');
        expect(button).toBeInTheDocument();
      });

      it('has a button that changes state when clicked', async () => {
        const { container } = setup();

        const button = container.querySelector('[data-testid="password-input-button"]');
        const input = container.querySelector('[data-testid="password-input"]');

        expect(input).toHaveAttribute('type', 'password');
        await userEvent.click(button);
        expect(input).toHaveAttribute('type', 'text');
      });

      it('has a button that says Show when password is hidden', () => {
        const { container } = setup();

        const span = container.querySelector('.form-password-input__toggle-password-text');
        expect(span).toHaveTextContent('Show');
      });

      it('has a button that says Hide when password is shown', async () => {
        const { container } = setup();

        const button = container.querySelector('[data-testid="password-input-button"]');
        await userEvent.click(button);

        const span = container.querySelector('.form-password-input__toggle-password-text');
        expect(span).toHaveTextContent('Hide');
      });

      it('has a preview icon when password is hidden', () => {
        const { container } = setup();

        const input = container.querySelector('[data-testid="password-input"]');
        expect(input).toHaveAttribute('type', 'password');

        const button = container.querySelector('[data-testid="password-input-button"]');
        expect(button.querySelector('.icon')).toBeInTheDocument();
      });

      it('has a preview-hide icon when password is shown', async () => {
        const { container } = setup();

        const button = container.querySelector('[data-testid="password-input-button"]');
        await userEvent.click(button);

        expect(button.querySelector('.icon')).toBeInTheDocument();
      });
    });
  });
});
