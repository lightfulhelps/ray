import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import URLMetaPreview from "./URLMetaPreview";

const setup = (overrides = {}) => {
  const props = merge({
    title: "National Living Wage 'fails to cover families' basic needs",
    description: "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says.",
    image: 'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg',
    url: 'https://www.bbc.co.uk/news/business-45242008'
  }, overrides);
  const wrapper = shallow(<URLMetaPreview {...props} />);

  return {
    wrapper,
    props
  };
};

describe('<URLMetaPreview />', () => {
  it('should return null if no url', () => {
    const {
      wrapper
    } = setup({ url: null });

    expect(wrapper.type()).toBe(null);
  });

  it('should render', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render in vertical mode', () => {
    const {
      wrapper
    } = setup({ isVertical: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const {
      wrapper
    } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('url-meta-preview')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle no image', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.find('[data-test-id="url-meta-preview-image"]').exists()).toBe(true);

    wrapper.setProps({ image: null });

    expect(wrapper.find('[data-test-id="url-meta-preview-image"]').exists()).toBe(false);
  });

  it('should handle no description', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.find('[data-test-id="url-meta-preview-description"]').exists()).toBe(true);

    wrapper.setProps({ description: null });

    expect(wrapper.find('[data-test-id="url-meta-preview-description"]').exists()).toBe(false);
  });

  it('should format the url', () => {
    const {
      wrapper
    } = setup();

    expect(wrapper.find('[data-test-id="url-meta-preview-url"]').text()).toBe('bbc.co.uk/news/business-45242008');
  });

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});