import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import ToggleSwitch from './ToggleSwitch';

const setup = (overrides = {}) => {
  const props = merge(overrides);
  const wrapper = shallow(<ToggleSwitch {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<ToggleSwitch />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
