import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Step from './Step';

const setup = (overrides = {}) => {
  const props = merge({
    activeStep: 1,
    isLast: false,
    label: 'step one',
    thisStep: 1,
    value: 1,
  });
  const wrapper = shallow(<Step {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Step />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
