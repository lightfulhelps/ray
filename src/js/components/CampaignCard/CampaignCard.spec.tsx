import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import CampaignCard from './CampaignCard';

const setup = (overrides = {}) => {
  const props = merge(
    {
      cover: 'http://lorempixel.com/640/480',
      title: 'THX distributed',
      state: 'Live',
    },
    overrides
  );
  const wrapper = shallow(<CampaignCard {...props} />);

  return { wrapper, props };
};

describe('<CampaignCard />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('campaign-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the cover prop', () => {
    const cover = 'http://lorempixel.com/b924f7e6-5434-4ef4-bdc6-2670b799f27c';
    const { wrapper } = setup({
      cover,
    });

    expect(
      wrapper.find('[data-test-id="campaign-card-cover"]').prop('style').backgroundImage
    ).toContain(cover);
  });

  it('should handle the title prop', () => {
    const title = 'azure Handcrafted Wooden Car';
    const { wrapper } = setup({ title });

    expect(wrapper.find('[data-test-id="campaign-card-title"]').text()).toEqual(title);
  });

  it('should handle the Live state', () => {
    const { wrapper } = setup({ state: 'Live' });

    expect(wrapper.find('[data-test-id="campaign-card-state"]').text()).toEqual('Live');

    expect(wrapper.find('[data-test-id="campaign-card-state"]').prop('className')).toContain(
      'text-primary'
    );

    expect(wrapper.find('[data-test-id="campaign-card-state"]').prop('className')).not.toContain(
      'text-warning'
    );
  });

  it('should handle the Draft state', () => {
    const { wrapper } = setup({ state: 'Draft' });

    expect(wrapper.find('[data-test-id="campaign-card-state"]').text()).toEqual('Draft');

    expect(wrapper.find('[data-test-id="campaign-card-state"]').prop('className')).not.toContain(
      'text-primary'
    );

    expect(wrapper.find('[data-test-id="campaign-card-state"]').prop('className')).toContain(
      'text-warning'
    );
  });

  it('should handle the tag prop', () => {
    const { wrapper } = setup();

    expect(wrapper.type()).toBe('div');

    wrapper.setProps({ tag: 'a' });

    expect(wrapper.type()).toBe('a');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
