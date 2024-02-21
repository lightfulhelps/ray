import React from 'react';
import { shallow } from 'enzyme';
import Chevron from './Chevron';

describe('Chevron', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Chevron onClick={() => console.log('click')} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the correct class', () => {
    const wrapper = shallow(<Chevron className="foo" onClick={() => console.log('click')} />);
    expect(wrapper.hasClass('chevron-button foo')).toBe(true);
  });

  it('should have the defaut left chevron direction icon', () => {
    const wrapper = shallow(<Chevron onClick={() => console.log('click')} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the direction correctly and change the icon', () => {
    const wrapper = shallow(<Chevron direction="right" onClick={() => console.log('click')} />);
    expect(wrapper).toMatchSnapshot();
  });
});
