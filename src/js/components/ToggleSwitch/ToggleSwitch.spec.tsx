import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import ToggleSwitch from './ToggleSwitch';

const setup = (overrides = {}) => {
  const props = merge(overrides);
  const utils = render(<ToggleSwitch {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<ToggleSwitch />', () => {
  it('should render', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it('should render label', () => {
    const { container } = setup({ label: 'this is a label' });
    expect(container).toMatchSnapshot();
  });

  it('should render label on the right side if labelAlign prop is set', () => {
    const { container, rerender, props } = setup({ label: 'this is a label', labelAlign: 'left' });
    let toggleSwitch = container.querySelector('.form-check');
    expect(toggleSwitch).toHaveClass('flex-row-reverse');

    rerender(<ToggleSwitch {...props} label="this is a label" labelAlign="top" />);
    toggleSwitch = container.querySelector('.form-check');
    expect(toggleSwitch).toHaveClass('flex-column-reverse');

    rerender(<ToggleSwitch {...props} label="this is a label" labelAlign="bottom" />);
    toggleSwitch = container.querySelector('.form-check');
    expect(toggleSwitch).toHaveClass('flex-column');

    rerender(<ToggleSwitch {...props} label="this is a label" labelAlign="" />);
    toggleSwitch = container.querySelector('.form-check');
    expect(toggleSwitch).not.toHaveClass('flex-column-reverse');
    expect(toggleSwitch).not.toHaveClass('flex-row-reverse');
    expect(toggleSwitch).not.toHaveClass('flex-column');
  });

  it('should set disabled attribute to true if isDisabled prop is specified', () => {
    const { container } = setup({ isDisabled: true });
    const input = container.querySelector('input');
    expect(input).toBeDisabled();
  });

  it('should handle onClick events', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    const { container } = setup({ onClick });

    const input = container.querySelector('input');
    await user.click(input!);
    expect(onClick).toHaveBeenCalled();
  });

  it('should not call onClick if isDisabled', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    const { container } = setup({ onClick, isDisabled: true });

    const input = container.querySelector('input');
    await user.click(input!);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should handle onChange events', async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();
    const { container } = setup({ onChange });

    const input = container.querySelector('input');
    await user.click(input!);
    expect(onChange).toHaveBeenCalled();
  });
});
