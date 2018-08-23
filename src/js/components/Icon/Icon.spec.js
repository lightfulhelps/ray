import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';
import icons from './icons';

jest.mock('./icons', () => ({
  analytics: (
    <g fillRule="nonzero">
      <path fill="none" d="M-2-5h24v24H-2z" />
      <path d="M4.5883 15H.8613C.3855 15 0 14.6427 0 14.2017V.7983C0 .3573.3855 0 .8613 0h3.727c.4758 0 .8613.3573.8613.7983v13.4034c-.0007.441-.3862.7983-.8613.7983zm7.2749 0h-3.727c-.4759 0-.8613-.3573-.8613-.7983V3.6765c0-.441.3854-.7983.8612-.7983h3.727c.4759 0 .8614.3573.8614.7983v10.5252c0 .441-.3855.7983-.8613.7983zm7.2755 0h-3.727c-.4758 0-.8613-.3573-.8613-.7983V6.258c0-.441.3855-.7983.8613-.7983h3.727c.4758 0 .8613.3573.8613.7983v7.9436c0 .441-.3855.7983-.8613.7983z" />
    </g>
  ),
  comment: (
    <g fillRule="nonzero">
      <path fill="none" d="M-4-5h24v24H-4z" />
      <path d="M11.2995.016c-.0656-.0064-.1312-.0128-.2-.016-.95.0032-1.9.0043-2.85.0032-.2406 0-1.5687 0-3.0812-.0032-.3907.0192-.675.0416-.775.0608C1.5213.5757-.4192 3.4668.0776 6.4122c.4657 2.7664 2.6407 4.6565 5.3844 4.6725.7406.0032 1.4813-.0096 2.2219.0096.1734.006.341.065.4812.1695.7625.6076 1.5063 1.244 2.2688 1.8517.2625.2079.5531.3965.8562.518.5657.224 1.047-.0287 1.2438-.6236a2.651 2.651 0 0 0 .1281-.678 15.506 15.506 0 0 0 .0094-1.3208c-.0094-.2366.0594-.3646.275-.4765 2.1094-1.1002 3.2156-3.1374 3.0344-5.552-.1938-2.552-2.1994-4.73-4.6813-4.9666z" />
    </g>
  ),
}));

const setup = (overrides = {}) => {
  const props = {
    color: '#ff0000',
    hoverColor: '#ffff00',
    name: 'analytics',
    size: 30,
    ...overrides,
  };
  const wrapper = shallow(<Icon {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Icon />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup({ className: 'custom' });

    expect(wrapper.hasClass('icon')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle the color prop', () => {
    const { wrapper } = setup({ color: '#ffff00' });

    expect(wrapper.prop('style')).toEqual({
      fill: '#ffff00',
    });
  });

  it('should handle the name prop', () => {
    const { wrapper } = setup({ name: 'analytics' });

    expect(wrapper.contains(icons.analytics)).toBe(true);

    wrapper.setProps({ name: 'comment' });

    expect(wrapper.contains(icons.comment)).toBe(true);
  });

  it('should handle the size prop', () => {
    const { wrapper } = setup({ size: 20 });

    expect(wrapper.prop('width')).toEqual(20);
    expect(wrapper.prop('height')).toEqual(20);
  });

  it('should handle the style prop', () => {
    const { wrapper } = setup({ style: { marginTop: '5px' } });

    expect(wrapper.prop('style')).toEqual({
      fill: '#ff0000',
      marginTop: '5px',
    });
  });

  it('should overwrite existing styles', () => {
    const { wrapper } = setup({ style: { fill: 'blue' } });

    expect(wrapper.prop('style')).toEqual({
      fill: 'blue',
    });
  });

  it('should handle the viewBox prop', () => {
    const { wrapper } = setup({ viewBox: '0 0 16 16' });

    expect(wrapper.prop('viewBox')).toEqual('0 0 16 16');
  });

  it('should update state on mouse enter and mouse leave', () => {
    const { wrapper } = setup();

    expect(wrapper.state('hover')).toBe(false);

    wrapper.simulate('mouseEnter');

    expect(wrapper.state('hover')).toBe(true);

    wrapper.simulate('mouseLeave');

    expect(wrapper.state('hover')).toBe(false);
  });

  it('should not update fill color on hover if hoverColor is not provided', () => {
    const { wrapper } = setup({ color: 'red', hoverColor: null });

    expect(wrapper.prop('style')).toEqual({ fill: 'red' });

    wrapper.simulate('mouseEnter');

    expect(wrapper.prop('style')).toEqual({ fill: 'red' });

    wrapper.simulate('mouseLeave');

    expect(wrapper.prop('style')).toEqual({ fill: 'red' });
  });

  it('should update fill color on hover if hoverColor is provided', () => {
    const { wrapper } = setup({ color: 'red', hoverColor: 'blue' });

    expect(wrapper.prop('style')).toEqual({ fill: 'red' });

    wrapper.simulate('mouseEnter');

    expect(wrapper.prop('style')).toEqual({ fill: 'blue' });

    wrapper.simulate('mouseLeave');

    expect(wrapper.prop('style')).toEqual({ fill: 'red' });
  });
});
