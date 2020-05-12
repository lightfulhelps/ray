import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import { addDays, subDays } from 'date-fns';
import { PostCard, PostMedia, URLMetaPreview } from '../..';
import { PostType } from './PostCard';

const setup = (overrides = {}) => {
  const props = merge(
    {
      post: {
        id: '08a2a5c0-a77b-11e8-a45a-3bfafb0c9405',
        date: '2018-08-22 14:34',
        content:
          'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".',
        campaign: {
          name: 'Campaign',
          color: '#ff0000',
        },
        socialIdentity: {
          id: 'b54ab2fb-0430-4932-b0fa-101b67bf06c2',
          avatar: 'http://foo.com/avatar.jpg',
          displayName: 'Myah Graham',
          provider: 'facebook',
        },
        metrics: [
          {
            icon: 'like',
            key: 'likes',
            value: 10,
          },
          {
            icon: 'share',
            key: 'shares',
            value: 5,
          },
        ],
        media: [
          {
            id: 'af712270-b03e-4b1c-98d2-f744f807df2f',
            type: 'image',
            url: 'http://lorempixel.com/640/480',
          },
        ],
        state: 'scheduled',
        tags: ['charity', 'social for good', 'campaigns', 'lightful'],
      } as PostType,
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

  it('should render with errors', () => {
    const { wrapper } = setup({ errors: ['foo', 'bar'] });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('post-card')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
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

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toBe(
      'Scheduled for 14:34 on Wednesday, 22 August'
    );

    wrapper.setProps({ post: { ...props.post, date: null } });

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toBe('Unscheduled');
  });

  it('should handle post state in date message', () => {
    const { wrapper, props } = setup({
      post: { date: addDays(new Date(), 1), state: 'scheduled' },
    });

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).not.toContain('Published');
    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toContain('Scheduled');

    wrapper.setProps({ post: { ...props.post, date: subDays(new Date(), 1), state: 'published' } });

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toContain('Published');
    expect(wrapper.find('[data-test-id="post-card-date"]').text()).not.toContain('Scheduled');
  });

  it('should handle the dateFormat prop', () => {
    const { wrapper } = setup();

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toEqual(
      'Scheduled for 14:34 on Wednesday, 22 August'
    );

    wrapper.setProps({ dateFormat: 'HH:MM [on] DD-MM-YYYY' });

    expect(wrapper.find('[data-test-id="post-card-date"]').text()).toEqual(
      'Scheduled for 14:08 on 22-08-2018'
    );
  });

  it('should set HTML in the post content', () => {
    const content = 'Hi <a href="">@Buttle</a>';
    const { wrapper } = setup({ post: { content } });

    expect(
      wrapper
        .find('[data-test-id="post-card-content"]')
        .children()
        .at(0)
        .prop('unsafeHTML')
    ).toEqual(content);
  });

  it('should show PostMedia if has media', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(PostMedia).exists()).toBe(true);

    wrapper.setProps({ post: { ...props.post, media: [] } });

    expect(wrapper.find(PostMedia).exists()).toBe(false);
  });

  it('should show URLMetaPreview if no media and metaPreview.url value', () => {
    const { wrapper, props } = setup({ post: { media: [{ id: 1 }] } });

    expect(wrapper.find(PostMedia).exists()).toBe(true);

    wrapper.setProps({
      post: { ...props.post, media: [] },
      metaPreview: { url: 'http://foo.com', title: 'Foo' },
    });

    expect(wrapper.find(PostMedia).exists()).toBe(false);
    expect(wrapper.find(URLMetaPreview).exists()).toBe(true);
  });

  it('should display the empty media message if no media and no metaPreview', () => {
    const { wrapper, props } = setup({ post: { media: [{ id: 1 }] } });

    expect(wrapper.find('.post-media--empty').exists()).toBe(false);

    wrapper.setProps({
      post: { ...props.post, media: [] },
      metaPreview: { url: 'http://foo.com', title: 'Foo' },
    });

    expect(wrapper.find('.post-media--empty').exists()).toBe(false);

    wrapper.setProps({ metaPreview: {} });

    expect(wrapper.find('.post-media--empty').exists()).toBe(true);
  });

  it('should display notes if notesAction', () => {
    const { wrapper } = setup({ notesAction: jest.fn(), notesCount: 3 });

    expect(wrapper.find('[data-test-id="post-card-notes"]')).toHaveLength(1);
    expect(wrapper.find('[data-test-id="post-card-metric"]')).toHaveLength(0);
  });
});
