import React from 'react';
import { render, screen } from '@testing-library/react';
import merge from 'lodash/merge';
import { addDays, subDays } from 'date-fns';
import { PostCard } from '../..';
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
  const utils = render(<PostCard {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<PostCard />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render with errors', () => {
    const { container } = setup({ errors: ['foo', 'bar'] });

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container } = setup({ className: 'custom' });

    const postCard = container.querySelector('.post-card');
    expect(postCard).toHaveClass('post-card');
    expect(postCard).toHaveClass('custom');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const postCard = container.querySelector('.post-card');
    expect(postCard).toHaveAttribute('tabIndex', '1');
    expect(postCard).toHaveAttribute('id', 'test');
  });

  it('should handle the draft prop', () => {
    const { container, rerender, props } = setup();

    let postCard = container.querySelector('.post-card');
    expect(postCard).not.toHaveClass('post-card--draft');

    rerender(<PostCard post={props.post} isDraft />);

    postCard = container.querySelector('.post-card');
    expect(postCard).toHaveClass('post-card--draft');
  });

  it('should handle the invalid prop', () => {
    const { container, rerender, props } = setup();

    let postCard = container.querySelector('.post-card');
    expect(postCard).not.toHaveClass('post-card--invalid');

    rerender(<PostCard post={props.post} isInvalid />);

    postCard = container.querySelector('.post-card');
    expect(postCard).toHaveClass('post-card--invalid');
  });

  it('should optionally display post date', () => {
    const { rerender, props } = setup();

    expect(screen.getByTestId('post-card-date')).toHaveTextContent(
      'Scheduled for 14:34 on Wednesday, 22 August'
    );

    rerender(<PostCard post={{ ...props.post, date: null }} />);

    expect(screen.getByTestId('post-card-date')).toHaveTextContent('Unscheduled');
  });

  it('should handle post state in date message', () => {
    const { rerender, props } = setup({
      post: { date: addDays(new Date(), 1), state: 'scheduled' },
    });

    expect(screen.getByTestId('post-card-date')).not.toHaveTextContent('Published');
    expect(screen.getByTestId('post-card-date')).toHaveTextContent('Scheduled');

    rerender(
      <PostCard post={{ ...props.post, date: subDays(new Date(), 1), state: 'published' }} />
    );

    expect(screen.getByTestId('post-card-date')).toHaveTextContent('Published');
    expect(screen.getByTestId('post-card-date')).not.toHaveTextContent('Scheduled');
  });

  it('should handle the dateFormat prop', () => {
    const { rerender, props } = setup();

    expect(screen.getByTestId('post-card-date')).toHaveTextContent(
      'Scheduled for 14:34 on Wednesday, 22 August'
    );

    rerender(<PostCard post={props.post} dateFormat="HH:MM 'on' dd-MM-yyyy" />);

    expect(screen.getByTestId('post-card-date')).toHaveTextContent(
      'Scheduled for 14:08 on 22-08-2018'
    );
  });

  it('should set HTML in the post content', () => {
    const content = 'Hi <a href="">@Buttle</a>';
    setup({ post: { content } });

    const contentElement = screen.getByTestId('post-card-content');
    expect(contentElement.innerHTML).toContain(content);
  });

  it('should show PostMedia if has media', () => {
    const { container, rerender, props } = setup();

    // Check that media is rendered (PostMedia component renders the media)
    expect(container.querySelector('.post-card__media-wrap')).toBeInTheDocument();

    rerender(<PostCard post={{ ...props.post, media: [] }} />);

    // When no media, should show empty state
    expect(container.querySelector('.post-media--empty')).toBeInTheDocument();
  });

  it('should show URLMetaPreview if no media and metaPreview.url value', () => {
    const postWithoutMedia = { ...setup().props.post, media: [] };
    const { container, rerender } = render(<PostCard post={postWithoutMedia} />);

    expect(container.querySelector('.post-media--empty')).toBeInTheDocument();

    rerender(
      <PostCard post={postWithoutMedia} metaPreview={{ url: 'http://foo.com', title: 'Foo' }} />
    );

    expect(container.querySelector('.post-media--empty')).not.toBeInTheDocument();
    expect(container.querySelector('.url-meta-preview')).toBeInTheDocument();
  });

  it('should display the empty media message if no media and no metaPreview', () => {
    const { container, rerender, props } = setup({
      post: { media: [{ id: '1', type: 'image', url: 'test.jpg' }] },
    });

    expect(container.querySelector('.post-media--empty')).not.toBeInTheDocument();

    rerender(
      <PostCard
        post={{ ...props.post, media: [] }}
        metaPreview={{ url: 'http://foo.com', title: 'Foo' }}
      />
    );

    expect(container.querySelector('.post-media--empty')).not.toBeInTheDocument();

    rerender(<PostCard post={{ ...props.post, media: [] }} />);

    expect(container.querySelector('.post-media--empty')).toBeInTheDocument();
  });

  it('should display notes if notesAction', () => {
    const { container } = setup({ notesAction: jest.fn(), notesCount: 3 });

    expect(screen.getByTestId('post-card-notes')).toBeInTheDocument();
    expect(container.querySelectorAll('[data-testid="post-card-metric"]')).toHaveLength(0);
  });
});
