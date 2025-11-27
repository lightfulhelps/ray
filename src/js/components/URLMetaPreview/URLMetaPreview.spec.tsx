import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import URLMetaPreview from './URLMetaPreview';

const setup = (overrides = {}) => {
  const props = merge(
    {
      title: "National Living Wage 'fails to cover families' basic needs",
      description:
        "Low-paid parents working full-time do not earn enough to meet their families' needs, a charity says.",
      image:
        'https://ichef.bbci.co.uk/news/1024/branded_news/81C6/production/_98022233_gettyimages-842414672-1.jpg',
      url: 'https://www.bbc.co.uk/news/business-45242008',
    },
    overrides
  );
  const utils = render(<URLMetaPreview {...props} />);

  return {
    ...utils,
    props,
  };
};

describe('<URLMetaPreview />', () => {
  it('should return null if no url', () => {
    const { container } = setup({ url: null });

    expect(container.firstChild).toBe(null);
  });

  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should render in vertical mode', () => {
    const { container } = setup({ isVertical: true });

    expect(container).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { container, rerender, props } = setup();

    rerender(<URLMetaPreview {...props} className="custom" />);

    const preview = container.querySelector('.url-meta-preview');
    expect(preview).toHaveClass('url-meta-preview');
    expect(preview).toHaveClass('custom');
  });

  it('should handle no image', () => {
    const { container, rerender, props } = setup();

    expect(container.querySelector('[data-testid="url-meta-preview-image"]')).toBeInTheDocument();

    rerender(<URLMetaPreview {...props} image={null} />);

    expect(
      container.querySelector('[data-testid="url-meta-preview-image"]')
    ).not.toBeInTheDocument();
  });

  it('should handle no description', () => {
    const { container, rerender, props } = setup();

    expect(
      container.querySelector('[data-testid="url-meta-preview-description"]')
    ).toBeInTheDocument();

    rerender(<URLMetaPreview {...props} description={null} />);

    expect(
      container.querySelector('[data-testid="url-meta-preview-description"]')
    ).not.toBeInTheDocument();
  });

  it('should format the url', () => {
    const { container } = setup();

    const urlElement = container.querySelector('[data-testid="url-meta-preview-url"]');
    expect(urlElement?.textContent).toBe('bbc.co.uk/news/business-45242008');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const preview = container.querySelector('.url-meta-preview');
    expect(preview).toHaveAttribute('tabIndex', '1');
    expect(preview).toHaveAttribute('id', 'test');
  });
});
