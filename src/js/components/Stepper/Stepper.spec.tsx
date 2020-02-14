import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import Stepper from "./Stepper";

const setup = (overrides = {}) => {
  const props = merge({
    steps: [{ label: 'step one', value: 1, onClick: jest.fn() }, { label: 'step two', value: 2, onClick: jest.fn() }, { label: 'step three', value: 3 }],
    activeStep: 1
  }, overrides);
  const wrapper = shallow(<Stepper {...props} />);

  return {
    wrapper,
    props
  };
};

describe('<Stepper />', () => {
  it('should render', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should return null if the steps prop is not an array', () => {
    const {
      wrapper
    } = setup({ steps: 'Suuurrreee, I am an array. DW' });

    expect(wrapper.type()).toBeNull();
  });

  it('should return null if there is no activeStep prop', () => {
    const {
      wrapper
    } = setup({ activeStep: null });

    expect(wrapper.type()).toBeNull();
  });

  it('should handle className', () => {
    const {
      wrapper
    } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('stepper')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('`isLast` prop should eveluate to false for all but the last step', () => {
    const {
      wrapper
    } = setup();
    const firstStep = wrapper.find('Step').at(0);
    const secondStep = wrapper.find('Step').at(1);
    const lastStep = wrapper.find('Step').at(2);

    expect(firstStep.prop('isLast')).toBe(false);
    expect(secondStep.prop('isLast')).toBe(false);
    expect(lastStep.prop('isLast')).toBe(true);
  });

  it('should pass steps object values to Step component via props', () => {
    const {
      wrapper,
      props
    } = setup();
    const renderedSteps = wrapper.find('Step');

    props.steps.forEach((step, index) => {
      expect(renderedSteps.at(index).prop('label')).toEqual(step.label);
      expect(renderedSteps.at(index).prop('value')).toEqual(step.value);
      expect(renderedSteps.at(index).prop('onClick')).toEqual(step.onClick);
    });
  });

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});