import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash/merge';
import MediaThumbnail from './MediaThumbnail';

const setup = (overrides = {}) => {
  const props = merge(
    {
      src: 'http://placeimg.com/640/480',
      alt: 'Checking Sausages invoice',
      checkbox: true,
      onClick: jest.fn(),
    },
    overrides
  );
  const utils = render(<MediaThumbnail {...props} />);

  return { ...utils, props };
};

describe('<MediaThumbnail />', () => {
  it('should render', () => {
    const { container } = setup();
    expect(container).toBeInTheDocument();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<MediaThumbnail {...props} className="custom" />);

    const thumbnail = container.querySelector('.media-thumbnail');
    expect(thumbnail).toHaveClass('media-thumbnail');
    expect(thumbnail).toHaveClass('custom');
  });

  it('should handle the checkbox prop', () => {
    const { container, rerender, props } = setup({ checkbox: false });

    expect(container.querySelector('input[type="checkbox"]')).not.toBeInTheDocument();

    rerender(<MediaThumbnail {...props} checkbox />);

    expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument();
  });

  it('should handle the isDisabled prop', () => {
    const { container, rerender, props } = setup({ isDisabled: false });

    let thumbnail = container.querySelector('.media-thumbnail');
    expect(thumbnail).not.toHaveClass('disabled');

    rerender(<MediaThumbnail {...props} isDisabled />);

    thumbnail = container.querySelector('.media-thumbnail');
    expect(thumbnail).toHaveClass('disabled');
  });

  it('should handle the isSelected prop', () => {
    const { container, rerender, props } = setup({ isSelected: false });

    let thumbnail = container.querySelector('.media-thumbnail');
    expect(thumbnail).not.toHaveClass('selected');

    rerender(<MediaThumbnail {...props} isSelected />);

    thumbnail = container.querySelector('.media-thumbnail');
    expect(thumbnail).toHaveClass('selected');
  });

  it('should call onClick with the src when clicked', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    const { container, props } = setup({ onClick });

    const link = container.querySelector('.stretched-link');
    await user.click(link!);

    expect(onClick).toHaveBeenCalledWith(props.src);
  });

  it('should not call onClick if isDisabled is true', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();
    const { container } = setup({ onClick, isDisabled: true });

    const thumbnail = container.querySelector('.media-thumbnail');
    await user.click(thumbnail!);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const thumbnail = container.querySelector('.media-thumbnail');
    expect(thumbnail).toHaveAttribute('tabIndex', '1');
    expect(thumbnail).toHaveAttribute('id', 'test');
  });
});
