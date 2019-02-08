import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Stepper from './Stepper';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Click Me',
      onClick: jest.fn(),
    },
    overrides
  );
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
});
