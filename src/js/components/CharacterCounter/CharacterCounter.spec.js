import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import { CharacterCounter } from '../../';

const setup = (overrides = {}) => {
  const props = merge({}, overrides);
  const wrapper = shallow(<CharacterCounter {...props} />);

  return { wrapper, props };
};

describe('<CharacterCounter />', () => {
  it('should render', () => {
    const { wrapper } = setup({ text: 'Text', max: 5 });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('character-counter')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle max', () => {
    const { wrapper } = setup({ max: 10 });

    expect(wrapper.text()).toEqual('<Icon />0/10');
  });

  it('should handle text', () => {
    const { wrapper } = setup({ text: 'This is my text' });

    expect(wrapper.text()).toEqual('<Icon />15');
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });

  it('should add danger class if over max', () => {
    const { wrapper } = setup({ text: 'Foo', max: '10' });

    expect(wrapper.hasClass('text-danger')).toEqual(false);

    wrapper.setProps({ text: 'Some longer text' });

    expect(wrapper.hasClass('text-danger')).toEqual(true);
  });
});
