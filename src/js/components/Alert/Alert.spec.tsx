import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import Alert from './Alert';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Alert',
    },
    overrides
  );
  const utils = render(<Alert {...props} />);

  return { ...utils, props };
};

describe('<Alert />', () => {
  it('should render', () => {
    const { container } = setup();

    expect(container).toMatchSnapshot();
  });

  it('should handle the children prop', () => {
    const { container } = setup();

    expect(container.textContent).toContain('Alert');
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<Alert {...props} className="custom" />);

    const alert = container.querySelector('.alert');
    expect(alert).toHaveClass('alert');
    expect(alert).toHaveClass('custom');
  });

  it('should handle the theme prop', () => {
    const { container, rerender, props } = setup();

    let alert = container.querySelector('.alert');
    expect(alert).toHaveClass('alert-primary');

    rerender(<Alert {...props} theme="secondary" />);

    alert = container.querySelector('.alert');
    expect(alert).not.toHaveClass('alert-primary');
    expect(alert).toHaveClass('alert-secondary');
  });

  it('should handle the tag prop', () => {
    const { container, rerender, props } = setup();

    let alert = container.querySelector('.alert');
    expect(alert?.tagName.toLowerCase()).toBe('div');

    rerender(<Alert {...props} tag="a" />);

    alert = container.querySelector('.alert');
    expect(alert?.tagName.toLowerCase()).toBe('a');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const alert = container.querySelector('.alert');
    expect(alert).toHaveAttribute('tabIndex', '1');
    expect(alert).toHaveAttribute('id', 'test');
  });

  it('should add a header', () => {
    const { container } = setup({ header: 'Bonjour' });

    const header = container.querySelector('h3');
    expect(header).toBeInTheDocument();
    expect(header?.textContent).toBe('Bonjour');
  });

  describe('Icon', () => {
    it('should hide the icon if no icon is set for the theme or in props', () => {
      const { container } = setup();

      expect(container.querySelector('.icon')).not.toBeInTheDocument();
    });

    it('should show an icon if an icon is set in the props', () => {
      const { container } = setup({ icon: 'info' });

      expect(container.querySelector('.icon')).toBeInTheDocument();
    });

    it('should show an icon if an icon is set for the theme', () => {
      const { container } = setup({ theme: 'danger' });

      expect(container.querySelector('.icon')).toBeInTheDocument();
    });

    it('should hide the icon if hideIcon is true', () => {
      const { container, rerender, props } = setup({ theme: 'danger' });

      expect(container.querySelector('.icon')).toBeInTheDocument();

      rerender(<Alert {...props} theme="danger" hideIcon />);

      expect(container.querySelector('.icon')).not.toBeInTheDocument();
    });
  });
});
