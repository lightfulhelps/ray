import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import CampaignTemplateCard from './CampaignTemplateCard';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<CampaignTemplateCard {...props} />);

  return { wrapper, props };
};

describe('<CampaignTemplateCard />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('campaign-template-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
