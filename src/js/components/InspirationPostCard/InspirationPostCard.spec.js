import React from 'react';
import { shallow } from 'enzyme';
import { merge } from 'lodash';
import { InspirationPostCard, PostMedia, URLMetaPreview, Icon } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      post: {
        id: '08a2a5c0-a77b-11e8-a45a-3bfafb0c9405',
        title: 'Hope For Children',
        date: '2018-08-22 14:34',
        content:
          'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".',
        campaign: {
          name: 'Campaign',
          color: '#ff0000',
        },
        socialIdentity: {
          id: '1',
          avatar: 'http://foo.com/avatar.jpg',
        },
        metrics: {
          likes: 10,
          shares: 5,
        },
        tags: ['charity', 'social for good', 'campaigns', 'lightful'],
      },
      inspirationActions: [
        {
          icon: 'follow',
          isActive: false,
          onClick: jest.fn(),
          theme: 'gray-500',
        },
        {
          icon: 'like',
          isActive: true,
          onClick: jest.fn(),
          theme: 'gray-500',
        },
      ],
    },
    overrides
  );
  const wrapper = shallow(<InspirationPostCard {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<InspirationPostCard />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('inspiration-post-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should optionally display post date', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.inspiration-post-card__date').text()).toBe('22 Aug 18 - 14:34');

    wrapper.setProps({ post: { ...props.post, date: null } });

    expect(wrapper.find('.inspiration-post-card__date').text()).toBe('Unscheduled');
  });

  it('should handle the dateFormat prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.inspiration-post-card__date').text()).toEqual('22 Aug 18 - 14:34');

    wrapper.setProps({ dateFormat: 'HH:MM [on] DD-MM-YYYY' });

    expect(wrapper.find('.inspiration-post-card__date').text()).toEqual('14:08 on 22-08-2018');
  });

  it('should set HTML in the post content', () => {
    const content = 'Hi <a href="">@Buttle</a>';
    const { wrapper } = setup({ post: { content } });

    expect(
      wrapper
        .find('.inspiration-post-card__content')
        .children()
        .at(0)
        .prop('unsafeHTML')
    ).toEqual(content);
  });

  it('should show PostMedia if has media', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(PostMedia).exists()).toBe(false);

    wrapper.setProps({ post: { ...props.post, media: [{ id: 1 }] } });

    expect(wrapper.find(PostMedia).exists()).toBe(true);
  });

  it('should show URLMetaPreview if no media and metaPreview.url value', () => {
    const { wrapper, props } = setup({ post: { media: [{ id: 1 }] } });

    expect(wrapper.find(PostMedia).exists()).toBe(true);

    wrapper.setProps({
      post: { ...props.post, media: [] },
      metaPreview: { url: 'http://foo.com' },
    });

    expect(wrapper.find(PostMedia).exists()).toBe(false);
    expect(wrapper.find(URLMetaPreview).exists()).toBe(true);
  });

  it('should display the empty media message if no media and no metaPreview', () => {
    const { wrapper, props } = setup({ post: { media: [{ id: 1 }] } });

    expect(wrapper.find('.post-media--empty').exists()).toBe(false);

    wrapper.setProps({
      post: { ...props.post, media: [] },
      metaPreview: { url: 'http://foo.com' },
    });

    expect(wrapper.find('.post-media--empty').exists()).toBe(false);

    wrapper.setProps({ metaPreview: {} });

    expect(wrapper.find('.post-media--empty').exists()).toBe(true);
  });

  it('should optionally display inspirationActions', () => {
    const { wrapper } = setup({ inspirationActions: [{ icon: 'follow' }] });

    expect(wrapper.find('.inspiration-post-card__inspiration-actions').exists()).toBe(true);

    wrapper.setProps({ inspirationActions: [] });

    expect(wrapper.find('.inspiration-post-card__inspiration-actions').exists()).toBe(false);

    wrapper.setProps({ inspirationActions: null });

    expect(wrapper.find('.inspiration-post-card__inspiration-actions').exists()).toBe(false);
  });

  it('should handle the inspirationActions prop', () => {
    const follow = jest.fn();
    const like = jest.fn();
    const { wrapper } = setup({
      inspirationActions: [
        {
          icon: 'follow',
          isActive: false,
          onClick: follow,
          theme: 'gray-500',
        },
        {
          icon: 'like',
          isActive: true,
          onClick: like,
          theme: 'gray-500',
        },
      ],
    });

    const inspirationActions = wrapper
      .find('.inspiration-post-card__inspiration-actions')
      .find(Icon);

    expect(inspirationActions).toHaveLength(2);

    expect(inspirationActions.at(0).prop('name')).toEqual('follow');
    expect(inspirationActions.at(0).prop('theme')).toEqual('gray-500');
    expect(inspirationActions.at(1).prop('name')).toEqual('like');
    expect(inspirationActions.at(1).prop('theme')).toEqual('gray-500');

    inspirationActions.at(0).simulate('click');
    inspirationActions.at(1).simulate('click');

    expect(follow).toHaveBeenCalledTimes(1);
    expect(like).toHaveBeenCalledTimes(0); // because like isActive
  });

  it('should optionally display post metrics', () => {
    const { wrapper, props } = setup({ post: { metrics: { likes: 3 } } });

    expect(wrapper.find('.inspiration-post-card__metrics').exists()).toBe(true);

    wrapper.setProps({ post: { ...props.post, metrics: {} } });

    expect(wrapper.find('.inspiration-post-card__metrics').exists()).toBe(false);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
