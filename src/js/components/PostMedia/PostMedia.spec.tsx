import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import PostMedia from './PostMedia';

const setup = (overrides = {}) => {
  const props = merge({ media: [] }, overrides);
  const renderResult = render(<PostMedia {...props} />);

  return {
    ...renderResult,
    props,
  };
};

describe('<PostMedia />', () => {
  it('should render with no media', () => {
    const { container } = setup({ media: [] });

    expect(container).toMatchSnapshot();
  });

  it('should render with a video', () => {
    const { container } = setup({
      media: [
        {
          type: 'video',
          url: 'http://foo.com/video.mov',
        },
      ],
    });

    expect(container).toMatchSnapshot();
  });

  const dummyImages = [
    {
      type: 'image',
      url: 'http://foo.com/image1.jpg',
    },
    {
      type: 'image',
      url: 'http://foo.com/image2.jpg',
    },
    {
      type: 'image',
      url: 'http://foo.com/image3.jpg',
    },
    {
      type: 'image',
      url: 'http://foo.com/image4.jpg',
    },
  ];

  for (let i = 1; i <= dummyImages.length; i++) {
    it(`should render ${i} image`, () => {
      const { container } = setup({ media: dummyImages.slice(0, i) });

      expect(container).toMatchSnapshot();
    });
  }

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const postMedia = container.firstChild as Element;
    expect(postMedia).toHaveAttribute('tabIndex', '1');
    expect(postMedia).toHaveAttribute('id', 'test');
  });
});
