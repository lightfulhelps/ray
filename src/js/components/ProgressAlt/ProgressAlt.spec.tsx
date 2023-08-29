import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Progress from './ProgressAlt';

const setup = (overrides = {}) => {
  const props = merge({ value: 0 }, overrides);
  const wrapper = shallow(<Progress {...props} />);

  return { wrapper, props };
};

describe('<ProgressAlt />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the theme prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-primary')).toBe(true);

    wrapper.setProps({ theme: 'secondary' });

    expect(wrapper.find('[data-test-id="progress-bar"]').hasClass('bg-secondary')).toBe(true);
  });

  it('should handle the value prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="progress-bar"]').prop('style').width).toBe('0%');

    wrapper.setProps({ value: 30 });

    expect(wrapper.find('[data-test-id="progress-bar"]').prop('style').width).toBe('30%');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
