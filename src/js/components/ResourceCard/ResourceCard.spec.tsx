import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import ResourceCard, { isHex } from "./ResourceCard";

const setup = (overrides = {}) => {
  const props = merge({
    campaign: 'Fireside Storytelling',
    gradientStart: '#fafafa',
    gradientEnd: '#000000',
    resource: 'http://foo.com/bar.pdf',
    title: 'Useful storytelling guide'
  }, overrides);
  const wrapper = shallow(<ResourceCard {...props} />);

  return { wrapper, props };
};

describe('<ResourceCard />', () => {
  it('should render', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const {
      wrapper
    } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('resource-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle campaign', () => {
    const campaign = 'My campaign';
    const {
      wrapper
    } = setup({ campaign });

    expect(wrapper.find('[data-test-id="resource-card-campaign"]').text()).toEqual(campaign);
  });

  it('should handle title', () => {
    const title = 'My title';
    const {
      wrapper
    } = setup({ title });

    expect(wrapper.find('[data-test-id="resource-card-title"]').text()).toEqual(title);
  });

  it('should not have a gradient background if gradientStart is an invalid HEX code', () => {
    const {
      wrapper
    } = setup({ gradientStart: 'foo', gradientEnd: '#ff0000' });

    expect(wrapper.prop('style').backgroundImage).toBeUndefined();
  });

  it('should not have a gradient background if gradientEnd is an invalid HEX code', () => {
    const {
      wrapper
    } = setup({ gradientStart: '#ff0000', gradientEnd: 'foo' });

    expect(wrapper.prop('style').backgroundImage).toBeUndefined();
  });

  it('should have a gradient background if gradientStart and gradientEnd are valid HEX codes', () => {
    const {
      wrapper
    } = setup({ gradientStart: '#ff0000', gradientEnd: '#fafafa' });

    expect(wrapper.prop('style').backgroundImage).toEqual('linear-gradient(90deg, #ff0000 0%, #fafafa 100%)');
  });

  it('should handle the tag prop', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.type()).toBe('a');

    wrapper.setProps({ tag: 'div' });

    expect(wrapper.type()).toBe('div');
  });

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});

describe('isHex', () => {
  it('should return true for hex-like strings', () => {
    expect(isHex('#000')).toBe(true);
    expect(isHex('#FFF')).toBe(true);
    expect(isHex('#fff')).toBe(true);
    expect(isHex('#FF0000')).toBe(true);
    expect(isHex('#ff0000')).toBe(true);
    expect(isHex('#FAFAFA')).toBe(true);
    expect(isHex('#fafafa')).toBe(true);
  });

  it('should return false for non hex-like strings', () => {
    expect(isHex('foo')).toBe(false);
    expect(isHex('000')).toBe(false);
    expect(isHex('FFF')).toBe(false);
    expect(isHex('#f')).toBe(false);
    expect(isHex('#ff')).toBe(false);
    expect(isHex('#ffff')).toBe(false);
    expect(isHex('#fffff')).toBe(false);
    expect(isHex('#fffffff')).toBe(false);
  });
});