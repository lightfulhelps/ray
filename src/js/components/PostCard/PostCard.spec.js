import React from 'react';
import { shallow } from 'enzyme';
import PostCard from './PostCard';

const setup = (overrides = {}) => {
  const props = {
    children: <p>Post Card</p>,
    ...overrides,
  };
  const wrapper = shallow(<PostCard {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<PostCard />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('post-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the draft prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('bg-light')).toBe(false);
    expect(wrapper.hasClass('border-gray-500')).toBe(false);

    wrapper.setProps({ isDraft: true });

    expect(wrapper.hasClass('bg-light')).toBe(true);
    expect(wrapper.hasClass('border-gray-500')).toBe(true);
  });

  it('should handle the invalid prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('border-danger')).toBe(false);

    wrapper.setProps({ isInvalid: true });

    expect(wrapper.hasClass('border-danger')).toBe(true);
  });
});
