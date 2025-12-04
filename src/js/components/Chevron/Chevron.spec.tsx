import React from 'react';
import { render } from '@testing-library/react';
import Chevron from './Chevron';

describe('Chevron', () => {
  it('should render correctly', () => {
    const { container } = render(<Chevron onClick={() => console.log('onClick', 'click')} />);
    expect(container).toMatchSnapshot();
  });

  it('should have the correct class', () => {
    const { container } = render(
      <Chevron className="foo" onClick={() => console.log('onClick', 'click')} />
    );
    const button = container.querySelector('.chevron-button');
    expect(button).toHaveClass('chevron-button');
    expect(button).toHaveClass('foo');
  });

  it('should have the defaut left chevron direction icon', () => {
    const { container } = render(<Chevron onClick={() => console.log('onClick', 'click')} />);
    expect(container).toMatchSnapshot();
  });

  it('should handle the direction correctly and change the icon', () => {
    const { container } = render(
      <Chevron direction="right" onClick={() => console.log('onClick', 'click')} />
    );
    expect(container).toMatchSnapshot();
  });
});
