import React from 'react';
import { shallow } from 'enzyme';
import PostHeader from './PostHeader';

const setup = (overrides = {}) => {
  const props = {
    campaign: {
      name: 'Campaign',
      color: '#ff0000',
    },
    date: '2018-08-22 14:34',
    title: 'Hope For Children',
    ...overrides,
  };
  const wrapper = shallow(<PostHeader {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<PostHeader />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('post-header')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should optionally display date', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.post-date').exists()).toBe(true);

    wrapper.setProps({ date: null });

    expect(wrapper.find('.post-date').exists()).toBe(false);
  });

  it('should handle the dateFormat prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.post-date').text()).toEqual('22 Aug at 14:34');

    wrapper.setProps({ dateFormat: 'HH:MM [on] DD-MM-YYYY' });

    expect(wrapper.find('.post-date').text()).toEqual('14:08 on 22-08-2018');
  });

  it('should handle the campaign prop', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.campaign-tag').prop('color')).toEqual(props.campaign.color);
    expect(wrapper.find('.campaign-tag').prop('children')).toEqual(props.campaign.name);
  });

  it('should optionally display the campaign tag', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.campaign-tag').exists()).toBe(true);

    wrapper.setProps({ campaign: null });

    expect(wrapper.find('.campaign-tag').exists()).toBe(false);
  });
});
