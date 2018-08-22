import React from 'react';
import { shallow } from 'enzyme';
import PostContent from './PostContent';

const setup = (overrides = {}) => {
  const props = {
    children:
      'Buttle UK helped more than 3,000 vulnerable families buy beds for their children last year. It fears thousands more across the UK may lack a bed of their own, leading to problems concentrating in school. The government said its welfare reforms were "supporting those who need it most".',
    ...overrides,
  };
  const wrapper = shallow(<PostContent {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<PostContent />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('post-content')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the children prop', () => {
    const { wrapper, props } = setup();

    expect(wrapper.childAt(0).prop('children')).toEqual(props.children);
  });

  it('should handle the lines prop', () => {
    const { wrapper } = setup({ lines: 3 });

    expect(wrapper.childAt(0).prop('clamp')).toEqual(3);
  });
});
