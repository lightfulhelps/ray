import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import addDays from 'date-fns/add_days';
import { PostCard, PostMedia, URLMetaPreview, Icon, Button } from '../../';

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
      },
      inspirationActions: [
        {
          icon: 'follow',
          activeColor: '#0095f1',
          isActive: false,
          onClick: jest.fn(),
        },
        {
          icon: 'like',
          activeColor: '#f25270',
          isActive: true,
          onClick: jest.fn(),
        },
      ],
    },
    overrides
  );
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

    expect(wrapper.hasClass('post-card--draft')).toBe(false);

    wrapper.setProps({ isDraft: true });

    expect(wrapper.hasClass('post-card--draft')).toBe(true);
  });

  it('should handle the invalid prop', () => {
    const { wrapper } = setup();

    expect(wrapper.hasClass('post-card--invalid')).toBe(false);

    wrapper.setProps({ isInvalid: true });

    expect(wrapper.hasClass('post-card--invalid')).toBe(true);
  });

  it('should optionally display post date', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.post-card__date').text()).toBe('22 Aug - 14:34');

    wrapper.setProps({ post: { ...props.post, date: null } });

    expect(wrapper.find('.post-card__date').text()).toBe('<Icon />Unscheduled');
  });

  it('should include the unscheduled Icon if no date or date is in the future', () => {
    const { wrapper, props } = setup({ post: { date: null } });

    expect(
      wrapper
        .find('.post-card__date')
        .find(Icon)
        .exists()
    ).toBe(true);

    wrapper.setProps({ post: { ...props.post, date: '2018-08-22 14:34' } });

    expect(
      wrapper
        .find('.post-card__date')
        .find(Icon)
        .exists()
    ).toBe(false);

    wrapper.setProps({ post: { ...props.post, date: addDays(new Date(), 1) } });

    expect(
      wrapper
        .find('.post-card__date')
        .find(Icon)
        .exists()
    ).toBe(true);
  });

  it('should handle the dateFormat prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.post-card__date').text()).toEqual('22 Aug - 14:34');

    wrapper.setProps({ dateFormat: 'HH:MM [on] DD-MM-YYYY' });

    expect(wrapper.find('.post-card__date').text()).toEqual('14:08 on 22-08-2018');
  });

  it('should handle the post campaign prop', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.campaign-tag').prop('color')).toEqual(props.post.campaign.color);
    expect(wrapper.find('.campaign-tag').prop('children')).toEqual(props.post.campaign.name);
  });

  it('should optionally display the campaign tag', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.campaign-tag').exists()).toBe(true);

    wrapper.setProps({ post: merge(props.post, { campaign: null }) });

    expect(wrapper.find('.campaign-tag').exists()).toBe(false);
  });

  it('should set HTML in the post content', () => {
    const content = 'Hi <a href="">@Buttle</a>';
    const { wrapper } = setup({ post: { content } });

    expect(wrapper.find('.post-card__content div').prop('dangerouslySetInnerHTML')).toEqual({
      __html: content,
    });
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

    expect(wrapper.find('.post-card__inspiration-actions').exists()).toBe(true);

    wrapper.setProps({ inspirationActions: [] });

    expect(wrapper.find('.post-card__inspiration-actions').exists()).toBe(false);

    wrapper.setProps({ inspirationActions: null });

    expect(wrapper.find('.post-card__inspiration-actions').exists()).toBe(false);
  });

  it('should handle the inspirationActions prop', () => {
    const follow = jest.fn();
    const like = jest.fn();
    const { wrapper } = setup({
      inspirationActions: [
        {
          icon: 'follow',
          activeColor: '#0095f1',
          isActive: false,
          onClick: follow,
        },
        {
          icon: 'like',
          activeColor: '#f25270',
          isActive: true,
          onClick: like,
        },
      ],
    });

    const inspirationActions = wrapper.find('.post-card__inspiration-actions').find(Icon);

    expect(inspirationActions).toHaveLength(2);

    expect(inspirationActions.at(0).prop('name')).toEqual('follow');
    expect(inspirationActions.at(0).prop('hoverColor')).toEqual('#343a40');
    expect(inspirationActions.at(1).prop('name')).toEqual('like');
    expect(inspirationActions.at(1).prop('color')).toEqual('#f25270');
    expect(inspirationActions.at(1).prop('hoverColor')).toEqual('#f25270');

    inspirationActions.at(0).simulate('click');
    inspirationActions.at(1).simulate('click');

    expect(follow).toHaveBeenCalledTimes(1);
    expect(like).toHaveBeenCalledTimes(0); // because like isActive
  });

  it('should optionally display post metrics', () => {
    const { wrapper, props } = setup({ post: { metrics: { likes: 3 } } });

    expect(wrapper.find('.post-card__metrics').exists()).toBe(true);

    wrapper.setProps({ post: { ...props.post, metrics: {} } });

    expect(wrapper.find('.post-card__metrics').exists()).toBe(false);
  });

  it('should optionally display a footer button', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.post-card__footer').exists()).toBe(false);

    wrapper.setProps({ footerButton: <Button>Click</Button> });

    expect(wrapper.find('.post-card__footer').exists()).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
