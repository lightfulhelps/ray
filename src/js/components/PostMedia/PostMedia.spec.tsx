import React from "react";
import { shallow } from "enzyme";
import merge from "lodash/merge";
import PostMedia from "./PostMedia";

const setup = (overrides = {}) => {
  const props = merge({ media: [] }, overrides);
  const wrapper = shallow(<PostMedia {...props} />);

  return {
    wrapper,
    props
  };
};

describe('<PostMedia />', () => {
  it('should render with no media', () => {
    const {
      wrapper
    } = setup({ media: [] });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a video', () => {
    const {
      wrapper
    } = setup({
      media: [{
        type: 'video',
        url: 'http://foo.com/video.mov'
      }]
    });

    expect(wrapper).toMatchSnapshot();
  });

  const dummyImages = [{
    type: 'image',
    url: 'http://foo.com/image1.jpg'
  }, {
    type: 'image',
    url: 'http://foo.com/image2.jpg'
  }, {
    type: 'image',
    url: 'http://foo.com/image3.jpg'
  }, {
    type: 'image',
    url: 'http://foo.com/image4.jpg'
  }];

  for (let i = 1; i <= dummyImages.length; i++) {
    it(`should render ${i} image`, () => {
      const {
        wrapper
      } = setup({ media: dummyImages.slice(0, i) });

      expect(wrapper).toMatchSnapshot();
    });
  }

  it('should pass through other props', () => {
    const {
      wrapper
    } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});