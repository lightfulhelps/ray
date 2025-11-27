import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
          provider: 'twitter' as const,
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
          icon: 'follow' as const,
          isActive: false,
          onClick: jest.fn(),
          theme: 'gray-500',
        },
        {
          icon: 'like' as const,
          isActive: true,
          onClick: jest.fn(),
          theme: 'gray-500',
        },
      ],
    },
    overrides
  );
  const renderResult = render(<InspirationPostCard {...props} />);

  return {
    ...renderResult,
    props,
  };
};

describe('<InspirationPostCard />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { container } = setup({ className: 'custom' });

    const card = container.querySelector('.inspiration-post-card');
    expect(card).toHaveClass('inspiration-post-card');
    expect(card).toHaveClass('custom');
  });

  it('should optionally display post date', () => {
    const { container, rerender, props } = setup();

    let dateElement = container.querySelector('.inspiration-post-card__date');
    expect(dateElement).toHaveTextContent('22 Aug 18 - 14:34');

    rerender(<InspirationPostCard {...props} post={{ ...props.post, date: null }} />);

    dateElement = container.querySelector('.inspiration-post-card__date');
    expect(dateElement).toHaveTextContent('Unscheduled');
  });

  it('should handle the dateFormat prop', () => {
    const { container, rerender, props } = setup();

    let dateElement = container.querySelector('.inspiration-post-card__date');
    expect(dateElement).toHaveTextContent('22 Aug 18 - 14:34');

    rerender(<InspirationPostCard {...props} dateFormat="HH:MM 'on' dd-MM-yyyy" />);

    dateElement = container.querySelector('.inspiration-post-card__date');
    expect(dateElement).toHaveTextContent('14:08 on 22-08-2018');
  });

  it('should set HTML in the post content', () => {
    const content = 'Hi <a href="">@Buttle</a>';
    const { container } = setup({ post: { content } });

    const contentElement = container.querySelector('.inspiration-post-card__content');
    expect(contentElement.innerHTML).toContain(content);
  });

  it('should show PostMedia if has media', () => {
    const result = setup();
    const { container, rerender, props } = result;

    expect(container.querySelector('.post-media')).not.toBeInTheDocument();

    rerender(
      <InspirationPostCard
        {...props}
        post={{ ...props.post, media: [{ type: 'image', url: 'test.jpg' }] }}
      />
    );

    expect(container.querySelector('.post-media')).toBeInTheDocument();
  });

  it('should show URLMetaPreview if no media and metaPreview.url value', () => {
    const result = setup();
    const { container, rerender, props } = result;

    rerender(
      <InspirationPostCard
        {...props}
        post={{ ...props.post, media: [{ type: 'image', url: 'test.jpg' }] }}
      />
    );
    expect(container.querySelector('.post-media')).toBeInTheDocument();

    rerender(
      <InspirationPostCard
        {...props}
        post={{ ...props.post, media: [] }}
        metaPreview={{ url: 'http://foo.com', title: 'Test' }}
      />
    );

    expect(container.querySelector('.post-media')).not.toBeInTheDocument();
    expect(container.querySelector('.url-meta-preview')).toBeInTheDocument();
  });

  it('should display the empty media message if no media and no metaPreview', () => {
    const result = setup();
    const { container, rerender, props } = result;

    rerender(
      <InspirationPostCard
        {...props}
        post={{ ...props.post, media: [{ type: 'image', url: 'test.jpg' }] }}
      />
    );
    expect(container.querySelector('.post-media--empty')).not.toBeInTheDocument();

    rerender(
      <InspirationPostCard
        {...props}
        post={{ ...props.post, media: [] }}
        metaPreview={{ url: 'http://foo.com', title: 'Test' }}
      />
    );

    expect(container.querySelector('.post-media--empty')).not.toBeInTheDocument();

    rerender(<InspirationPostCard {...props} post={{ ...props.post, media: [] }} />);

    expect(container.querySelector('.post-media--empty')).toBeInTheDocument();
  });

  it('should optionally display inspirationActions', () => {
    const { container, rerender, props } = setup({
      inspirationActions: [{ icon: 'follow', onClick: jest.fn() }],
    });

    expect(
      container.querySelector('.inspiration-post-card__inspiration-actions')
    ).toBeInTheDocument();

    rerender(<InspirationPostCard {...props} inspirationActions={[]} />);

    expect(
      container.querySelector('.inspiration-post-card__inspiration-actions')
    ).not.toBeInTheDocument();

    rerender(<InspirationPostCard {...props} inspirationActions={null} />);

    expect(
      container.querySelector('.inspiration-post-card__inspiration-actions')
    ).not.toBeInTheDocument();
  });

  it('should handle the inspirationActions prop', async () => {
    const follow = jest.fn();
    const like = jest.fn();
    const { container } = setup({
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

    const icons = container.querySelectorAll('.inspiration-post-card__inspiration-actions .icon');

    expect(icons).toHaveLength(2);

    await userEvent.click(icons[0]);
    await userEvent.click(icons[1]);

    expect(follow).toHaveBeenCalledTimes(1);
    expect(like).toHaveBeenCalledTimes(0); // because like isActive
  });

  it('should optionally display post metrics', () => {
    const result = setup();
    const { container, rerender, props } = result;

    rerender(<InspirationPostCard {...props} post={{ ...props.post, metrics: { likes: 3 } }} />);
    expect(container.querySelector('.inspiration-post-card__metrics')).toBeInTheDocument();

    rerender(<InspirationPostCard {...props} post={{ ...props.post, metrics: {} }} />);

    expect(container.querySelector('.inspiration-post-card__metrics')).not.toBeInTheDocument();
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const card = container.firstChild as Element;
    expect(card).toHaveAttribute('tabIndex', '1');
    expect(card).toHaveAttribute('id', 'test');
  });
});
