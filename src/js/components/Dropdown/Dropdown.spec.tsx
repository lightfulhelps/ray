import React from 'react';
import merge from 'lodash/merge';
import { shallow } from 'enzyme';
import { Dropdown } from '../..';

const setup = (overrides = {}) => {
  const props = merge(
    {
      render: jest.fn(),
    },
    overrides
  );
  const wrapper = shallow(<Dropdown {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('<Dropdown />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle the className prop', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('dropdown')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });

  // TODO : rewritte these test for user
  //   describe('handleToggle', () => {
  //     it('should update isOpen in state', () => {
  //       const { wrapper } = setup();

  //       expect(wrapper.state('isOpen')).toBe(false);

  //       wrapper.instance().handleToggle();

  //       expect(wrapper.state('isOpen')).toBe(true);

  //       wrapper.instance().handleToggle();

  //       expect(wrapper.state('isOpen')).toBe(false);
  //     });
  //   });

  //   it('should set isOpen false on document click', () => {
  //     const { wrapper } = setup();

  //     wrapper.instance().handleToggle();

  //     document.body.click();

  //     expect(wrapper.state('isOpen')).toBe(false);
  //   });
});
