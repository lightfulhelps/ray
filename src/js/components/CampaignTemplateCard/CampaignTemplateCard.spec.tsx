import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import CampaignTemplateCard from './CampaignTemplateCard';

const setup = (overrides = {}) => {
  const props = merge(
    {
      title: 'Create your own',
      description: "Don't use a template, do your own thing.",
      image: 'http://foo.com/bar.jpg',
      onClick: () => {
        // Empty function
      },
    },
    overrides
  );
  const renderResult = render(<CampaignTemplateCard {...props} />);

  return { ...renderResult, props };
};

describe('<CampaignTemplateCard />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render when isSelected', () => {
    const { container } = setup({ isSelected: true });

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container } = setup({ className: 'custom' });

    const card = container.firstChild as Element;
    expect(card).toHaveClass('campaign-template-card');
    expect(card).toHaveClass('custom');
  });

  it('should handle title', () => {
    const title = 'My title';
    setup({ title });

    expect(screen.getByTestId('campaign-template-card-title')).toHaveTextContent(title);
  });

  it('should handle description', () => {
    const description = 'My description';
    setup({ description });

    expect(screen.getByTestId('campaign-template-card-description')).toHaveTextContent(description);
  });

  it('should handle background image', () => {
    const image = 'bar.com/foo.jpg';
    setup({ image });

    const imageElement = screen.getByTestId('campaign-template-card-image') as HTMLElement;
    expect(imageElement.style.backgroundImage).toBe('url(bar.com/foo.jpg)');
  });

  it('should run onClick event when button is clicked', async () => {
    const onClick = jest.fn();
    setup({ onClick });

    const button = screen.getByTestId('campaign-template-card-button');
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const card = container.firstChild as Element;
    expect(card).toHaveAttribute('tabIndex', '1');
    expect(card).toHaveAttribute('id', 'test');
  });
});
