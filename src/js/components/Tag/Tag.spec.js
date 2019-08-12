import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';
import Tag from './Tag';

const setup = (overrides = {}) => {
  const props = merge(
    {
      children: 'Social For Good',
    },
    overrides
  );
  const wrapper = shallow(<Tag {...props} />);

  return { wrapper, props };
};

describe('<Tag />', () => {
  it('should render', () => {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a remove Icon', () => {
    const { wrapper } = setup({ onRemove: jest.fn() });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle children', () => {
    const { wrapper } = setup({ children: 'Test' });

    expect(wrapper.find('div').prop('children')).toContain('Test');
  });

  it('should handle className', () => {
    const { wrapper } = setup();

    wrapper.setProps({ className: 'custom' });

    expect(wrapper.hasClass('tag')).toBe(true);
    expect(wrapper.hasClass('custom')).toBe(true);
  });

  it('should handle onRemove', () => {
    const onRemove = jest.fn();
    const { wrapper } = setup({ onRemove });

    wrapper.find('[data-test-id="tag-remove-icon"]').simulate('click');

    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('should pass through other props', () => {
    const { wrapper } = setup({ tabIndex: 1, id: 'test' });

    expect(wrapper.prop('tabIndex')).toEqual(1);
    expect(wrapper.prop('id')).toEqual('test');
  });
});
