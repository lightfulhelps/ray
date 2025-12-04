import React from 'react';
import { render, screen } from '@testing-library/react';
import merge from 'lodash/merge';
import CampaignCard from './CampaignCard';

const setup = (overrides = {}) => {
  const props = merge(
    {
      cover: 'http://lorempixel.com/640/480',
      title: 'THX distributed',
      state: 'Live',
    },
    overrides
  );
  const renderResult = render(<CampaignCard {...props} />);

  return { ...renderResult, props };
};

describe('<CampaignCard />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    setup({ className: 'custom' });

    const card = screen.getByTestId('campaign-card');
    expect(card).toHaveClass('campaign-card');
    expect(card).toHaveClass('custom');
  });

  it('should handle the cover prop', () => {
    const cover = 'http://lorempixel.com/b924f7e6-5434-4ef4-bdc6-2670b799f27c';
    setup({ cover });

    const coverElement = screen.getByTestId('campaign-card-cover') as HTMLElement;
    expect(coverElement.style.backgroundImage).toContain(cover);
  });

  it('should handle the title prop', () => {
    const title = 'azure Handcrafted Wooden Car';
    setup({ title });

    expect(screen.getByTestId('campaign-card-title')).toHaveTextContent(title);
  });

  it('should handle the Live state', () => {
    setup({ state: 'Live' });

    const stateElement = screen.getByTestId('campaign-card-state');
    expect(stateElement).toHaveTextContent('Live');
    expect(stateElement).toHaveClass('text-primary');
    expect(stateElement).not.toHaveClass('text-warning');
  });

  it('should handle the Draft state', () => {
    setup({ state: 'Draft' });

    const stateElement = screen.getByTestId('campaign-card-state');
    expect(stateElement).toHaveTextContent('Draft');
    expect(stateElement).not.toHaveClass('text-primary');
    expect(stateElement).toHaveClass('text-warning');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let card = container.firstChild as Element;
    expect(card?.tagName.toLowerCase()).toBe('div');

    rerender(<CampaignCard {...props} tag="a" />);

    card = container.firstChild as Element;
    expect(card?.tagName.toLowerCase()).toBe('a');
  });

  it('should pass through other props', () => {
    setup({ tabIndex: 1, id: 'test' });

    const card = screen.getByTestId('campaign-card');
    expect(card).toHaveAttribute('tabIndex', '1');
    expect(card).toHaveAttribute('id', 'test');
  });
});
