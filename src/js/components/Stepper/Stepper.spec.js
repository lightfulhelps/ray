import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Stepper from './Stepper';

const setup = (overrides = {}) => {
  const props = merge({
    steps: [
      { label: 'step one', value: 1 },
      { label: 'step two', value: 2 },
      { label: 'step three', value: 3 },
    ],
    activeStep: 1,
    ...overrides,
  });
  const wrapper = shallow(<Stepper {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Stepper />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
  it('should return null if the steps prop is not an array', () => {
    const { wrapper } = setup({ steps: 'Suuurrreee, I am an array. DW' });
    expect(wrapper.type()).toBeNull();
  });
  it('should return null if there is no activeStep prop', () => {
    const { wrapper } = setup({ activeStep: null });
    expect(wrapper.type()).toBeNull();
  });
});
