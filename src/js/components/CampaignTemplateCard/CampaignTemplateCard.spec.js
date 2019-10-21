import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import CampaignTemplateCard from './CampaignTemplateCard';

const setup = (overrides = {}) => {
  const props = merge(
    {
      title: 'Create your own',
      description: "Don't use a template, do your own thing.",
      image: 'http://foo.com/bar.jpg',
      onClick: () => {},
    },
    overrides
  );
  const wrapper = shallow(<CampaignTemplateCard {...props} />);

  return { wrapper, props };
};

describe('<CampaignTemplateCard />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render when isSelected', () => {
    const { wrapper } = setup({ isSelected: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('campaign-template-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle title', () => {
    const title = 'My title';
    const { wrapper } = setup({ title });

    expect(wrapper.find('[data-test-id="campaign-template-card-title"]').text()).toEqual(title);
  });

  it('should handle description', () => {
    const description = 'My description';
    const { wrapper } = setup({ description });

    expect(wrapper.find('[data-test-id="campaign-template-card-description"]').text()).toEqual(
      description
    );
  });

  it('should handle background image', () => {
    const image = 'bar.com/foo.jpg';
    const { wrapper } = setup({ image });

    const style = wrapper.find('[data-test-id="campaign-template-card-image"]').prop('style');
    expect(style).toHaveProperty('backgroundImage', 'url(bar.com/foo.jpg)');
  });

  it('should run onClick event when button is clicked', () => {
    const onClick = jest.fn();
    const { wrapper } = setup({ onClick });

    wrapper.find('[data-test-id="campaign-template-card-button"]').simulate('click');
    expect(onClick).toBeCalledTimes(1);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
