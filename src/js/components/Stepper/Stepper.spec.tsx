import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import Stepper from './Stepper';

const setup = (overrides = {}) => {
  const props = merge(
    {
      steps: [
        { label: 'step one', value: 1, onClick: jest.fn() },
        { label: 'step two', value: 2, onClick: jest.fn() },
        { label: 'step three', value: 3 },
      ],
      activeStep: 1,
    },
    overrides
  );
  const utils = render(<Stepper {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<Stepper />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should return null if the steps prop is not an array', () => {
    const { container } = setup({ steps: 'Suuurrreee, I am an array. DW' as any });

    expect(container.firstChild).toBeNull();
  });

  it('should render if there is no activeStep prop', () => {
    const { container } = setup({ activeStep: null });

    expect(container.firstChild).not.toBeNull();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<Stepper {...props} className="custom" />);

    const stepper = container.querySelector('.stepper');
    expect(stepper).toHaveClass('stepper');
    expect(stepper).toHaveClass('custom');
  });

  it('`isLast` prop should eveluate to false for all but the last step', () => {
    const { container } = setup();
    const steps = container.querySelectorAll('[data-testid="stepper-step"]');

    expect(steps).toHaveLength(3);
  });

  it('should pass steps object values to Step component via props', () => {
    const { container, props } = setup();
    const renderedSteps = container.querySelectorAll('[data-testid="stepper-step"]');

    expect(renderedSteps).toHaveLength(props.steps.length);
    props.steps.forEach((step, index) => {
      expect(renderedSteps[index].textContent).toContain(step.label);
    });
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const stepper = container.querySelector('.stepper');
    expect(stepper).toHaveAttribute('tabIndex', '1');
    expect(stepper).toHaveAttribute('id', 'test');
  });
});
