import React from 'react';
import { render } from '@testing-library/react';
import merge from 'lodash/merge';
import { CharacterCounter } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      text: '',
    },
    overrides
  );
  const utils = render(<CharacterCounter {...props} />);

  return { ...utils, props };
};

describe('<CharacterCounter />', () => {
  it('should render', () => {
    const { container } = setup({ text: 'Text', max: 5 });

    expect(container).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { container, rerender, props } = setup();

    rerender(<CharacterCounter {...props} className="custom" />);

    const counter = container.querySelector('.character-counter');
    expect(counter).toHaveClass('character-counter');
    expect(counter).toHaveClass('custom');
  });

  it('should handle max', () => {
    const { container, rerender, props } = setup({ max: 10 });

    expect(container.textContent).toContain('0/10');

    rerender(<CharacterCounter {...props} max={60000} />);

    expect(container.textContent).toContain('0/60,000');
  });

  it('should handle count', () => {
    const { container } = setup({ count: 5 });

    expect(container.textContent).toContain('5');
  });

  it('should handle text', () => {
    const { container, rerender, props } = setup({ text: 'This is my text' });

    expect(container.textContent).toContain('15');

    let longText = '';

    for (let i = 1; i < 10000; i++) {
      longText += 'a';
    }

    rerender(<CharacterCounter {...props} text={longText} />);

    expect(container.textContent).toContain('9,999');
  });

  it('should use count over text length', () => {
    const { container } = setup({ count: 5, text: 'This is my text' });

    expect(container.textContent).toContain('5');
  });

  it('should pass through other props', () => {
    const { container } = setup({ tabIndex: 1, id: 'test' });

    const counter = container.querySelector('.character-counter');
    expect(counter).toHaveAttribute('tabIndex', '1');
    expect(counter).toHaveAttribute('id', 'test');
  });

  it('should add danger class if over max', () => {
    const { container, rerender, props } = setup({ text: 'Foo', max: 10 });

    let counter = container.querySelector('.character-counter');
    expect(counter).not.toHaveClass('text-danger');

    rerender(<CharacterCounter {...props} text="Some longer text" max={10} />);

    counter = container.querySelector('.character-counter');
    expect(counter).toHaveClass('text-danger');
  });
});
