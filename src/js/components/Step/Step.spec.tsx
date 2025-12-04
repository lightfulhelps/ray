import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import Step from './Step';

const setup = (overrides = {}) => {
  const props = merge(
    {
      activeStep: 2,
      isLast: false,
      label: 'step one',
      onClick: jest.fn(),
      thisStep: 2,
      value: 2,
    },
    overrides
  );
  const utils = render(<Step {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Step />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  describe('active state', () => {
    it('should add appropriate classes if the `activeStep` prop is equal to the `thisStep` prop', () => {
      const { container } = setup();

      expect(container.innerHTML).toContain('bg-primary text-white border-primary');
    });

    it('should render the label prop as the content if the `activeStep` prop is equal to the `thisStep` prop', () => {
      const { container, props } = setup();

      expect(container.querySelector('.icon')).not.toBeInTheDocument();
      expect(container.textContent).toContain(props.label);
    });
  });

  describe('todo state', () => {
    it('should add appropriate classes if the `thisStep` prop is greater than the `activeStep` prop', () => {
      const { container } = setup({ activeStep: 1 });

      expect(container.innerHTML).toContain('bg-gray-500 border-gray-500 text-white');
    });

    it('should render the label prop as the content if the `activeStep` prop is less than the `thisStep` prop', () => {
      const { container, props } = setup();

      expect(container.querySelector('.icon')).not.toBeInTheDocument();
      expect(container.textContent).toContain(props.label);
    });
  });

  describe('done state', () => {
    it('should add appropriate classes if the `thisStep` prop is less than the `activeStep` prop', () => {
      const { container } = setup({ thisStep: 1 });

      expect(container.innerHTML).toContain('bg-white border-primary');
    });

    it('render a tick icon if the `thisStep` prop is less than the `activeStep` prop', () => {
      const { container } = setup({ thisStep: 1 });

      expect(container.querySelector('.icon')).toBeInTheDocument();
    });
  });

  it('should call onClick on click', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    const { container } = setup({ onClick });

    const step = container.querySelector('[data-testid="stepper-step"]');
    await user.click(step!);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
